import { memo } from "react";

import { CardProps } from "./index.types";
import { StyledCard } from "./index.styles";

const Card = (props: CardProps) => {
  const { isVertical = false, handleCardClick, ...rest } = props;
  const { city, country, url } = rest;

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
