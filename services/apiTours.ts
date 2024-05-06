"use server";

// LIBRARIES
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export type TourProps = {
  city: string;
  country: string;
};

export const getExistingTour = async ({ city, country }: TourProps) => {
  return null;
};

export const generateTourResponse = async ({ city, country }: TourProps) => {
  const query = `Find a ${city} in this ${country}.
    If ${city} in this ${country} exists, create a list of things families can do in this ${city},${country}. 
    Once you have a list, create a one-day tour. Response should be in the following JSON format: 
    {
      "tour": {
        "city": "${city}",
        "country": "${country}",
        "title": "title of the tour",
        "description": "description of the city and tour",
        "stops": ["short paragraph on the stop 1 ", "short paragraph on the stop 2","short paragraph on the stop 3"]
      }
    }
    If you can't find info on exact ${city}, or ${city} does not exist, or it's population is less than 1, or it is not located in the following ${country} return { "tour": null }, with no additional characters.`;

  try {
    const res = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a tour guide" },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    const tourData = JSON.parse(res.choices[0].message.content || "{}");

    if (!tourData.tour) return null;

    return tourData.tour;
  } catch (err) {
    console.error(err);
  }
};

export const createNewTour = async (tour: string) => {
  return null;
};
