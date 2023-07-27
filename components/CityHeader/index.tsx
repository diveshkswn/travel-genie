import dynamic from "next/dynamic";
import { CityHeaderProps } from "./CityHeader.types";

export const HeaderComponent = dynamic<CityHeaderProps>(
  () => import("./CityHeader")
);
