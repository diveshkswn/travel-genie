/* eslint-disable max-len */
import DetailView from "@/screens/DetailView/DetailView";

export default function DiscoverPage() {
  const mockData = {
    city: "Paris",
    country: "France",
    url: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    review:
      "Paris, the 'City of Love,' is renowned for its iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. With its charming streets, delectable cuisine, and rich history, Paris offers an unforgettable experience for travelers.",
  };
  return <DetailView {...mockData} />;
}
