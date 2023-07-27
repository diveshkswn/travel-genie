"use client";

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

  // Fetch Weather data for current city
  const fetchData = async (q = "rishikesh,india") => {
    try {
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
      const CityName = q;
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
    fetchData();
  }, []);

  const weatherCondition = weatherData?.weather[0]?.main;
  const weatherIcons = weatherIcon[weatherCondition.toLowerCase()];
  return (
    <CityHeaderSection className="HeaderContainer">
      <div>
        <h1>Rishikesh</h1>
        <p>
          {convertToFahrenheit(weatherData?.main?.temp).toFixed(2)}°C -{" "}
          {weatherCondition}
          <img
            src={weatherIcons}
            width="20px"
            height="20px"
            className="weatherIcon"
          />
        </p>
      </div>

      <div className="trip-selection">
        <span>
          <button
            data-testid="view-itinerary"
            className="text-white mx-auto inline-flex relative border-current rounded-full p-10 h-12 w-12 items-center justify-center mt-15"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18.7669 12a.725.725 0 0 1-.2127.5131l-6.0481 6.0425a.7254.7254 0 0 1-1.0253-1.0262l4.8085-4.8041H5.9585a.7253.7253 0 1 1 0-1.4506h10.3308l-4.8085-4.8041a.7253.7253 0 1 1 1.0253-1.0262l6.0481 6.0425a.725.725 0 0 1 .2127.5131Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </span>
      </div>
    </CityHeaderSection>
  );
}

export default memo(CityHeader);
