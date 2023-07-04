import dynamic from "next/dynamic";
import { HeaderProps } from "./Header.types";

export const HeaderComponent = dynamic<HeaderProps>(() => import("./Header"));
