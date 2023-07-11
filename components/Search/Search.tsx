"use client";

import { memo } from "react";
import { StyledSearch } from "./index.styles";

export function Search() {
  return (
    <StyledSearch>
      <input placeholder="Search" className="secondary-bg"/>
    </StyledSearch>
  );
}

export default memo(Search);
