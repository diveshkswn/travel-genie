import { NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

//TODO : Over Server logic will go here...

export async function GET(request: Request) {
  let url = process.env.GPT_ENDPOINT;
  let data = {};
  if (url) {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await res.json();
  }

  return NextResponse.json({
    data,
    location: request.headers.get("x-vercel-ip-city") || "world",
  });
}

export async function POST(request: Request) {
  let url = process.env.GPT_ENDPOINT;
  let data = {};
  if (url) {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = await res.json();
  }

  return NextResponse.json({ data });
}
