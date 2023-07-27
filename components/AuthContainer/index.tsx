"use client";
import { memo } from "react";
// import { FacebookAuth } from "../FacebookAuth";
import { AuthContainerDiv } from "./AuthContainer.styles";
import { EmailNameAuth } from "../EmailNameAuth";

export function AuthContainer() {
  return (
    <div className="AuthContainer">
      <AuthContainerDiv $minHeight={300}>
        <div className="main-text">
          <div className="main-text-title">{"Let's go,"}</div>
          <div className="main-text-description">
            Traveling around the world.
          </div>
        </div>
        <EmailNameAuth />
        {/* <FacebookAuth /> */}
      </AuthContainerDiv>
    </div>
  );
}

export default memo(AuthContainer);
