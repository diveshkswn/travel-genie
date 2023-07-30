import { memo } from "react";

import { CardProps } from "./index.types";
import { StyledCard } from "./index.styles";

const Card = (props: CardProps) => {
  const { isVertical = false, handleCardClick, ...rest } = props;
  const { city, country, url="https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86" } = rest;

  return (
    <StyledCard
      className={`secondary-bg ${isVertical ? "vertical-view" : ""}`}
      onClick={() => handleCardClick(rest)}
    >
      <img src={url} alt={city} />
      <div className="d-flex flex-column">
        <span>{city}</span>
        <span className="subtitle secondary-fg">{country}</span>
      </div>
    </StyledCard>
  );
};

export default memo(Card);
