"use server";

// LIBRARIES
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export const generateChatResponse = async (message: string) => {
  try {
    const res = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant" },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0,
    });

    return res.choices[0].message;
  } catch (err) {
    console.error(err);
    return null;
  }
};
