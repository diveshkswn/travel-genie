"use client";

import { memo } from "react";

import { DetailViewProps } from "./index.types";
import { StyledSection } from "./index.styles";

const DetailView = (props: DetailViewProps) => {
  const { city, url, review } = props;

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
