import dynamic from "next/dynamic";

export const DetailViewComponent = dynamic(() => import("./DetailView"));
