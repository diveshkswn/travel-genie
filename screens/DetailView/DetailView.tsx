"use client";

import { memo, useCallback, useEffect, useState } from "react";

import Search from "@/components/Search/Search";
import CityHeader from "@/components/CityHeader/CityHeader";
import Loader from "@/components/Loader/Loader";
import { getData, searchImageAPI } from "@/utils/helpers";
import { constants } from "@/utils/constants";

import { DetailViewProps, ItinerayProps } from "./index.types";
import { StyledSection } from "./index.styles";

const { UPDATE_SEARCH_PROMPT } = constants;

const DetailView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showWeather, showHideWeather] = useState(false);
  const [detail, setDetail] = useState<DetailViewProps>();
  const [itinerayData, setItinerayData] = useState<ItinerayProps[]>([]);

  useEffect(() => {
    const itineray: ItinerayProps[] = JSON.parse(
      sessionStorage.getItem("itinerayData") || "[]"
    );
    const recents: DetailViewProps[] = JSON.parse(
      sessionStorage.getItem("recents") || "[]"
    );
    const selectedIndex: number = JSON.parse(
      sessionStorage.getItem("selectedIndex") || "0"
    );
    setDetail(recents[selectedIndex]);
    setItinerayData(itineray);
    showHideWeather(true);
  }, []);

  const { city, url, overview, chatId, useGPT = false } = detail || {};

  const handleSearch = async (prompt: string, setSearchData: any) => {
    setIsLoading(true);
    console.log(chatId);
    const { data } = await getData(
      `${prompt} for chat id ${chatId} with default ${itinerayData?.[0]?.cityName} city if not mentioned in this prompt`,
      chatId
    );
    console.log("data", data);

    let tagNames = data.map((itinery: any) => itinery?.destination) || [];

    const { mainResponse, tagResponse } = await searchImageAPI(
      itinerayData?.[0]?.cityName,
      tagNames
    );
    let newItinerayData = data?.map((_i: any) => {
      if (Object.keys(tagResponse).includes(_i?.destination)) {
        return {
          ..._i,
          cityImageURL: mainResponse,
          destinationImgUrl: tagResponse[_i?.destination],
        };
      }
      return { ..._i, cityImageURL: mainResponse };
    });

    sessionStorage.setItem("itinerayData", JSON.stringify(newItinerayData));
    setItinerayData(newItinerayData);
    setIsLoading(false);
    showHideWeather(true);
    setTimeout(() => {
      setSearchData?.("");
    }, 500);
  };
  console.log("abc", itinerayData[0]);
  return (
    <StyledSection>
      {itinerayData[0]?.cityName}
      <div className="img-container">
        <img src={url} alt={itinerayData[0]?.cityName || city} />
        <h2 className="title">{itinerayData[0]?.cityName || city}</h2>
        {showWeather ? (
          <CityHeader city={itinerayData[0]?.cityName || city}></CityHeader>
        ) : null}
      </div>
      <div className="content-container">
        <span>Description</span>
        <p className="secondary-fg pt-3">
          {itinerayData[0]?.cityOverview || overview}
        </p>
        {itinerayData?.map((item, index) => {
          return (
            <div className="img-col" key={`itineray-${index}`}>
              <div className="day-details">
                <h3 className="date">Day {item.day}</h3>
                <h5 className="place">{item?.destination}</h5>
                <p className="place">{item?.destinationDesc}</p>
              </div>
              <img
                src={
                  item?.destinationImgUrl ||
                  "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86"
                }
                alt={item?.destination}
              />
            </div>
          );
        })}
      </div>
      {useGPT && (
        <Search
          searchClassName="search"
          handleSearch={(prompt: string, setSearchData) => {
            handleSearch(prompt, setSearchData);
          }}
          prompt={UPDATE_SEARCH_PROMPT}
        />
      )}
      {isLoading && <Loader />}
    </StyledSection>
  );
};

export default memo(DetailView);
