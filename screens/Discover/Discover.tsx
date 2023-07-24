/* eslint-disable max-len */
"use client";

import { memo } from "react";

import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";
import Card from "@/components/Card/Card";

import { data } from "./index.mock";
import { StyledSection } from "./index.styles";
import { DiscoverProps } from "./index.types";

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
      <div className="d-flex card-container">
        {data?.map((item, index) => (
          <Card key={`card-${index}`} {...item} />
        ))}
      </div>
      <h2 className="mt-4">Recommendations</h2>
      <div className="d-flex card-container">
        {data?.map((item, index) => (
          <Card key={`rexommendation-card-${index}`} {...item} />
        ))}
      </div>
    </StyledSection>
  );
}

export default memo(Discover);
