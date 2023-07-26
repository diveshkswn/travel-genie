/* eslint-disable max-len */
"use client";

import { memo, useEffect, useState } from "react";

import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";
import Card from "@/components/Card/Card";
import { getData } from "@/utils/helpers";
import { constants } from "@/utils/constants";

import { StyledSection } from "./index.styles";
import { DestinationProps, DiscoverProps } from "./index.types";

const { TAB_LIST } = constants;

export function Discover(props: DiscoverProps) {
  const [selectedTab, setSelectedTab] = useState(TAB_LIST[0]);
  const [popularDestination, setPopularDestination] = useState<
    DestinationProps[]
  >([]);
  const [recommendedDestination, setRecommenderDestination] = useState<
    DestinationProps[]
  >([]);
  const [recentData, setRecentData] = useState<DestinationProps[]>([]);

  useEffect(() => {
    const recents: DestinationProps[] = JSON.parse(
      sessionStorage.getItem("recents") || "[]"
    );
    setRecentData(recents);
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getData(
        "Please provide me 5 popular destinations to visit all over the world in the below JSON format [{city, country, review}]"
      );
      setPopularDestination(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const selectedFilters = ["Adventure sports", "Sightseeing", "Nightlife"];
      const data = await getData(
        `Please provide me 5 recommended destinations to visit all over the world that is famous for ${selectedFilters?.join()} in the below JSON format [{city, country, review}]`
      );
      setRecommenderDestination(data);
    })();
  }, []);

  return (
    <StyledSection>
      <div className="px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="m-0">{props.title}</h1>
          <span className="user-icon d-flex justify-content-center align-items-center">
            <i className="bi bi-person-fill" />
          </span>
        </div>
        <Search />
        <Tabs
          tabList={TAB_LIST}
          onTabClick={(selectedName: string) => setSelectedTab(selectedName)}
        />
      </div>
      {selectedTab === TAB_LIST[0] ? (
        <div className="content_container">
          {recommendedDestination.length > 0 && (
            <h3 className="mt-4">Recommended:</h3>
          )}
          <div className="d-flex card-container">
            {recommendedDestination?.map((item, index) => (
              <Card
                url={
                  "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80"
                }
                key={`rexommendation-card-${index}`}
                {...item}
                isVertical={true}
              />
            ))}
          </div>
          {popularDestination.length > 0 && (
            <h3 className="mt-4">Top Destinations:</h3>
          )}
          <div className="d-flex card-container">
            {popularDestination?.map((item, index) => (
              <Card
                url={
                  "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80"
                }
                key={`card-${index}`}
                {...item}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex content_container card-container">
          {recentData?.map((item, index) => (
            <Card
              url={
                "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80"
              }
              key={`card-${index}`}
              {...item}
              isVertical={true}
            />
          ))}
        </div>
      )}
    </StyledSection>
  );
}

export default memo(Discover);
