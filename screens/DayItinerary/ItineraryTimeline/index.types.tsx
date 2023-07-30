export interface ItineraryItem {
    time: string;
    title: string;
    description: string;
  }
  
export interface ItineraryTimelineProps {
    itinerary: ItineraryItem[];
    heading: string;
}