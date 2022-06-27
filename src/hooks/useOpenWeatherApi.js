import { useEffect, useState } from "react";
import settings from "../settings";

const useOpenWeatherApi = ({ lat, lng }) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Loading");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${settings.keys.openWeatherAPIKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === 200) {
          setData(json);
          setStatus("Success");
        } else {
          setStatus(json.message);
        }
      });
  }, [lat, lng]);

  return { data, status };
};

export default useOpenWeatherApi;
