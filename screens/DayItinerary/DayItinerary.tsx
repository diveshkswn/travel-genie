"use client";

import React, { useEffect, useState } from 'react';
import { Banner, BannerText, Main, MainTags, StyledContainer } from "./index.styles";
import { ItinerayProps } from '../DetailView/index.types';
import { GenericCarousel } from '@/components/GenericCarousel/GenericCarousel';
import ItineraryTimeline from './ItineraryTimeline/ItineraryTimeline';

export default function DayItinerary() {
    const [itinerayDayData, setItinerayDayData] = useState<ItinerayProps>();
    const [selectedDayIndex, setSelectedDay] = useState(0);
    const tagsArray = ['night-life', 'dating', 'shopping', 'culture'];
    const showTags = true;
    const showTimeline = true;
    const itinerayDayArray = [{
        time: '9:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '1:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '4:30am',
        title: 'airport',
        description: 'land to airport',
    }, {
        time: '5:30am',
        title: 'airport',
        description: 'land to airport',
    }];
    const imageUrlArray = ["https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86",
        "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86",
        "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86",
        "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=2000&t=st=1690444804~exp=1690445404~hmac=1f1a39206afea25566bec6506b122fb302985ec510793866e935aa7b0af7de86"]
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
                <GenericCarousel images={imageUrlArray} imgHeight='140px' imgWidth='140px' />
                {showTags ?
                    (<MainTags>
                        {tagsArray.map((tag, index) => (
                            <a
                                className={index + tag}
                            >
                                {tag}
                            </a>
                        ))}

                    </MainTags>) : null}
            </Main>
            {showTimeline ? (
                <ItineraryTimeline itinerary={itinerayDayArray} heading={'Day ' + selectedDayIndex + 1 + ', Itinerary'} />
            ) : null}
        </>
    );
}
