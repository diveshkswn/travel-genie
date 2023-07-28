export interface DetailViewProps {
    city: string;
    country: string;
    url: string;
    overview: string;
}

export interface ItinerayProps {
    [key: string]: {
        travelLocation: string;
    }
}