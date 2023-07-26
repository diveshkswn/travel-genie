import { memo } from "react";
import { useRouter } from "next/navigation";

import { CardProps } from "./index.types";
import { StyledCard } from "./index.styles";

const Card = (props: CardProps) => {
  const router = useRouter();
  const { city, country, url, isVertical = false } = props;

  const handleCardClick = () => {
    const recents: CardProps[] = JSON.parse(sessionStorage.getItem("recents") || '[]');
    const index = recents.findIndex(item => item.city === city);
    if(index === -1) {
      sessionStorage.setItem("recents", JSON.stringify([...recents, { ...props }]));
    }
    sessionStorage.setItem("selectedIndex", JSON.stringify(index === -1 ? recents.length : index));
    router.push("detailView");
  };

  return (
    <StyledCard
      className={`secondary-bg ${isVertical ? "vertical-view" : ""}`}
      onClick={handleCardClick}
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
