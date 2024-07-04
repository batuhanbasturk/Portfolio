"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
//Components
import Loading from "../Loading";
import Error from "../Error";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/home/stats");
        const data = await response.json();
        if (!response.ok) {
          setError({ message: data.message, status: response.status });
          return;
        }
        setStats(data.statsData);
      } catch (error) {
        setError({ message: error.message, status: 500 });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  return (
    <div className="container mx-auto px-0">
      <div className="flex flex-wrap gap-6 text-tab dark:text-tertiary">
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
