"use client";

import { memo, useState } from "react";

import Button from "../Button/Button";
import { constants } from "@/utils/constants";

import { PropsTypes } from "./index.types";
import { StyledSearch } from "./index.styles";

const {SEARCH_PROMPT} = constants;
export function Search({
  placeholder = 'Search', 
  handleSearch, 
  className = '', 
  type = "text", 
  required=false, 
  prompt = SEARCH_PROMPT,
  searchClassName = '',
}: PropsTypes) {
  const [searchData, setSearchData] = useState('');
  return (
    <StyledSearch className={searchClassName}>
      <input required={required} placeholder={placeholder} className={className + " secondary-bg"} type={type} onChange={(e) => setSearchData(e.target.value)}/>
      {handleSearch !== undefined && <Button className="bi bi-search px-4 py-2" text={""} handleClick={() => handleSearch?.(prompt.replace('user_input', searchData))}/>}
    </StyledSearch>
  );
}

export default memo(Search);
