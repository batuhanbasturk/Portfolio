import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET() {
  try {
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(new Error(error), {
      status: 500,
    });
  }
}
