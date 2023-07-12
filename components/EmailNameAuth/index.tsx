"use client";

import { handleLogin } from "@/utils/helpers";
import { useRouter } from "next/navigation";
import { memo, useRef } from "react";

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
      <input type="text" name="name" ref={nameRef} />
      <input type="email" name="email" ref={emailRef} />
      <button type="submit" onClick={login}>
        Login
      </button>
    </>
  );
}

export default memo(EmailNameAuth);
