import { NextRequest, NextResponse } from "next/server";
import { LanguageService } from "@/server/services/Language";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams?.get("code");
  const languageService = new LanguageService();
  try {
    let language_data: any;
    if (!code) {
      language_data = await languageService.getLanguageNamesAll("eng");
    } else {
      language_data = await languageService.getLanguageNamesAll("eng");
      language_data = language_data[`${code}_full`];
    }

    return NextResponse.json(language_data || {}, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users", err_msg: error }, { status: 500 });
  }
}
