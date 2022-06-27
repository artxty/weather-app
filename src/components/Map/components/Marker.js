import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Marker(props) {
  const { onDragEnd } = props;
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(props);
    }
  }, [marker, props]);

  useEffect(() => {
    if (marker) {
      marker.addListener("dragend", onDragEnd);
    }
  });

  return null;
}

Marker.propTypes = {
  onDragEnd: PropTypes.func.isRequired,
};

export default Marker;
