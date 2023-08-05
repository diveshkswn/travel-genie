import { NextResponse } from "next/server";
import { constants } from "@/utils/constants";
export const runtime = "edge";

const { PSCHAT_URL, PSCHAT_AUTH } = process.env;
const { GPT_INITIAL_PROMPT, GPT_MODEL } = constants;

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
  const existingChatId = requestBody?.existingChatId || "";
  const message = requestBody?.message;

  let modifiedPayload = {
    message: message,
    options: {
      model: GPT_MODEL,
      assistant: GPT_INITIAL_PROMPT,
    },
    ...(existingChatId && { id: existingChatId }),
  };

  let data = {};
  if (url) {
    try {
      const res = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: PSCHAT_AUTH || "",
        },
        body: JSON.stringify(modifiedPayload),
      });
      data = await res.json();
    } catch (e) {
      console.log("Exception occured", e);
      data = {
        message: "ERROR",
      };
    }
  }
  return NextResponse.json(data);
}
