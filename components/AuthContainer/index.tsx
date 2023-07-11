"use client";
import { memo } from "react";
import { FacebookAuth } from "../FacebookAuth";
import { AuthContainerDiv } from "./AuthContainer.styles";
import { EmailNameAuth } from "../EmailNameAuth";

export function AuthContainer() {
  return (
    <div className="AuthContainer">
      <AuthContainerDiv $minHeight={300}>
        <EmailNameAuth />
        <FacebookAuth />
      </AuthContainerDiv>
    </div>
  );
}

export default memo(AuthContainer);
