import education from "@/data/education.json";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(education, { status: 200 });
  } catch (error) {
    return NextResponse.json(new Error(error), {
      status: 500,
    });
  }
}
