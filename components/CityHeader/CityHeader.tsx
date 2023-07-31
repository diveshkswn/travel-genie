import React, { useEffect, useState, memo } from "react";
import { CityHeaderSection } from "./CityHeader.styles";
import { CityHeaderProps, WeatherData } from "./CityHeader.types";

export function CityHeader(props: CityHeaderProps) {
  // Set Icon list for weathers
  // Define an enum for possible weather conditions
  enum WeatherCondition {
    Clouds = "clouds",
    Sunny = "sunny",
    Thunderstorm = "Thunderstorm",
    Rain = "Rain",
  }

  // Define the type for the weatherIcon object
  interface WeatherIcons {
    [key: string]: string;
  }

  // Define the weatherIcon object with explicit type
  const weatherIcon: WeatherIcons = {
    [WeatherCondition.Clouds]:
      "https://edge.ixigo.com/st/plan/_next/static/media/03d.ca781121.svg",
    [WeatherCondition.Sunny]:
      "https://edge.ixigo.com/st/plan/_next/static/media/01d.74ad193b.svg",
    [WeatherCondition.Thunderstorm]:
      "https://edge.ixigo.com/st/plan/_next/static/media/03d.ca781121.svg",
    [WeatherCondition.Rain]:
      "https://edge.ixigo.com/st/plan/_next/static/media/03d.ca781121.svg",
  };

  // Set Intial Weather State with current City
  const [weatherData, setWeatherData] = useState<WeatherData>({
    main: { temp: 0 },
    weather: [{ main: "" }],
  });
  const DestiName = props.city;
  // Fetch Weather data for current city
  const fetchData = async (DestiName: string) => {
    try {
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
      const CityName = DestiName;
      const APPID = "bdbac465acd9807fd4bdd70b1bf9af99";

      const url = `${apiUrl}?q=${encodeURIComponent(
        CityName
      )}&APPID=${encodeURIComponent(APPID)}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const convertToFahrenheit = (temp: number): number => {
    return temp - 273.15;
  };

  useEffect(() => {
    console.log("dfdfdfdfd", DestiName);
    if (DestiName) {
      fetchData(DestiName);
    }
  }, []);

  const weatherCondition = weatherData?.weather?.[0]?.main;
  const weatherIcons = weatherIcon[weatherCondition?.toLowerCase()] || 'https://edge.ixigo.com/st/plan/_next/static/media/01d.74ad193b.svg';
  return (
    <CityHeaderSection className="HeaderContainer">
      {convertToFahrenheit(weatherData?.main?.temp).toFixed(2)}°C -{" "}
      <img
        src={weatherIcons}
        width="20px"
        height="20px"
        className="weatherIcon"
      />
    </CityHeaderSection>
  );
}

export default memo(CityHeader);
