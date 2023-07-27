"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";

import { HomeProps } from "./index.types";
import { StyledSection } from "./index.styles";
import { Carousel } from "@/components/Carousel/Carousel";

export function Home(props: HomeProps) {
  const router = useRouter();

  const handleButtonClick = async () => {
    const data: string[] = JSON.parse(sessionStorage.getItem("selectedActivities") || "[]");
    if(data.length) {
      router.push('discover');
    } else {
      router.push('activitySelector');
    }
  }
  return (
    <StyledSection>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Carousel />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="secondary" onClick={handleButtonClick}>Continue</button>
      </div>
    </StyledSection>
  );
}

export default memo(Home);
