import dynamic from "next/dynamic";
import { DiscoverProps } from "./index.types";

export const DiscoverComponent = dynamic<DiscoverProps>(() => import("./Discover"));
