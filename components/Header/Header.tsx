"use client";

import { memo } from "react";
import { HeaderSection } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  return (
    <HeaderSection className="HeaderContainer">
      <h1>{props.title}</h1>
    </HeaderSection>
  );
}

export default memo(Header);
