export interface CityHeaderProps {
  city: any;
}

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}
