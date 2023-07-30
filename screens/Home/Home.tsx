"use client";

import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { constants } from "@/utils/constants";

import Discover from "../Discover/Discover";
import { HomeProps } from "./index.types";
import { ActivitySelectorComponent } from "../ActivitySelector";

const {ACTIVITIES_LIST} = constants;

export function Home(props: HomeProps) {
  const router = useRouter();
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  
  useEffect(() => {
    const data: string[] = JSON.parse(
      sessionStorage.getItem("selectedActivities") || "[]"
    );
    if (data.length) {
      router.push("discover");
    } else {
      router.push("activitySelector");
    }
    setSelectedActivities(data);
  },[])

  return selectedActivities.length ? <Discover title="Discover" /> : <ActivitySelectorComponent activities={ACTIVITIES_LIST} />;
}

export default memo(Home);
