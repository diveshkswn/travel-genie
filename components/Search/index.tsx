import dynamic from "next/dynamic";

export const SearchComponent = dynamic(() => import("./Search"));
