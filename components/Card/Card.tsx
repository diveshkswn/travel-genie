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
    let selectedIndex = index === -1 ? recents.length : index;
    if(index === -1) {
      const data = [...recents, { ...props }]
      if (data.length > 10) {
        data.shift(); // Remove the first element from the array
        selectedIndex = 9;
      }
      sessionStorage.setItem("recents", JSON.stringify(data));
    }
    sessionStorage.setItem("selectedIndex", JSON.stringify(selectedIndex));
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
