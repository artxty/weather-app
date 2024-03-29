import { Wrapper } from "@googlemaps/react-wrapper";
import PropTypes from "prop-types";

import GoogleMap from "./components/GoogleMap";
import Marker from "./components/Marker";

import settings from "../../settings";

function Map({ position, zoom, onPositionChange, className }) {
  const handleMarkerDragEnd = (e) => {
    onPositionChange({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };

  return (
    <div className={className}>
      <Wrapper apiKey={settings.keys.googleMapsAPIKey}>
        <GoogleMap
          center={position}
          zoom={zoom}
          marker={
            <Marker
              draggable
              onDragEnd={handleMarkerDragEnd}
              position={position}
            />
          }
        />
      </Wrapper>
    </div>
  );
}

Map.propTypes = {
  position: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  onPositionChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Map;
