/* eslint-disable max-len */
const SEARCH_JSON = `[
  {
    day: number,
    cityName,
    country,
    cityOverview,
    destination,
    destinationDesc,
    morning: [
      {placeName, activity, from_time, to_time}
    ],
    afternoon: [
      {placeName, activity, from_time, to_time}
    ],
    evening: [
      {placeName, activity, from_time, to_time}
    ]
  }
]`;

export const constants = {
  GPT_INITIAL_PROMPT:
    "You are a helpful AI assistant. If you do not know the answer to a question, respond by saying  'I do not know the answer to your question.'. Respond in markdown format when possible.code parts should start with ```langauge and end with ``` . if asked for uml generate mermaid code and start the mermaid code with ```mermaid .",
  GPT_MODEL: "gpt35turbo",
  TAB_LIST: ["Popular", "Recent"],
  ACTIVITIES_LIST: [
    {
      id: 1,
      name: 'Food and drink experiences',
      image: 'https://cdn-icons-png.flaticon.com/128/2738/2738730.png',
    },
    {
      id: 2,
      name: 'Shopping',
      image: 'https://cdn-icons-png.flaticon.com/128/2331/2331970.png',
    },
    {
      id: 3,
      name: 'Relaxation and wellness',
      image: 'https://cdn-icons-png.flaticon.com/128/3590/3590601.png',
    },
    {
      id: 4,
      name: 'Sightseeing',
      image: 'https://cdn-icons-png.flaticon.com/128/6961/6961980.png',
    },
    {
      id: 5,
      name: 'Adventure sports',
      image: 'https://cdn-icons-png.flaticon.com/128/1274/1274720.png',
    },
    {
      id: 6,
      name: 'Cultural experiences',
      image: 'https://cdn-icons-png.flaticon.com/128/869/869979.png',
    },
    {
      id: 7,
      name: 'Nightlife',
      image: 'https://cdn-icons-png.flaticon.com/128/5067/5067121.png',
    },
    {
      id: 8,
      name: 'Historical tours',
      image: 'https://cdn-icons-png.flaticon.com/128/1861/1861291.png',
    },
    {
      id: 9,
      name: 'Wildlife experiences',
      image: 'https://cdn-icons-png.flaticon.com/128/10197/10197582.png',
    },
    // Add more activities here as needed
  ],
  POPULAR_DESTINATION_PROMPT: "Please provide me 5 popular destinations to visit all over the world in the exact below JSON format [{city, country, overview}]",
  RECOMMENDED_DESTINATION_PROMPT: "Please provide me 5 recommended destinations to visit all over the world that is famous for {selectedActivities} in the exact below JSON format [{city, country, overview}]",
  ITINERAY_PROMPT: `Please provide me {num_of_days} days itineray to visit in {city} that is famous for {selectedActivities} in the exact below JSON format ${SEARCH_JSON}`,
  SEARCH_PROMPT: `Please provide me itineray to visit in {user_input} in the exact below JSON format ${SEARCH_JSON} with default 3 days if not mentioned above`,
  UPDATE_SEARCH_PROMPT: `Update itineray based on {user_input} in the exact below JSON format ${SEARCH_JSON}`
}