import ActivitySelector from "@/screens/ActivitySelector/ActivitySelector";
import { constants } from "@/utils/constants";

export default function ActivitySelectorPage() {
  return <ActivitySelector activities={constants.ACTIVITIES_LIST}/>;
}
