/* eslint-disable max-len */
"use client";

import { memo, useEffect, useState } from "react";

import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";
import Card from "@/components/Card/Card";

import { data } from "./index.mock";
import { StyledSection } from "./index.styles";
import { DestinationProps, DiscoverProps } from "./index.types";
import { POST } from "@/app/api/gpt/route";

export function Discover(props: DiscoverProps) {
  const [popularDestination, setPopularDestination] = useState<DestinationProps[]>([]);
  useEffect(() => {
    const request = new Request("https://api.psnext.info/api/chat", {
      method: "POST",
      body: '{"message": "Please provide me 5 popular destination to visit all over the world in below json format [{city, country, review}]"}',
    });
    POST(request).then((res) => {
      const content = res?.data?.messages?.[2]?.content || "";
      const startIndex = content.indexOf("[");
      const endIndex = content.indexOf("]", startIndex);
  
      // Extract the substring between '[' and ']'
      const result = content.substring(startIndex, endIndex + 1);
      setPopularDestination(JSON.parse(result));
    });
  }, []);

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
        {popularDestination?.map((item, index) => (
          <Card url={"https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80"} key={`card-${index}`} {...item} />
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
