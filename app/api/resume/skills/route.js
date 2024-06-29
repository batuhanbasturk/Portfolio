import skills from "@/data/skills.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(skills);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error(new Error("Internal Server Error"));
  }
}
