import education from "@/data/education.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(education);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error("Internal Server Error");
  }
}
