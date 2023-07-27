export interface CityHeaderProps {}

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    main: string;
  }[];
}
