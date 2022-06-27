import { useRef, useEffect, cloneElement, useState } from "react";
import PropTypes from "prop-types";

function GoogleMap(props) {
  const { center, zoom, marker } = props;
  const ref = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  });

  useEffect(() => {
    if (map) {
      map.setOptions(props);
    }
  }, [map, props]);

  return (
    <>
      <div ref={ref} className="w-full h-full" />
      {cloneElement(marker, { map })}
    </>
  );
}

GoogleMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  marker: PropTypes.node.isRequired,
};

export default GoogleMap;
