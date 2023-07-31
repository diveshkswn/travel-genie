"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getLangChainData,
  getPopularDestinations,
  setCookie,
} from "@/utils/helpers";
import { ActivityItem } from "./ActivityItem/ActivityItem";
import { StyledContainer, ActivityContainer } from "./index.styles";
import { constants } from "@/utils/constants";
import Loader from "@/components/Loader/Loader";
import Button from "@/components/Button/Button";

const ActivitySelector: React.FC<ActivitySelectorProps> = ({ activities }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const { RECOMMENDED_DESTINATION_PROMPT } = constants;

  useEffect(() => {
    const data: string[] = JSON.parse(
      sessionStorage.getItem("selectedActivities") || "[]"
    );
    setSelectedActivities(data);
  }, []);

  const handleActivityClick = (activityName: string) => {
    if (selectedActivities.includes(activityName)) {
      setSelectedActivities(
        selectedActivities.filter((name) => name !== activityName)
      );
    } else {
      setSelectedActivities([...selectedActivities, activityName]);
    }
  };

  const handleSaveClick = async () => {
    const location = JSON.parse(sessionStorage.getItem("locationInfo") || "{}");
    setIsLoading(true);
    const prompt = RECOMMENDED_DESTINATION_PROMPT.replace(
      "{selectedActivities}",
      selectedActivities.join(" ")
    );
    const popularDestinationPrompt = RECOMMENDED_DESTINATION_PROMPT.replace(
      "{selectedActivities}",
      ""
    ).concat(`country ${location?.country_name}`);

    const recommendedDestination = await getLangChainData(prompt, 3);

    const popularDestination = await getLangChainData(
      popularDestinationPrompt,
      5
    );

    sessionStorage.setItem(
      "selectedActivities",
      JSON.stringify(selectedActivities)
    );

    if (popularDestination.length) {
      sessionStorage.setItem(
        "popularDestination",
        JSON.stringify(popularDestination)
      );
    }
    if (recommendedDestination?.length) {
      sessionStorage.setItem(
        "recommendedDestination",
        JSON.stringify(recommendedDestination)
      );
      setCookie("recommendedDestination", true);
    }

    router.push("discover");
  };

  return (
    <ActivityContainer
      style={{
        overflow: isLoading ? "hidden" : "auto",
      }}
    >
      <div className="header">
        <h1>Choose Your Travel Style</h1>
        <p>Uncover Your Ideal Travel Style</p>
      </div>
      <StyledContainer>
        {activities.map((activity) => (
          <ActivityItem
            key={activity.id}
            activity={activity}
            selected={selectedActivities.includes(activity.name)}
            onClick={() => handleActivityClick(activity.name)}
          />
        ))}
      </StyledContainer>
      <Button text="Save" handleClick={handleSaveClick} className="save-btn" />
      {isLoading && <Loader />}
    </ActivityContainer>
  );
};

export default ActivitySelector;
