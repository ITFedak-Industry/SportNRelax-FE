import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useLeafletCssLoader } from './useLeafletCssLoader';

type Coordinate = [number, number];

interface Props {
  center: Coordinate;
  markers: {
    position: Coordinate;
    popup: string | JSX.Element;
  }[];
}

export const Map: React.FC<Props> = ({ center, markers }) => {
  const { loading, error } = useLeafletCssLoader();

  if (loading) {
    return <div>Map is loading...</div>;
  }

  if (error) {
    return <div>Failed to load map. You can try to check other approach</div>;
  }

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map(({ position, popup }, idx) => (
        <Marker key={idx} position={position}>
          <Popup>{popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
