// /app/map/MapComponent.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapComponent() {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const mapRef = useRef(null);

  // Fix default marker icon issue in Leaflet
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
  }, []);

  // Handle dropped files
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        setGeoJsonData(json);

        // Zoom to bounds if map and data exist
        if (mapRef.current && json) {
          const map = mapRef.current;
          const geoJsonLayer = L.geoJSON(json);
          map.fitBounds(geoJsonLayer.getBounds());
        }
      } catch (err) {
        alert("Invalid GeoJSON file");
      }
    };

    reader.readAsText(file);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="h-[600px] w-full border-4 border-dashed border-gray-300 rounded-lg"
      style={{ position: "relative" }}
    >
      <MapContainer
        center={[20, 78]}
        zoom={5}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoJsonData && <GeoJSON data={geoJsonData} />}
      </MapContainer>

      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          padding: "6px 12px",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "6px",
          fontWeight: "bold",
          pointerEvents: "none",
          userSelect: "none",
          color: "#333",
        }}
      >
        Drag & drop a GeoJSON file here
      </div>
    </div>
  );
}
