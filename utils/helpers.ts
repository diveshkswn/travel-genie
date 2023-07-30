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
    Number(process.env.NEXT_PUBLIC_AUTH_TIMEOUT || "60")
  );
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  callbackFn?.();
};

export const handleLogout = ({ callbackFn }: { callbackFn: () => any }) => {
  deleteCookie("tgAuth");
  callbackFn?.();
};

export const getData = async (message: string, chatId?: string) => {
  const reqBody = { message, ...(chatId && { existingChatId: chatId }) };
  const res = await fetch("/api/gpt", {
    method: "POST",
    body: JSON.stringify(reqBody),
  });

  const parsedRes = await res.json();

  const index = parsedRes?.data?.messages?.length - 1;
  const content = parsedRes?.data?.messages?.[index]?.content || "";
  const startIndex = content.indexOf("[");
  const endIndex = content.lastIndexOf("]");
  console.log('>>>>>', content?.substring(startIndex, endIndex + 1))

  return {
    id: parsedRes?.data?.id,
    data: JSON?.parse?.(content?.substring(startIndex, endIndex + 1) || "[]"),
  };
};

export const getLangChainData = async (
  message: string,
  datacount = 1,
  url = "/langchain"
): Promise<any> => {
  const reqBody = { message, count: datacount };
  const res = await fetch(`${"https://langchain-express.onrender.com"}${url}`, {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(reqBody),
  });

  const parsedRes = await res.json();
  console.log("parsedRed", parsedRes);
  return parsedRes;
};

export const getPopularDestinations = (data: any, size = 5) => {
  const shuffled = data.slice();
  let currentIndex = shuffled.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element.
    temporaryValue = shuffled[currentIndex];
    shuffled[currentIndex] = shuffled[randomIndex];
    shuffled[randomIndex] = temporaryValue;
  }

  // Return the first 'size' elements of the shuffled array.
  return shuffled.slice(0, size);
};

interface SearchImageprops {
  mainResponse: string;
  tagResponse: Record<any, any>;
}
export const searchImage = async (
  search = "random",
  tagNames?: string[]
): Promise<SearchImageprops> => {
  let tagResponse: Record<any, any> = {};
  let url = `${process.env.NEXT_PUBLIC_PIXABAY_URL}`;
  url = url.replace("{queryName}", search);
  const res = await fetch(url, {
    headers: { "content-type": "application/json" },
    mode: "no-cors",
  });
  console.log("url", url);
  const parsedRes = await res.json();
  let imageUrl = parsedRes?.hits?.[0]?.webformatURL;
  // response.push({ mainSearch: imageUrl });
  let mainResponse = imageUrl;

  if (tagNames?.length) {
    for (let i = 0; i < tagNames.length; i++) {
      let tagName = tagNames[i];
      console.log("tagName", tagName);

      for (let x = 0; x < parsedRes?.hits?.length; x++) {
        let hit = parsedRes?.hits?.[x];
        if (hit.tags && tagName) {
          if (hit?.tags?.includes(tagName?.toLowerCase())) {
            console.log(" hit?.tags?", hit?.tags, tagName);
            tagResponse = {
              ...tagResponse,
              ...{ [tagName]: hit?.webformatURL },
            };
            break;
          } else {
            tagResponse = {
              ...tagResponse,
              ...{ [tagName]: parsedRes?.hits?.[0]?.webformatURL },
            };
          }
        }
      }
    }
  }
  return { mainResponse, tagResponse };
};

export const searchImageAPI = async (
  search = "random",
  tagNames?: string[]
): Promise<SearchImageprops> => {
  const reqBody = { search, tags: tagNames?.join(",") };

  const res = await fetch(`/api/searchImage`, {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(reqBody),
  });

  const parsedRes = await res.json();
  console.log("parsedRed", parsedRes);
  return parsedRes;
};
