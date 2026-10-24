"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [63.580232, 10.715951];

const pin = `
  <span style="position:relative;display:block;width:22px;height:22px">
    <span style="position:absolute;inset:-10px;border-radius:999px;background:rgba(0,125,75,.18)"></span>
    <span style="position:absolute;inset:0;border-radius:999px;background:#007D4B;box-shadow:0 8px 18px rgba(0,125,75,.35)"></span>
    <span style="position:absolute;left:6px;top:6px;width:10px;height:10px;border-radius:999px;background:#fff"></span>
  </span>
`;

export function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || mapRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: position,
        zoom: 14,
        scrollWheelZoom: false,
        zoomControl: false,
      });
      mapRef.current = map;

      L.control.zoom({ position: "bottomright" }).addTo(map);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const icon = L.divIcon({
        className: "az-map-pin",
        html: pin,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      L.marker(position, { icon, keyboard: false }).addTo(map);

      requestAnimationFrame(() => map.invalidateSize());
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="az-map relative isolate z-0 overflow-hidden rounded-lg border border-black/10 bg-[#e7e6e1]">
      <div ref={containerRef} className="h-[480px] w-full md:h-[560px]" />
      <a
        href="https://www.google.com/maps/search/?api=1&query=Alstadvegen+265,+7633+Frosta"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 z-10 rounded-full bg-white px-4 pt-[10px] pb-3 text-[16px] leading-[20.48px] tracking-[-0.32px] shadow-[0_8px_24px_rgba(20,20,20,0.12)] transition-colors duration-200 hover:text-[#007D4B]"
      >
        Alstadvegen 265, 7633 Frosta
      </a>
      <style>{`
        .az-map .leaflet-control-zoom {
          margin: 0 16px 16px 0;
          border: none;
          box-shadow: none;
        }
        .az-map .leaflet-bar {
          border: none;
          box-shadow: none;
        }
        .az-map .leaflet-bar a {
          width: 36px;
          height: 36px;
          line-height: 36px;
          border: 1px solid rgba(20, 20, 20, 0.08);
          border-radius: 999px;
          color: #141414;
          background: #fff;
          margin-bottom: 8px;
        }
        .az-map .leaflet-bar a:hover {
          color: #007D4B;
          background: #fff;
        }
        .az-map .leaflet-tile-pane {
          filter: saturate(0.8);
        }
        .az-map .leaflet-control-attribution {
          background: rgba(255, 255, 255, 0.82);
          font-size: 11px;
        }
        .az-map-pin {
          background: transparent;
          border: none;
        }
      `}</style>
    </div>
  );
}
