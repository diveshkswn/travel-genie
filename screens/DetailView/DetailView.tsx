"use client";

import { memo, useEffect, useState } from "react";

import { DetailViewProps, ItinerayProps } from "./index.types";
import { StyledSection } from "./index.styles";
import Button from "@/components/Button/Button";

const DetailView = () => {
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
  }, []);

  const { city, url, overview } = detail || {};

  return (
    <StyledSection>
      <div className="img-container">
        <img src={url} alt={city} />
        <h2 className="title">{city}</h2>
      </div>
      <div className="content-container">
        <span>Description</span>
        <p className="secondary-fg pt-3">{overview}</p>
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
                  "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86"
                }
                alt={item?.destination}
              />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button text="Continue" handleClick={() => {}} className="btn" />
      </div>
    </StyledSection>
  );
};

export default memo(DetailView);
