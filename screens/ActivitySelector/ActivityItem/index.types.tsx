interface Activity {
    id: number;
    name: string;
    image: string;
  }
  
interface ActivityItemProps {
    activity: Activity;
    selected: boolean;
    onClick: () => void;
}
  