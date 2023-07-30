"use client";
import { memo, useEffect } from "react";
// import { FacebookAuth } from "../FacebookAuth";
import { AuthContainerDiv } from "./AuthContainer.styles";
import { EmailNameAuth } from "../EmailNameAuth";
import { eventUtil } from "@/utils/eventUtils";

export function AuthContainer() {
  useEffect(() => {
    eventUtil.on('backgroundImgURL', function(imageURL) {
      const body = document.querySelector('body');
      if(body) {
        body.style.backgroundImage = `url(${imageURL})`;
      }
    })
    return () => {
      const body = document.querySelector('body');
      if(body) {
        body.style.backgroundImage = ``;
      }
    }
  }, [])
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
