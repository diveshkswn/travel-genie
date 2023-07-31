"use client";

import React, { useEffect, useState } from "react";
import {
  Banner,
  BannerText,
  Main,
  MainTags,
  StyledContainer,
} from "./index.styles";
import { ItinerayProps } from "../DetailView/index.types";
import { GenericImages } from "@/components/GenericImages/GenericImages";
import ItineraryTimeline from "./ItineraryTimeline/ItineraryTimeline";

export default function DayItinerary() {
  const [imageUrlArray, setImageURLArray] = useState<string[]>([]);
  const [itinerayDayData, setItinerayDayData] = useState<ItinerayProps>();
  const [selectedDayIndex, setSelectedDay] = useState(0);
  const [selectedActivitiesData, setSelectedActivitiesData] = useState<
    string[]
  >([]);
  const showTags = selectedActivitiesData?.length ? true : false;
  const tagsArray = selectedActivitiesData;
  const showTimeline = Boolean(
    itinerayDayData?.morning ||
      itinerayDayData?.afternoon ||
      itinerayDayData?.evening
  );
  const itineraryArray = [
    itinerayDayData?.morning,
    itinerayDayData?.afternoon,
    itinerayDayData?.evening,
  ];
  const formattedDayTimeline = itineraryArray.map((time) => {
    return {
      time: `${time?.[0].from_time} - ${time?.[0].to_time}`,
      title: time?.[0].placeName || "",
      description: time?.[0].activity || "",
    };
  });
  const itinerayDayArray = formattedDayTimeline;
  useEffect(() => {
    const itinerary: ItinerayProps[] = JSON.parse(
      sessionStorage.getItem("itinerayData") || "[]"
    );
    const selectedDayIndex: number = JSON.parse(
      sessionStorage.getItem("selectedDayIndex") || "0"
    );
    const selectedActivities: string[] = JSON.parse(
      sessionStorage.getItem("selectedActivities") || "[]"
    );
    const imageData: string[] = [];
    itinerary.forEach((item) => {
      imageData.push(
        item?.destinationImgUrl ||
          "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86"
      );
    });
    setSelectedDay(selectedDayIndex);
    setItinerayDayData(itinerary[selectedDayIndex]);
    setImageURLArray(imageData);
    setSelectedActivitiesData(selectedActivities);
  }, []);
  return (
    <>
      <div
        className={!showTimeline ? "secondary-bg" : ""}
        style={!showTimeline ? { height: "100vh" } : {}}
      >
        <StyledContainer>
          <Banner
            style={{
              backgroundImage: `url(${itinerayDayData?.destinationImgUrl})`,
              backgroundSize: "cover",
            }}
          >
            <div className="overlay"></div>
            <BannerText>
              <h1>
                Day {selectedDayIndex + 1}, {itinerayDayData?.destination}
              </h1>
            </BannerText>
          </Banner>
        </StyledContainer>
        <Main>
          <div>
            <p>{itinerayDayData?.destinationDesc}</p>
          </div>
          <GenericImages
            images={imageUrlArray?.slice(0, 4)}
            imgHeight="70px"
            imgWidth="70px"
          />
          {showTags ? (
            <MainTags>
              {tagsArray.map((tag, index) => (
                <a key={index + tag}>{tag}</a>
              ))}
            </MainTags>
          ) : null}
        </Main>
      </div>
      {showTimeline ? (
        <ItineraryTimeline
          itinerary={itinerayDayArray}
          heading={"Day " + Number(selectedDayIndex + 1) + ", Itinerary"}
        />
      ) : null}
    </>
  );
}
