"use client";

import { memo, useEffect, useState } from "react";

import { DetailViewProps } from "./index.types";
import { StyledSection } from "./index.styles";

const DetailView = () => {
  const [detail, setDetail] = useState<DetailViewProps>();

  useEffect(() => {
    const recents: DetailViewProps[] = JSON.parse(sessionStorage.getItem("recents") || '[]');
    const selectedIndex: number = JSON.parse(sessionStorage.getItem("selectedIndex") || '0');
    setDetail(recents[selectedIndex]);
  },[])
  
  const { city, url, review } = detail || {};

  return (
    <StyledSection>
      <div className="img-container">
        <img src={url} alt={city} />
        <h2 className="title">{city}</h2>
      </div>
      <div className="content-container">
        <span>Description</span>
        <p className="secondary-fg pt-3">{review}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="secondary">Continue</button>
      </div>
    </StyledSection>
  );
};

export default memo(DetailView);
