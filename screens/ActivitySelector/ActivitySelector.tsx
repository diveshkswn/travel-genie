"use client";

import React, { useState } from 'react';
import { ActivityItem } from './ActivityItem/ActivityItem';
import { StyledContainer } from './index.styles';

const ActivitySelector: React.FC<ActivitySelectorProps> = ({ activities }) => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const handleActivityClick = (activityName: string) => {
    if (selectedActivities.includes(activityName)) {
      setSelectedActivities(selectedActivities.filter((name) => name !== activityName));
    } else {
      setSelectedActivities([...selectedActivities, activityName]);
    }
  };

  const handleSaveClick = () => {
    sessionStorage.setItem('selectedActivities', JSON.stringify(selectedActivities));
  };

  return (
    <div className='activity-container' style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className='secondary-bg' style={{
        padding: '20px',
        fontFamily: 'fantasy',
        textAlign: 'center'
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
          margin: '50px auto',
          cursor: 'pointer',
          fontSize: '24px'
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ActivitySelector;