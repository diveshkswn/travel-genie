import dynamic from "next/dynamic";
import { CarouselProps } from "./Carousel.types";

export const CarouselComponent = dynamic<CarouselProps>(
  () => import("./Carousel")
);
