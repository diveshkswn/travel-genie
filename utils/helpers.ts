import { Router } from "next/router";

export const canUseDOM = !!(typeof window !== "undefined" && window.document);
const { NEXT_PUBLIC_AUTH_TIMEOUT } = process.env;

export function getCookie(name: string) {
  if (!canUseDOM) {
    return null;
  }
  let result;
  // Split cookie string and get all individual name=value pairs in an array
  let cookieArr = document.cookie.split(";");

  // Loop through the array elements
  cookieArr.forEach((_i, index) => {
    let cookiePair = cookieArr[index].split("=");
    /* Removing whitespace at the beginning of the cookie name
          and compare it with the given string */

    if (name === cookiePair[0].trim()) {
      // Decode the cookie value and return
      console.log("result", JSON.parse(cookiePair[1]));

      result = JSON.parse(cookiePair[1]);
    }
  });
  return result;
}

export function setCookie(c_name: string, value: any, minutes?: number) {
  let c_value = value;

  if (minutes) {
    let expireTime = new Date();
    expireTime.setTime(expireTime.getTime() + minutes * 60 * 1000);

    c_value = value + "; expires=" + expireTime.toUTCString() + ";";
  }

  document.cookie = c_name + "=" + c_value;
  console.log("c_name", c_name);
  console.log("c_value", c_value);
}

function deleteCookie(cookieName: string) {
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export const handleLogin = ({
  name,
  email,
  callbackFn,
}: {
  name: string;
  email: string;
  callbackFn: () => any;
}) => {
  let authCookie = { name, email };

  setCookie(
    "tgAuth",
    JSON.stringify(authCookie),
    Number(NEXT_PUBLIC_AUTH_TIMEOUT || "5")
  );
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  callbackFn?.();
};

export const handleLogout = ({ callbackFn }: { callbackFn: () => any }) => {
  deleteCookie("tgAuth");
  callbackFn?.();
};

export const getData = async (message: string) => {
  const reqBody = { message };
  const res = await fetch("/api/gpt", {
    method: "POST",
    body: JSON.stringify(reqBody),
  });

  const parsedRes = await res.json();

  const content = parsedRes?.data?.messages?.[2]?.content || "";
  const startIndex = content.indexOf("[");
  const endIndex = content.lastIndexOf("]");

  return JSON?.parse?.(content?.substring(startIndex, endIndex + 1) || "[]");
};

export const getLangChainData = async (
  message: string,
  datacount = 1,
  url = "/langchain"
): Promise<any> => {
  const reqBody = { message, count: datacount };
  const res = await fetch(`${process.env.NEXT_PUBLIC_LANG_CHAIN_HOST}${url}`, {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(reqBody),
  });

  const parsedRes = await res.json();
  console.log("parsedRed", parsedRes);
  return parsedRes;
  // const content = parsedRes?.data?.messages?.[2]?.content || "";
  // const startIndex = content.indexOf("[");
  // const endIndex = content.lastIndexOf("]");

  // return JSON?.parse?.(content?.substring(startIndex, endIndex + 1) || "[]");
};
