import React, { useEffect, useState } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibmFnYTc2NzQiLCJhIjoiY21kMW5wcm56MXA2MTJxczN5NDluZ2t3cSJ9.pp8VtX_4P3OYbNuQv7ooGw';

function App() {
  const [map, setMap] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [77.5946, 12.9716],
      zoom: 13,
    });
    setMap(map);

    return () => map.remove();
  }, []);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setVehicles(data.vehicles || []);
    };
  }, []);

  useEffect(() => {
    if (!map) return;

    // Clear previous markers
    document.querySelectorAll('.mapboxgl-marker').forEach(el => el.remove());

    vehicles.forEach((v) => {
      new mapboxgl.Marker({ color: v.type === 'car' ? 'red' : v.type === 'bike' ? 'blue' : 'orange' })
        .setLngLat([v.lng, v.lat])
        .addTo(map);
    });
  }, [vehicles, map]);

  return (
    <div className="App">
      <h2>🚗 SmartMaps Live</h2>
      <div id="map" style={{ height: '90vh', width: '100%' }}></div>
    </div>
  );
}

export default App;
