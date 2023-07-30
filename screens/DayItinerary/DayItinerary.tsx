"use client";

import React, { useEffect, useState } from 'react';
import { Banner, BannerText, Main, MainTags, StyledContainer } from "./index.styles";
import { ItinerayProps } from '../DetailView/index.types';
import { GenericImages } from '@/components/GenericImages/GenericImages';
import ItineraryTimeline from './ItineraryTimeline/ItineraryTimeline';

export default function DayItinerary() {
    const [itinerayDayData, setItinerayDayData] = useState<ItinerayProps>();
    const [selectedDayIndex, setSelectedDay] = useState(0);
    const selectedActivitiesData: string[] = JSON.parse(
        sessionStorage.getItem("selectedActivities") || "[]"
    );
    const showTags = selectedActivitiesData?.length ? true : false;
    const tagsArray = selectedActivitiesData;
    const showTimeline = Boolean(itinerayDayData?.morning || itinerayDayData?.afternoon || itinerayDayData?.evening);
    const itineraryArray = [itinerayDayData?.morning, itinerayDayData?.afternoon, itinerayDayData?.evening];
    const formattedDayTimeline = itineraryArray.map(time => {
        return {
            time: `${time?.[0].from_time} - ${time?.[0].to_time}`,
            title: time?.[0].placeName || '',
            description: time?.[0].activity || '',
        }
    })
    const itinerayDayArray = formattedDayTimeline;
    const imageUrlArray = Array(4).fill(itinerayDayData?.destinationImgUrl);
    useEffect(() => {
        const itinerary: ItinerayProps[] = JSON.parse(
            sessionStorage.getItem("itinerayData") || "[]"
        );
        const selectedDayIndex: number = JSON.parse(
            sessionStorage.getItem("selectedDayIndex") || "0"
        );
        setSelectedDay(selectedDayIndex);
        setItinerayDayData(itinerary[selectedDayIndex]);
    }, []);
    return (
        <>
            <StyledContainer>
                <Banner style={{
                    backgroundImage: `url(${itinerayDayData?.destinationImgUrl})`,
                    backgroundSize: 'cover'
                }}>
                    <div className="overlay"></div>
                    <BannerText>
                        <h1>Day {selectedDayIndex + 1}, {itinerayDayData?.destination}</h1>
                    </BannerText>
                </Banner>
            </StyledContainer>
            <Main>
                <div>
                    <p>
                        {itinerayDayData?.destinationDesc}
                    </p>
                </div>
                <GenericImages images={imageUrlArray} imgHeight='70px' imgWidth='70px' />
                {showTags ?
                    (<MainTags>
                        {tagsArray.map((tag, index) => (
                            <a key={index + tag}>{tag}</a>
                        ))}

                    </MainTags>) : null}
            </Main>
            {showTimeline ? (
                <ItineraryTimeline itinerary={itinerayDayArray} heading={'Day ' + Number(selectedDayIndex + 1) + ', Itinerary'} />
            ) : null}
        </>
    );
}
