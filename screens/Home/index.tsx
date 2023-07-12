import dynamic from "next/dynamic";
import { HomeProps } from "./index.types";

export const HomeComponent = dynamic<HomeProps>(() => import("./Home"));
