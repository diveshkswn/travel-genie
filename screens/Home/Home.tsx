"use client";

import { memo, useEffect } from "react";
import { useRouter } from "next/navigation";

import { HomeProps } from "./index.types";
import { StyledSection } from "./index.styles";
import { Carousel } from "@/components/Carousel/Carousel";
import Button from "@/components/Button/Button";

export function Home(props: HomeProps) {
  const router = useRouter();

  const handleButtonClick = async () => {
    const data: string[] = JSON.parse(
      sessionStorage.getItem("selectedActivities") || "[]"
    );
    if (data.length) {
      router.push("discover");
    } else {
      router.push("activitySelector");
    }
  };

  useEffect(() => {
    fetch(
      "https://api.ipdata.co/?api-key=c52cc586bb4f34411b035540bf6a17ad8009a71a79aabac724bda0f0"
    ).then(async (res) => {
      const response = await res.json();
      sessionStorage.setItem("locationInfo", JSON.stringify(response));
    });
  }, []);
  return (
    <StyledSection>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Carousel />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          text="Continue"
          handleClick={handleButtonClick}
          className="btn"
        />
      </div>
    </StyledSection>
  );
}

export default memo(Home);
