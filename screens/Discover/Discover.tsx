/* eslint-disable max-len */
"use client";

import { memo, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Search } from "@/components/Search/Search";
import Tabs from "@/components/Tabs/Tabs";
import Card from "@/components/Card/Card";
import { constants } from "@/utils/constants";
import { handleLogout } from "@/utils/helpers";

import { StyledSection } from "./index.styles";
import { DestinationProps, DiscoverProps } from "./index.types";
import { getData, searchImageAPI } from "@/utils/helpers";
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
    isVertical = true,
    isRecentCategory = false
  ) => {
    return (
      <Card
        url={item.imgURL}
        key={key}
        {...item}
        isVertical={isVertical}
        isRecentCategory={isRecentCategory}
        handleCardClick={(params: Record<string, string>) =>
          handleCardClick(params, "", false)
        }
      />
    );
  };

  const getPrompt = (
    city: string,
    itinerayPropmt?: string,
    useGPT?: boolean
  ) => {
    let prompt = "";
    if (useGPT) {
      if (itinerayPropmt) {
        prompt = itinerayPropmt;
      } else {
        const selectedActivities: string[] = JSON.parse(
          sessionStorage.getItem("selectedActivities") || "[]"
        );
        prompt = ITINERAY_PROMPT.replace(
          "{selectedActivities}",
          selectedActivities.join(" ")
        );
        prompt = prompt.replace("{num_of_days}", "3");
        prompt = prompt.replace("{city}", city);
      }
    }
    return prompt;
  };

  const handleCardClick = async (
    cardData: Record<string, string>,
    itinerayPropmt?: string,
    useGPT?: boolean
  ) => {
    const { city = "" } = cardData;
    const index = recentData.findIndex((item) => item.city === city || itinerayPropmt?.toLowerCase()?.includes(item?.city?.toLowerCase()));
    let selectedIndex = index === -1 ? recentData.length : index;
    let redirectTo = false;

    if (index === -1) {
      setIsLoading(true);
      const prompt = getPrompt(city, itinerayPropmt, useGPT);

      const { id, data: itinerayDataResponse } = useGPT
        ? await getData(prompt)
        : { id: "", data: cardData?.itinerary };

      let itinerayData = itinerayDataResponse;

      if (itinerayData.length) {
        redirectTo = true;
        if (useGPT) {
          let tagNames =
            itinerayData.map((itinery: any) => itinery?.destination) || [];
          const { mainResponse, tagResponse = {} } = await searchImageAPI(
            itinerayData?.[0]?.cityName,
            tagNames
          );

          let newItinerayData = itinerayData.map((_i: any) => {
            let imgData = { ..._i, cityImageURL: mainResponse };

            if (Object?.keys(tagResponse || {})?.includes(_i?.destination)) {
              return {
                ..._i,
                cityImageURL: mainResponse,
                destinationImgUrl: tagResponse[_i?.destination],
              };
            } else {
              Object.keys(tagResponse || {}).forEach((item) => {
                if (_i?.destination.includes(item)) {
                  imgData = {
                    ..._i,
                    cityImageURL: mainResponse,
                    destinationImgUrl: tagResponse[item],
                  };
                };
              });
              return imgData;
            }
          });
          itinerayData = newItinerayData;
        }

        const locationData = city
          ? cardData
          : {
            city: itinerayData?.[0]?.cityName,
            overview: itinerayData?.[0]?.cityOverview,
            country: itinerayData?.[0]?.country,
            url: itinerayData?.[0]?.cityImageURL,
          };
        const data = [
          ...recentData,
          { ...locationData, itinerayData, chatId: id, useGPT },
        ];

        if (data.length > 10) {
          data.shift(); // Remove the first element from the array
          selectedIndex = 9;
        }
        sessionStorage.setItem("itinerayData", JSON.stringify(itinerayData));
        sessionStorage.setItem("recents", JSON.stringify(data));
      } else {
        setIsLoading(false);
      }
    } else {
      redirectTo = true;
      const itinerayData = recentData[selectedIndex]?.itinerayData;
      sessionStorage.setItem("itinerayData", JSON.stringify(itinerayData));
    }

    if (redirectTo) {
      sessionStorage.setItem("selectedIndex", JSON.stringify(selectedIndex));
      router.push("detailView");
    }
  };

  return (
    <StyledSection>
      <div className="px-4 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="m-0">{props.title}</h1>
          <div className="d-flex">
            <span
              className="user-icon mx-2 d-flex justify-content-center align-items-center"
              onClick={() => {
                handleLogout({
                  callbackFn: () => {
                    router.refresh();
                  },
                });
              }}
            >
              <i className="bi bi-power" />
            </span>
            <span
              className="user-icon mx-2 d-flex justify-content-center align-items-center"
              onClick={() => router.push("activitySelector")}
            >
              <i className="bi bi-person-fill" />
            </span>
          </div>
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
            <h3 className="mt-5">Recommended:</h3>
          )}
          <div className="d-flex card-container">
            {recommendedDestination?.map((item, index) =>
              renderCard(item, `recommendation-card-${index}`)
            )}
          </div>
        </div>
      ) : (
        <div className="d-flex content_container card-container flex-column-reverse ms-4">
          {recentData?.map((item, index) =>
            renderCard(item, `recent-card-${index}`, false, true)
          )}
        </div>
      )}
      {isLoading && <Loader />}
    </StyledSection>
  );
}

export default memo(Discover);
