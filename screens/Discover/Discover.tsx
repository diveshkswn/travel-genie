/* eslint-disable max-len */
"use client";

import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";
import Card from "@/components/Card/Card";
import { constants } from "@/utils/constants";

import { StyledSection } from "./index.styles";
import { DestinationProps, DiscoverProps } from "./index.types";
import { getData } from "@/utils/helpers";
import Loader from "@/components/Loader/Loader";

const { TAB_LIST, ITINERAY_PROMPT } = constants;

export function Discover(props: DiscoverProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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
    const popular_destinations: DestinationProps[] = JSON.parse(
      sessionStorage.getItem("popularDestination") || "[]"
    );
    const recommended_destinations: DestinationProps[] = JSON.parse(
      sessionStorage.getItem("recommendedDestination") || "[]"
    );
    setRecentData(recents);
    setPopularDestination(popular_destinations);
    setRecommenderDestination(recommended_destinations);
  }, []);

  const renderCard = (
    item: DestinationProps,
    key: string,
    isVertical = true
  ) => {
    return (
      <Card
        url={item.imgURL}
        key={key}
        {...item}
        isVertical={isVertical}
        handleCardClick={(params: Record<string, string>) =>
          handleCardClick(params, '', false)
        }
      />
    );
  };

  const getPrompt = (city: string, itinerayPropmt?: string, useGPT?: boolean) => {
    let prompt = "";
    if(useGPT) {
      if (itinerayPropmt) {
        prompt = itinerayPropmt;
      } else {
        const selectedActivities: string[] = JSON.parse(sessionStorage.getItem("selectedActivities") || "[]");
        prompt = ITINERAY_PROMPT.replace("{selectedActivities}",selectedActivities.join(" "));
        prompt = prompt.replace("{num_of_days}", "3");
        prompt = prompt.replace("{city}", city);
      }
    }
    return prompt;
  }

  const handleCardClick = async (
    cardData: Record<string, string>,
    itinerayPropmt?: string,
    useGPT?: boolean
  ) => {
    const { city = '' } = cardData;
    const index = recentData.findIndex((item) => item.city === city);
    let selectedIndex = index === -1 ? recentData.length : index;
    if (index === -1) {
      setIsLoading(true);
      const prompt = getPrompt(city, itinerayPropmt, useGPT);

      const {id, data: itinerayData} = useGPT ? await getData(prompt) : {id: '', data: cardData?.itinerary};
      const locationData = city
        ? cardData
        : {
            city: itinerayData?.[0]?.cityName,
            overview: itinerayData?.[0]?.cityOverview,
            country: itinerayData?.[0]?.country,
            url: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
          };
      const data = [...recentData, { ...locationData, itinerayData, chatId: id, useGPT }];

      if (data.length > 10) {
        data.shift(); // Remove the first element from the array
        selectedIndex = 9;
      }
      sessionStorage.setItem("itinerayData", JSON.stringify(itinerayData));
      sessionStorage.setItem("recents", JSON.stringify(data));
    } else {
      const itinerayData = recentData[selectedIndex]?.itinerayData;
      sessionStorage.setItem("itinerayData", JSON.stringify(itinerayData));
    }

    sessionStorage.setItem("selectedIndex", JSON.stringify(selectedIndex));
    router.push("detailView");
  };

  return (
    <StyledSection>
      <div className="px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="m-0">{props.title}</h1>
          <span
            className="user-icon d-flex justify-content-center align-items-center"
            onClick={() => router.push("activitySelector")}
          >
            <i className="bi bi-person-fill" />
          </span>
        </div>
        <Search
          handleSearch={(prompt: string) => handleCardClick({}, prompt, true)}
        />
        <Tabs
          tabList={TAB_LIST}
          onTabClick={(selectedName: string) => setSelectedTab(selectedName)}
        />
      </div>
      {selectedTab === TAB_LIST[0] ? (
        <div className="content_container">
          <div className="d-flex card-container">
            {popularDestination?.map((item, index) =>
              renderCard(item, `card-${index}`, false)
            )}
          </div>
          {recommendedDestination.length > 0 && (
            <h3 className="mt-4">Recommended:</h3>
          )}
          <div className="d-flex card-container">
            {recommendedDestination?.map((item, index) =>
              renderCard(item, `recommendation-card-${index}`)
            )}
          </div>
        </div>
      ) : (
        <div className="d-flex content_container card-container">
          {recentData?.map((item, index) =>
            renderCard(item, `recent-card-${index}`)
          )}
        </div>
      )}
      {isLoading && <Loader />}
    </StyledSection>
  );
}

export default memo(Discover);
