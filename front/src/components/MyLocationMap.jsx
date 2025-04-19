import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MyLocationMap = () => {
  const position = [30.0444, 31.2357]; // Your coordinates

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          You're here: <br />
          Latitude: {position[0]} <br />
          Longitude: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyLocationMap;
