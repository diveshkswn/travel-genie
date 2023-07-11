import { useEffect, useState, useRef, memo } from "react";

import { TabProps } from "./index.types";
import { StyledTabs } from "./index.styles";

const Tabs = (props: TabProps) => {
  const { tabList = [], onTabClick } = props;
  const [selected, setSelected] = useState(tabList[0]);
  const itemsRef = useRef<any[]>([]);

  useEffect(() => {
    // Update itemsRef for tabItems
    itemsRef.current = itemsRef.current.slice(0, tabList.length);
  }, [tabList]);

  const tabClickUpdate = (selectedName: string, index: number) => {
    if (onTabClick) {
      onTabClick(selectedName);
    }
    // Scroll selected item to center
    itemsRef.current[index].scrollIntoView?.({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const handleClick = (selectedName: string, index: number) => {
    setSelected(selectedName);
    tabClickUpdate(selectedName, index);
  };

  return (
    <StyledTabs>
      {tabList.map((item, index) => (
        <li
          ref={(el) => (itemsRef.current[index] = el)}
          role="tab"
          tabIndex={0}
          key={item}
          data-testid={item}
          onClick={() => handleClick(item, index)}
          aria-selected={selected === item}
          className={selected === item ? "selected secondary-fg": ""}
        >
          {item}
        </li>
      ))}
    </StyledTabs>
  );
};

export default memo(Tabs);