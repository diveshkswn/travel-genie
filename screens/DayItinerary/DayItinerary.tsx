"use client";

import React, { useEffect, useState } from 'react';
import { Banner, BannerText, Main, MainTags, StyledContainer } from "./index.styles";
import { ItinerayProps } from '../DetailView/index.types';
import { GenericImages } from '@/components/GenericImages/GenericImages';
import ItineraryTimeline from './ItineraryTimeline/ItineraryTimeline';

export default function DayItinerary() {
    const [imageUrlArray, setImageURLArray] = useState<string[]>([]);
    const [itinerayDayData, setItinerayDayData] = useState<ItinerayProps>();
    const [selectedDayIndex, setSelectedDay] = useState(0);
    const tagsArray = ['night-life', 'dating', 'shopping', 'culture'];
    const showTags = true;
    const showTimeline = true;
    const itinerayDayArray = [{
        time: '1:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '2:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '3:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '4:30am',
        title: 'airport',
        description: 'land to airport',
    }];

    useEffect(() => {
        const itinerary: ItinerayProps[] = JSON.parse(
            sessionStorage.getItem("itinerayData") || "[]"
        );
        const selectedDayIndex: number = JSON.parse(
            sessionStorage.getItem("selectedDayIndex") || "0"
        );
        const imageData: string[] = [];
        itinerary.forEach((item) => {
            imageData.push(item?.destinationImgUrl || '')
        });
        setSelectedDay(selectedDayIndex);
        setItinerayDayData(itinerary[selectedDayIndex]);
        setImageURLArray(imageData);
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
