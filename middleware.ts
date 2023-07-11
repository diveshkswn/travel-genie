import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: ["/", "/authenticate"],
};

export function middleware(request: NextRequest) {
  let url = request.nextUrl.pathname;
  const tgAuth = request.cookies.get("tgAuth")?.value;
  console.log("tgAuth", tgAuth, url);
  if (url === "/") {
    if (tgAuth) {
      NextResponse.next();
    } else {
      const newURL = request.nextUrl.clone();
      newURL.pathname = "/authenticate";
      return NextResponse.redirect(newURL);
    }
  }
  if (url === "/authenticate") {
    if (tgAuth) {
      const newURL = request.nextUrl.clone();
      newURL.pathname = "/";
      return NextResponse.redirect(newURL);
    } else {
      NextResponse.next();
    }
  }

  // return NextResponse.next();
}
