import skills from "@/data/skills.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    return NextResponse.json(new Error(error), {
      status: 500,
    });
  }
}
