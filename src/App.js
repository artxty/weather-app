import { useState } from "react";
import Map from "./components/Map";
import Weather from "./components/Weather";
import useOpenWeatherApi from "./hooks/useOpenWeatherApi";
import settings from "./settings";

function App() {
  const [position, setPosition] = useState(settings.map.defaultLocation);
  const { isLoading, data } = useOpenWeatherApi(position);

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="h-screen flex flex-row flex-wrap justify-center items-center">
      <Map
        className="h-4/5 border rounded min-w-[350px] max-w-5xl grow m-5"
        zoom={settings.map.defaultZoom}
        position={position}
        onPositionChange={handlePositionChange}
      />
      <div className="h-4/5 border rounded p-10 m-5 flex flex-col justify-center grow max-w-sm">
        {isLoading ? (
          "Loading..."
        ) : (
          <Weather
            locationName={data.name}
            condition={data.weather[data.weather.length - 1].description}
            temp={data.main.temp}
            humidity={data.main.humidity}
            sunrise={data.sys.sunrise}
            sunset={data.sys.sunset}
            windSpeed={data.wind.speed}
            windDirection={data.wind.deg}
          />
        )}
      </div>
    </div>
  );
}

export default App;
