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
