"use client";

import CountUp from "react-countup";
//Components
import { skills } from "./resume/Skills";
//Utils
import calculateYear from "@/utils/calculateYear";

const stats = [
  {
    title: "Years of Experience",
    count: calculateYear(new Date(2023, 5, 7)),
  },
  {
    title: "Projects Completed",
    count: 10,
  },
  {
    title: "Technologies Used",
    count: skills.skillList.length,
  },
];

const Stats = () => {
  return (
    <div className="container mx-auto px-0">
      <div className="flex flex-wrap gap-6 text-tertiary">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex items-center xl:justify-start justify-center gap-4 "
          >
            <CountUp
              end={stat.count}
              delay={1.5}
              duration={5}
              separator=","
              className="xl:text-6xl text-4xl font-bold font-number"
            />
            <p className="max-w-24 text-left">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
