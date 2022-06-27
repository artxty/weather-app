import PropTypes from "prop-types";
import Field from "./components/Field";

function Weather({
  locationName,
  condition,
  temp,
  humidity,
  sunrise,
  sunset,
  windSpeed,
  windDirection,
}) {
  const getTimeFromTimestamp = (ts) => new Date(ts * 1000).toLocaleTimeString();

  return (
    <>
      <Field title="Location" value={locationName} />
      <Field title="Condition" value={condition} />
      <Field title="Temperature" value={temp} unit="F" />
      <Field title="Humidity" value={humidity} unit="%" />
      <Field title="Sunrise" value={getTimeFromTimestamp(sunrise)} />
      <Field title="Sunset" value={getTimeFromTimestamp(sunset)} />
      <Field title="Wind speed" value={windSpeed} unit="mph" />
      <Field title="Wind Direction" value={windDirection} unit="degrees" />
    </>
  );
}

Weather.propTypes = {
  locationName: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  sunrise: PropTypes.number.isRequired,
  sunset: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
  windDirection: PropTypes.number.isRequired,
};

export default Weather;
