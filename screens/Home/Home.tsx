"use client";

import { memo, useEffect, useState } from "react";
import { constants } from "@/utils/constants";

import { HomeProps } from "./index.types";
import Discover from "../Discover/Discover";
import { ActivitySelectorComponent } from "../ActivitySelector";

const {ACTIVITIES_LIST} = constants;

export function Home(props: HomeProps) {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  useEffect(() => {
    const data: string[] = JSON.parse(
      sessionStorage.getItem("selectedActivities") || "[]"
    );
    setSelectedActivities(data);
  },[])

  return selectedActivities.length ? <Discover title="Discover" /> : <ActivitySelectorComponent activities={ACTIVITIES_LIST} />;
}

export default memo(Home);
