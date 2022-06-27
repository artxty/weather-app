import { useEffect, useState } from "react";

const API_KEY = "";

const useOpenWeatherApi = ({ lat, lng }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=imperial`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [lat, lng]);

  return { data, isLoading: data === null };
};

export default useOpenWeatherApi;
