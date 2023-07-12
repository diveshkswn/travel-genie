export function initialiseFBSDK(callback: () => any) {
  let sdkScript = document.createElement("script");
  sdkScript.src =
    "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0";
  sdkScript.async = true;
  sdkScript.defer = true;
  sdkScript.nonce = "RFEDMrUI";
  sdkScript.onload = callback;
  document.body.appendChild(sdkScript);
}
