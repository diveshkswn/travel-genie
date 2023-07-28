import { NextResponse } from "next/server";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { destinations } from "@/data/destinationData";
import { generateEmbeddings } from "../../../generateEmbeddings";
// export const runtime = "edge";

export async function POST(request: Request) {
  let requestBody;

  try {
    requestBody = await request.json();
  } catch (e) {
    return NextResponse.json({ message: "payload incorrect." });
  }

  console.log("requestBody", requestBody);
  const generateNewEmbeddings = requestBody?.generateNewEmbeddings;

  if (generateNewEmbeddings) {
    try {
      generateEmbeddings();
      return NextResponse.json({ message: "New Embeddings Generated" });
    } catch (e) {
      return NextResponse.json({ message: `Error : ${e}` });
    }
  }
  const message = requestBody?.message;
  const vectorDirectory = "./destinationvector";
  // const vectorDirectory = "./app/api/langchain/destinationvector";

  const vectorStore = await HNSWLib.load(
    vectorDirectory,
    new OpenAIEmbeddings()
  );

  const searchResult = await vectorStore.similaritySearch(message, 1);

  const searchResultIds = searchResult.map((r) => r.metadata.id);

  let results = destinations.filter((destination) =>
    searchResultIds.includes(destination.id)
  );

  return NextResponse.json(results);
}
