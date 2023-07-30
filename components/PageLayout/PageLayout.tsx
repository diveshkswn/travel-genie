"use client";

import { memo, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import momentjs from "moment";

import { GlobalStyles, lightTheme, darkTheme, nightLifeTheme, rainyDay,snowyTheme } from "@/utils/themes";
import { getData } from "@/utils/helpers";
import { cityImageArray } from "@/data/cityimage";
import { eventUtil } from "@/utils/eventUtils";

const themeMap = {
  lightTheme, darkTheme, nightLifeTheme, rainyDay, snowyTheme
};

const themeArray = ['lightTheme','darkTheme','RainyDay','NightLifeTheme','snowyTheme']

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

  const getCityImageJSON = (city: string) => {
    let data = {};
    cityImageArray.forEach((item) => {
      if(item.city === city){
        data = item.imgUrl;
      }
    })
    if(!Object.keys(data)?.length) {
      data = cityImageArray[2].imgUrl;
    }
    return data;
  }

  useEffect(() => {
    const asyncFunction = async() => {
      const locationInfo = await fetch(
        "https://api.ipdata.co/?api-key=c52cc586bb4f34411b035540bf6a17ad8009a71a79aabac724bda0f0"
      ).then(async (res) => {
        const response = await res.json();
        sessionStorage.setItem("locationInfo", JSON.stringify(response));
        return response;
      });
      // const locationInfo = JSON.parse(sessionStorage.getItem('locationInfo') || '{}');
      const weatherInfo = await fetchData(locationInfo.region);
      const imgURLs = getCityImageJSON(locationInfo.region);
      const {data} = await getData(`what will be the best suited theme from theme array: ${themeArray} and extract best suited image from cityImageJson: ${JSON.stringify(imgURLs)} based upon city is ${locationInfo.region},time is ${momentjs().hour()}, weather is ${weatherInfo.weather?.[0]?.main}. Please provide in exact array format: [{themeName, imageURL}]`);
      if(data?.[0]?.themeName) {
        setTheme(data?.[0]?.themeName);
      }
      if(data?.[0]?.imageURL) {
        sessionStorage.setItem('imageURL', data?.[0]?.imageURL);
        eventUtil.dispatch('backgroundImgURL', data?.[0]?.imageURL);
      }
    }
    asyncFunction();
  }, []);
  
  return (
    <ThemeProvider theme={themeMap[theme] || "darkTheme"}>
      <GlobalStyles />
      <main className="MainContainer">{children}</main>
    </ThemeProvider>
  );
}

export default memo(PageLayout);
