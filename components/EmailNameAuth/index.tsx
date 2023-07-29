"use client";

import { handleLogin } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { memo, useRef } from "react";
import { Search } from "../Search/Search";
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
        router.push("/discover");
      },
    });
  };
  return (
    <>
      <form onSubmit={login}>
        <Search required placeholder="Name" className="w-100" ref={nameRef} />
        <Search
          required
          placeholder="Email"
          type="email"
          className="w-100"
          ref={emailRef}
        />
        {/* <input type="text" name="name" ref={nameRef} />
      <input type="email" name="email" ref={emailRef} /> */}
        <Button type="submit" text="Login" />
      </form>
    </>
  );
}

export default memo(EmailNameAuth);
