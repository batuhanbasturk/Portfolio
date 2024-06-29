import { NextResponse } from "next/server";
import projects from "@/data/projects.json";
import skills from "@/data/skills.json";
import stats from "@/data/stats.json";
import calculateYear from "@/utils/calculateYear";

export async function GET() {
  try {
    stats.statsData[0].count = calculateYear(new Date(2023, 5, 7));
    stats.statsData[1].count = projects.length;
    stats.statsData[2].count = skills.skillList.length;

    return NextResponse.json(stats);
  } catch (error) {
    console.error("An error occurred:", error);
    return NextResponse.error(new Error("Internal Server Error"));
  }
}
