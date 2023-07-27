"use client";

import { handleLogin } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { memo, useRef } from "react";
import { SearchComponent } from "../Search";
import Button from "../Button/Button";

export function EmailNameAuth() {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const router = useRouter();

  const login = () => {
    handleLogin({
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      callbackFn: () => {
        router.push("/");
      },
    });
  };
  return (
    <>
      <SearchComponent placeholder="Email" />
      <SearchComponent placeholder="Password" />
      {/* <input type="text" name="name" ref={nameRef} />
      <input type="email" name="email" ref={emailRef} /> */}
      <Button type="submit" text="Login" handleClick={login}/>
    </>
  );
}

export default memo(EmailNameAuth);
