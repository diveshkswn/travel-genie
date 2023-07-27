"use client";

import { memo } from "react";
import { StyledSearch } from "./index.styles";
import { PropsTypes } from "./index.types";

export function Search(props: PropsTypes) {
  const {
    placeholder = 'Search'
  } = props;
  return (
    <StyledSearch>
      <input placeholder={placeholder} className="secondary-bg"/>
    </StyledSearch>
  );
}

export default memo(Search);
