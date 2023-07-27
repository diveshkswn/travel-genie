import dynamic from "next/dynamic";
import { ButtonProps } from "./Button.types";

export const ButtonComponent = dynamic<ButtonProps>(() => import("./Button"));
