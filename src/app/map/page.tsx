import MapWrapper from "./MapWrapper";

export default function MapPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
        Interactive Map with Drag & Drop GeoJSON
      </h1>
      <MapWrapper />
    </div>
  );
}
