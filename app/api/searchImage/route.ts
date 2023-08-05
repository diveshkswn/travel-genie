import { NextResponse } from "next/server";
import { searchImage } from "@/utils/helpers";
export const runtime = "edge";

const { PSCHAT_URL, PSCHAT_AUTH } = process.env;
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
  let requestBody;

  try {
    requestBody = await request.json();
  } catch (e) {
    return NextResponse.json({ message: "payload incorrect" });
  }

  console.log("requestBody", requestBody);
  const url = PSCHAT_URL;
  const search = requestBody?.search;
  const tags = requestBody?.tags?.split(",") || [];

  let data = {};
  if (url) {
    try {
      data = await searchImage(search, tags);
    } catch (e) {
      console.log("Exception occured", e);
      data = {
        message: "ERROR",
      };
    }
  }
  return NextResponse.json(data);
}
