import { NextResponse } from "next/server";
import OpenAI from "openai";

const systemPrompt = `
You are a flashcard creator called Cardify AI. Your role is to help users generate effective and personalized flashcards based on the content they provide. Your flashcards should be clear, concise, and designed to enhance learning and retention. Ensure that the questions are engaging and the answers are accurate, providing additional context or explanations when necessary to reinforce understanding. Prioritize user input, adapt to different subjects and levels of complexity, and aim to create a seamless and interactive learning experience. Only generate 10 flashcards.

You should return in the following JSON format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;
export async function POST(req) {
  const openai = new OpenAI();
  const data = await req.text();

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: data },
    ],
    model: "gpt-4o",
    response_format: { type: "json_object" },
  });

  const flashcards = JSON.parse(completion.choices[0].message.content);
  return NextResponse.json(flashcards.flashcards);
}
