import { StyledItemContainer } from "./index.styles";

export const ActivityItem: React.FC<ActivityItemProps> = ({
  activity,
  selected,
  onClick,
}) => (
  <StyledItemContainer className={"item-container-" + activity.id}>
    <div
      key={activity.id}
      onClick={onClick}
      className="activity-item-container"
    >
      <img src={activity.image} alt={activity.name} />
      <div
        style={{
          marginTop: "20px",
          color: "white",
          fontSize: "13px",
        }}
      >
        {activity.name}
        <div>
          {selected && (
            <span
              style={{
                color: "lightgreen",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              ✓
            </span>
          )}
        </div>
      </div>
    </div>
  </StyledItemContainer>
);
