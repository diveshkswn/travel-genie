"use client";

import { memo, useState, forwardRef, LegacyRef } from "react";

import Button from "../Button/Button";
import { constants } from "@/utils/constants";

import { PropsTypes } from "./index.types";
import { StyledSearch } from "./index.styles";

const { SEARCH_PROMPT } = constants;
export const Search = forwardRef(function Search(
  {
    placeholder = "Search",
    handleSearch,
    className = "",
    type = "text",
    required = false,
    prompt = SEARCH_PROMPT,
    searchClassName = "",
  }: PropsTypes,
  ref: LegacyRef<HTMLInputElement>
) {
  const [searchData, setSearchData] = useState("");

  return (
    <StyledSearch className={searchClassName}>
      <input
        required={required}
        placeholder={placeholder}
        className={className + " secondary-bg"}
        type={type}
        onChange={(e) => setSearchData(e.target.value)}
        value={searchData}
        ref={ref}
      />
      {handleSearch !== undefined && (
        <Button
          className="bi bi-search px-4 py-2"
          text={""}
          handleClick={() =>
            handleSearch?.(
              prompt.replace("user_input", searchData),
              setSearchData
            )
          }
        />
      )}
    </StyledSearch>
  );
});

export default memo(Search);
