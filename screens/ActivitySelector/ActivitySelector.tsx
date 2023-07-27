"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getData } from "@/utils/helpers";
import { ActivityItem } from "./ActivityItem/ActivityItem";
import { StyledContainer } from "./index.styles";
import { constants } from "@/utils/constants";

const ActivitySelector: React.FC<ActivitySelectorProps> = ({ activities }) => {
  const router = useRouter();
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const { POPULAR_DESTINATION_PROMPT, RECOMMENDED_DESTINATION_PROMPT } = constants;

  useEffect(() => {
    const data: string[] = JSON.parse(sessionStorage.getItem("selectedActivities") || "[]");
    setSelectedActivities(data);
  },[])

  const handleActivityClick = (activityName: string) => {
    if (selectedActivities.includes(activityName)) {
      setSelectedActivities(selectedActivities.filter((name) => name !== activityName));
    } else {
      setSelectedActivities([...selectedActivities, activityName]);
    }
  };

  const handleSaveClick = async () => {
    const prompt = RECOMMENDED_DESTINATION_PROMPT.replace("{selectedActivities}",selectedActivities.join(""));
    
    const recommendedDestination = await getData(prompt);
    const popularDestination = await getData(POPULAR_DESTINATION_PROMPT);

    sessionStorage.setItem("selectedActivities",JSON.stringify(selectedActivities));
    sessionStorage.setItem("popularDestination",JSON.stringify(popularDestination));
    sessionStorage.setItem("recommendedDestination",JSON.stringify(recommendedDestination));
    
    router.push('discover');
  };

  return (
    <>
      <div style={{
        margin: '20px',
      }}>
        <h1>Select Activities</h1>
        <p>Activities that you might want to do:- </p>
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
      <button
        onClick={handleSaveClick}
        style={{
          backgroundColor: '#226dc4',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          margin: '50px',
          cursor: 'pointer',
          fontSize: '24px'
        }}
      >
        Save
      </button>
    </>
  );
};

export default ActivitySelector;
