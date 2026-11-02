"use client";

import { useEffect } from "react";

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function linesOf(node: HTMLElement) {
  return node.innerText
    .split("\n")
    .map(clean)
    .filter(Boolean);
}

function editableText(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  const candidate = target.closest("h1,h2,h3,h4,h5,h6,p,a,button,li,span,figcaption,label,blockquote");
  if (!(candidate instanceof HTMLElement)) return null;
  if (candidate.closest("script, style, textarea, input")) return null;
  const nested = [...candidate.children].some((child) => child.tagName !== "BR");
  if (nested) return null;
  if (!clean(candidate.innerText)) return null;
  return candidate;
}

function editableImage(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  const image = target.closest("img");
  if (!(image instanceof HTMLImageElement)) return null;
  const width = image.clientWidth || image.width;
  const height = image.clientHeight || image.height;
  if (width < 24 && height < 24) return null;
  return image;
}

export function EditBridge() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("rediger") !== "1") return;

    const style = document.createElement("style");
    style.textContent = `
      .az-rediger h1:hover, .az-rediger h2:hover, .az-rediger h3:hover,
      .az-rediger h4:hover, .az-rediger h5:hover, .az-rediger h6:hover,
      .az-rediger p:hover, .az-rediger a:hover, .az-rediger button:hover,
      .az-rediger li:hover, .az-rediger figcaption:hover, .az-rediger label:hover,
      .az-rediger [contenteditable="true"], .az-rediger [contenteditable="plaintext-only"] {
        outline: 2px solid #007D4B;
        outline-offset: 3px;
        cursor: text;
      }
      .az-rediger img[data-az-image="1"]:hover { outline: 2px solid #007D4B; outline-offset: 3px; cursor: pointer; }
    `;
    document.head.appendChild(style);
    document.body.classList.add("az-rediger");

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg,image/png,image/webp,image/gif";
    input.hidden = true;
    document.body.appendChild(input);
    let activeImage: HTMLImageElement | null = null;

    const originals = new Map<HTMLElement, string[]>();
    const pending = new Map<HTMLElement, boolean>();
    const timers = new Map<HTMLElement, number>();

    function neighbors(node: HTMLElement) {
      const all = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6,p,a,button,li,figcaption,label")].filter(
        (item): item is HTMLElement => item instanceof HTMLElement && Boolean(clean(item.innerText)),
      );
      const index = all.indexOf(node);
      return {
        before: index > 0 ? clean(all[index - 1].innerText) : "",
        after: index >= 0 && index < all.length - 1 ? clean(all[index + 1].innerText) : "",
      };
    }

    function publish(node: HTMLElement) {
      const current = linesOf(node);
      const previous = originals.get(node) ?? [];
      if (current.join("\n") === previous.join("\n")) return;
      if (pending.get(node)) return;
      const count = Math.max(current.length, previous.length);
      const around = neighbors(node);
      for (let index = 0; index < count; index += 1) {
        const from = previous[index] ?? "";
        const to = current[index] ?? "";
        if (!from || !to || from === to) continue;
        pending.set(node, true);
        window.parent.postMessage(
          { source: "azgartner", type: "text", from, to, before: around.before, after: around.after },
          "*",
        );
        return;
      }
    }

    function watch(node: HTMLElement) {
      if (node.dataset.azWatch === "1") return;
      node.dataset.azWatch = "1";
      node.addEventListener("input", () => {
        const timer = timers.get(node);
        if (timer) window.clearTimeout(timer);
        timers.set(node, window.setTimeout(() => publish(node), 1000));
      });
      node.addEventListener("blur", () => {
        const timer = timers.get(node);
        if (timer) window.clearTimeout(timer);
        publish(node);
      });
    }

    const onClick = (event: MouseEvent) => {
      const image = editableImage(event.target);
      if (image) {
        event.preventDefault();
        event.stopPropagation();
        activeImage = image;
        input.value = "";
        input.click();
        return;
      }
      const text = editableText(event.target);
      if (!text) return;
      event.preventDefault();
      if (text.getAttribute("contenteditable") !== "plaintext-only") {
        originals.set(text, linesOf(text));
        text.contentEditable = "plaintext-only";
        text.spellcheck = true;
        watch(text);
      }
    };

    const onSubmit = (event: Event) => event.preventDefault();

    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file || !activeImage) return;
      const src = new URL(activeImage.currentSrc || activeImage.src, window.location.href).pathname;
      window.parent.postMessage({ source: "azgartner", type: "image", src, file }, "*");
    });

    const onResult = (event: MessageEvent) => {
      const data = event.data;
      if (!data || data.source !== "kundeportal") return;
      if (data.type === "text-saved" || data.type === "text-error") {
        document.querySelectorAll<HTMLElement>("[data-az-watch='1']").forEach((node) => {
          const stored = originals.get(node) ?? [];
          const slot = stored.indexOf(String(data.from));
          if (slot === -1) return;
          pending.set(node, false);
          if (data.type === "text-error") {
            node.innerText = stored.join("\n");
            return;
          }
          stored[slot] = clean(String(data.to));
          originals.set(node, stored);
          if (linesOf(node).join("\n") !== stored.join("\n")) publish(node);
        });
      }
      if (data.type === "image-updated" && activeImage && data.src) {
        activeImage.src = `${data.src}?t=${Date.now()}`;
      }
    };

    const onOver = (event: MouseEvent) => {
      const image = editableImage(event.target);
      if (image) image.dataset.azImage = "1";
    };

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    window.addEventListener("message", onResult);

    return () => {
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
      window.removeEventListener("message", onResult);
      style.remove();
      input.remove();
      document.body.classList.remove("az-rediger");
    };
  }, []);

  return null;
}
