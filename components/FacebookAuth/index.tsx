"use client";
//https://developers.facebook.com/docs/facebook-login/web/login-button
declare global {
  const FB: {
    init: (arg0: any) => any;
  };
}

import { memo, useEffect, useState } from "react";
import { FacebookAuthContainer } from "./FacebookAuth.styles";
import { initialiseFBSDK } from "@/utils/fbSdk";
const { NEXT_PUBLIC_FB_APPID } = process.env;
export function FacebookAuth() {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    initialiseFBSDK(() => {
      FB.init({
        appId: NEXT_PUBLIC_FB_APPID,
        status: true,
        xfbml: true,
        version: "v2.7", // or v2.6, v2.5, v2.4, v2.3
      });
      setMounted(true);
    });
  }, []);

  return (
    <FacebookAuthContainer $minHeight={300}>
      {isMounted && (
        <>
          {""}
          <div id="fb-root"></div>
          <div
            className="fb-login-button"
            data-width=""
            data-size="large"
            data-button-type=""
            data-layout=""
            data-auto-logout-link="false"
            data-use-continue-as="false"
            data-scope="email,public_profile,user_friends"
          ></div>
        </>
      )}
    </FacebookAuthContainer>
  );
}

export default memo(FacebookAuth);
