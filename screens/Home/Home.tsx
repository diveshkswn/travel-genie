"use client";

import { memo } from "react";
import { HomeProps } from "./index.types";
import { StyledSection } from "./index.styles";
import Carousel from "@/components/Carousel/Carousel";

export function Home(props: HomeProps) {
  return (
    <StyledSection>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Carousel />
      </div>
    </StyledSection>
  );
}

export default memo(Home);
