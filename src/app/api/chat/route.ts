import { NextRequest, NextResponse } from "next/server";
import Together from "together-ai";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const together = new Together();

    const response = await together.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
      temperature: 0.7,
      top_p: 0.7,
      top_k: 50,
      repetition_penalty: 1,
      stop: ["<|eot_id|>", "<|eom_id|>"],
      stream: true, // Streaming enabled
    });

    let fullResponse = "";

    for await (const token of response) {
      if (token.choices[0]?.delta?.content) {
        fullResponse += token.choices[0].delta.content; // Collect response chunks
      }
    }

    return NextResponse.json({ reply: fullResponse }); // ✅ Return full response
  } catch (error) {
    console.error("Together AI API Error:", error);
    return NextResponse.json(
      { error: "Error fetching AI response" },
      { status: 500 }
    );
  }
}
