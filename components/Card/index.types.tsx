export interface CardProps {
  city: string;
  country: string;
  url: string;
  isVertical?: boolean;
  isRecentCategory?: boolean;
  overview: string;
  handleCardClick: (params: Record<string, string>) => void;
  region?: string;
}
