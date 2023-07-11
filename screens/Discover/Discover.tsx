"use client";

import { memo } from "react";
import { StyledSection } from "./index.styles";
import { DiscoverProps } from "./index.types";
import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";

export function Discover(props: DiscoverProps) {
  return (
    <StyledSection>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Search />
        <span className="user-icon d-flex justify-content-center align-items-center">
          <i className="bi bi-person-fill" />
        </span>
      </div>
      <h1>{props.title}</h1>
      <Tabs tabList={["Popular", "Recent"]} />
    </StyledSection>
  );
}

export default memo(Discover);
