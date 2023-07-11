import dynamic from "next/dynamic";
import { CarouselProps } from "./Carousel.types";

export const HeaderComponent = dynamic<CarouselProps>(
  () => import("./Carousel")
);
