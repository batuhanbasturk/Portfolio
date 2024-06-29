import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET() {
  try {
    return NextResponse.json(projects);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error(new Error("Internal Server Error"));
  }
}
