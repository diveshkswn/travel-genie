import React from 'react';
import styled from 'styled-components';
import { TimelineContainer, TimelineItem, TimelineConnector, TimelineDot, TimelineItemTime, TimelineItemTitle, TimelineItemDescription } from './index.styles';
import { ItineraryTimelineProps } from './index.types';

const ItineraryTimeline: React.FC<ItineraryTimelineProps> = ({ itinerary, heading }) => {
    return (
        <TimelineContainer className='secondary-fg'>
            <h2>{heading}</h2>
            <hr />
            {itinerary.map((item, index) => (
                <TimelineItem key={index} style={{
                    background: `linear-gradient(${index % 2 === 0 ? 'to left, rgba(66, 99, 122, 0.3) 50%, rgba(0, 0, 0, 0) 50%' : 'to Right, rgba(66, 99, 122, 0.3) 50%, rgba(0, 0, 0, 0) 50%'}`
                }}>
                    {index >= 0 && <TimelineConnector />}
                    <TimelineDot />
                    <div className='timeline-details' style={{ marginLeft: index % 2 === 0 ? '55%' : '' }}>
                        <TimelineItemTime>{item.time}</TimelineItemTime>
                        <TimelineItemTitle>{item.title}</TimelineItemTitle>
                        <TimelineItemDescription>{item.description}</TimelineItemDescription>
                    </div>
                </TimelineItem>
            ))}
        </TimelineContainer>
    );
};

export default ItineraryTimeline;