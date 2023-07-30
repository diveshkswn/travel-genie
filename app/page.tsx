import {ActivitySelectorComponent} from "@/screens/ActivitySelector";
import { constants } from "@/utils/constants";
import { useEffect } from "react";

export default function HomePage() {
  return <ActivitySelectorComponent activities={constants.ACTIVITIES_LIST} />;
}
