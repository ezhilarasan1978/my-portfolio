"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([20, 0], 2);

    // Base map layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
    }).addTo(map);

    // Drag & drop setup
    const mapContainer = mapRef.current;

    mapContainer.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
      mapContainer.style.border = "3px dashed #00bfff";
    });

    mapContainer.addEventListener("dragleave", () => {
      mapContainer.style.border = "none";
    });

    mapContainer.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      mapContainer.style.border = "none";

      if (e.dataTransfer?.files.length) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
          try {
            const geojson = JSON.parse(event.target?.result as string);

            // Add GeoJSON layer with point styling
            const layer = L.geoJSON(geojson, {
              pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                  radius: 6,
                  fillColor: "#ff7800",
                  color: "#000",
                  weight: 1,
                  opacity: 1,
                  fillOpacity: 0.8,
                });
              },
            }).addTo(map);

            // Zoom to layer bounds
            map.fitBounds(layer.getBounds());
          } catch (err) {
            console.error("Invalid GeoJSON file", err);
          }
        };

        reader.readAsText(file);
      }
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Drag & Drop GeoJSON Viewer</h1>
      <div
        ref={mapRef}
        className="w-full h-[600px] rounded-lg shadow-lg"
        style={{ border: "none" }}
      />
      <p className="mt-2 text-gray-500 text-sm">
        Drop a <code>.geojson</code> file anywhere on the map to view it.
      </p>
    </div>
  );
}
