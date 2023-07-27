"use client";

import { memo, useEffect, useState } from "react";

import { DetailViewProps } from "./index.types";
import { StyledSection } from "./index.styles";
import Button from "@/components/Button/Button";

const DetailView = () => {
  const [detail, setDetail] = useState<DetailViewProps>();

  useEffect(() => {
    const recents: DetailViewProps[] = JSON.parse(sessionStorage.getItem("recents") || '[]');
    const selectedIndex: number = JSON.parse(sessionStorage.getItem("selectedIndex") || '0');
    setDetail(recents[selectedIndex]);
  },[])

  const { placeName, url, overview } = detail || {};

  return (
    <StyledSection>
      <div className="img-container">
        <img src={url} alt={placeName} />
        <h2 className="title">{placeName}</h2>
      </div>
      <div className="content-container">
        <span>Description</span>
        <p className="secondary-fg pt-3">{overview}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button text="Continue" handleClick={() => {}} className="btn"/>
      </div>
    </StyledSection>
  );
};

export default memo(DetailView);
