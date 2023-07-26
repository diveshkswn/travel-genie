"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";

import { HomeProps } from "./index.types";
import { StyledSection } from "./index.styles";
import { Carousel } from "@/components/Carousel/Carousel";

export function Home(props: HomeProps) {
  const router = useRouter();
  return (
    <StyledSection>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Carousel />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="secondary" onClick={() => router.push('discover')}>Continue</button>
      </div>
    </StyledSection>
  );
}

export default memo(Home);
