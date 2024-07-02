"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/home/stats");
        const data = await response.json();
        setStats(data.statsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="w-16 h-16 border-4 border-t-4 border-t-accent-default border-gray-300 rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
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
