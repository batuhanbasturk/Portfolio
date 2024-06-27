"use client";
import CountUp from "react-countup";

const calculateYearsOfExperience = (startDate) => {
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - startDate.getFullYear();
  const isBeforeStartDate =
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() &&
      currentDate.getDate() < startDate.getDate());
  return isBeforeStartDate ? yearsDifference - 1 : yearsDifference;
};

const stats = [
  {
    title: "Years of Experience",
    count: calculateYearsOfExperience(new Date(2023, 0, 1)),
  },
  {
    title: "Projects Completed",
    count: 10,
  },
  {
    title: "Technologies Used",
    count: 20,
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
