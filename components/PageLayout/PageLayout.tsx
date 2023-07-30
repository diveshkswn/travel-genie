"use client";

import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme, nightLifeTheme, rainyDay,snowyTheme } from "@/utils/themes";
import momentjs from "moment";
import { getData } from "@/utils/helpers";

const themeMap = {
  lightTheme, darkTheme, nightLifeTheme, rainyDay,snowyTheme
};

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
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

function PageLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"darkTheme" | "lightTheme" | "nightLifeTheme" | "rainyDay" | "snowyTheme">("darkTheme");
  useEffect(() => {
    const asyncFunction = async() => {
      const locationInfo = JSON.parse(sessionStorage.getItem('locationInfo') || '{}');
      const weatherInfo = await fetchData(locationInfo.region);
      console.log()
      const {data} = await getData(`what will be the best suited theme from [lightTheme,darkTheme,RainyDay,NightLifeTheme,snowyTheme] based upon city is ${locationInfo.region},time is ${momentjs().hour()}, weather is ${weatherInfo.weather?.[0]?.main}. Please provide in exact array format: [{themeName}]`);
      if(data?.[0]?.themeName) {
        setTheme(data?.[0]?.themeName);
      }
    }
    asyncFunction();
  }, []);
  return (
    <ThemeProvider theme={themeMap[theme]}>
      <GlobalStyles />
      <main className="MainContainer">{children}</main>
    </ThemeProvider>
  );
}

export default memo(PageLayout);
