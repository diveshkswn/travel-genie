"use client";

import { memo, useState } from "react";
import { StyledSearch } from "./index.styles";
import { PropsTypes } from "./index.types";
import Button from "../Button/Button";
import { constants } from "@/utils/constants";

export function Search({placeholder = 'Search', handleSearch, className, type = "text", required=false}: PropsTypes) {
  const {SEARCH_PROMPT} = constants;
  const [searchData, setSearchData] = useState('');
  return (
    <StyledSearch>
      <input required={required} placeholder={placeholder} className={className + " secondary-bg"} type={type} onChange={(e) => setSearchData(e.target.value)}/>
      {handleSearch !== undefined && <Button className="bi bi-search px-4 py-2" text={""} handleClick={() => handleSearch?.(SEARCH_PROMPT.replace('user_input', searchData))}/>}
    </StyledSearch>
  );
}

export default memo(Search);
