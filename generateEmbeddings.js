// // import { HNSWLib } from "langchain/vectorstores/hnswlib";
// // import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// // import { destinations } from "./data/destinationData";

// const {HNSWLib} = require("langchain/vectorstores/hnswlib")
// const {OpenAIEmbeddings} = require("langchain/embeddings/openai")
// const {destinations} = require("./data/destinationData")

// require('dotenv').config({path: './.env.local'})


// const generateEmbeddings = async () => {
//   console.log("Generating Embeddings")
//   try {
//     const start = performance.now() / 1000;

//     const textsToEmbed = destinations.map(
//       (destination) =>
//         `City Name:${destination.cityName}\n\n City Description: ${
//           destination.cityDesc
//         }\n\n city Country: ${destination.cityCountry}\n\n
//           city image url: ${
//             destination.imgURL
//           }\n\n ${destination.activities.map(
//           (activity) => `city activities : ${activity.activityName} \n\n `
//         )} \n\n
//           ${destination.activities.map(
//             (activity) => `city restaurant : ${activity.activityName} \n\n`
//           )}
//           `
//     );

//     const metadata = destinations.map((destination) => ({
//       id: destination.id,
//       name: destination.cityName,
//     }));

//     const embeddings = new OpenAIEmbeddings();

//     const vectorStore = await HNSWLib.fromTexts(
//       textsToEmbed,
//       metadata,
//       embeddings
//     );

//     // saves the embeddings in the ./movies directory in the root directory
//     await vectorStore.save("destinationvector");

//     const end = performance.now() / 1000;

//     console.log(`Took ${(end - start).toFixed(2)}s`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// generateEmbeddings();

// module.exports={generateEmbeddings}