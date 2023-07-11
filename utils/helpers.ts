export const canUseDOM = !!(typeof window !== "undefined" && window.document);

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
