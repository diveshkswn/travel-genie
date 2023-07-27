import dynamic from "next/dynamic";

export const LoaderComponent = dynamic(() => import("./Loader"));
