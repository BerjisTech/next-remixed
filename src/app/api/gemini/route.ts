import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { generationConfig, geminiAiPrompt } from "@/constants/gemini";

export async function GET(request: NextRequest) {
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyDzvzfg2WqIdmOG7nGbVYBt4nCVlTdYg2s");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const { searchParams } = new URL(request.url);
    const userSearchText = searchParams.get("search");

    if (!userSearchText) {
      return NextResponse.json({ error: "Missing search parameter" }, { status: 400 });
    }

    const prompt = [...geminiAiPrompt, { text: `input: ${userSearchText}` }, { text: "output:" }];

    const concatenatedPrompt = prompt.map((p) => p.text).join("\n");
    const result = await model.generateContent(concatenatedPrompt as string, generationConfig);
    let res = result.response.text();
    res = res.replace(/'/g, '"');
    return NextResponse.json({ res });
  } catch (error) {
    console.error("Error in AI response:", error);
    return NextResponse.json(
      { error: "Failed to process request", erro_msj: error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {}
