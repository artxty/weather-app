import { useRef, useEffect, Children, cloneElement, useState } from "react";
import PropTypes from "prop-types";

function GoogleMap(props) {
  const { center, zoom, children } = props;
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
      <div ref={ref} id="map" style={{ width: "100%", height: "100%" }} />
      {Children.map(children, (child) => cloneElement(child, { map }))}
    </>
  );
}

GoogleMap.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GoogleMap;
