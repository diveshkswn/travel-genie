export interface DetailViewProps {
    city: string;
    country: string;
    url: string;
    overview: string;
    chatId?: string;
    useGPT?: boolean;
}

export interface ItinerayProps {
    day: number;
    destination: string;
    cityName: string;
    country: string;
    cityOverview: string;
    destinationDesc: string;
    destinationImgUrl?: string;
    morning?: dayTimeItinerary[];
    afternoon?: dayTimeItinerary[];
    evening?: dayTimeItinerary[];
}

export interface dayTimeItinerary {
    placeName: string;
    activity: string;
    from_time: string;
    to_time: string;
}