import experience from "@/data/experience.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(experience);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error("Internal Server Error");
  }
}
