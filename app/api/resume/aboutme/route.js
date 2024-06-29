import aboutme from "@/data/aboutme.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(aboutme);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error("Internal Server Error");
  }
}
