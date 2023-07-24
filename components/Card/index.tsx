import dynamic from "next/dynamic";

export const CardComponent = dynamic(() => import("./Card"));
