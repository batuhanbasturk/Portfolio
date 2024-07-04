import { useEffect, useState } from "react";
import {
  FaUser,
  FaCalendar,
  FaEnvelope,
  FaPhone,
  FaLocationArrow,
  FaLanguage,
  FaIcons,
  FaSuitcase,
  FaGlobe,
  FaBook,
} from "react-icons/fa";
import { motion } from "framer-motion";
//Components
import Loading from "../Loading";
import Error from "../Error";
//Utils
import calculateYear from "@/utils/calculateYear";

const iconMap = {
  FaUser: <FaUser />,
  FaCalendar: <FaCalendar />,
  FaEnvelope: <FaEnvelope />,
  FaPhone: <FaPhone />,
  FaLocationArrow: <FaLocationArrow />,
  FaSuitcase: <FaSuitcase />,
  FaLanguage: <FaLanguage />,
  FaIcons: <FaIcons />,
  FaGlobe: <FaGlobe />,
  FaBook: <FaBook />,
};

const AboutMe = () => {
  const [aboutme, setAboutme] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("/api/resume/aboutme");
        const data = await response.json();
        if (!response.ok) {
          setError({
            message: data.message || "Network response was not ok",
            status: response.status,
          });
          return;
        }
        data.info = data.info.map((item) => {
          if (item.title === "Age") {
            item.value = calculateYear(new Date(item.value));
          }
          if (item.title === "Freelance" && item.value === "Available") {
            item.value = (
              <>
                <span className="mr-2">Available</span>
                <motion.div
                  className="inline-block w-3 h-3 rounded-full bg-green-500"
                  animate={{ scale: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </>
            );
          }
          item.icon = iconMap[item.icon];
          return item;
        });
        setAboutme(data);
      } catch (error) {
        setError({ message: error.message, status: error.status || 500 });
      } finally {
        setLoading(false);
      }
    };

    fetchAboutMe();
  }, []);

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-6 mb-8">
      <h2>{aboutme.title}</h2>
      <p>{aboutme.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {aboutme.info.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 bg-tertiary dark:bg-tab rounded-3xl p-6"
          >
            <div className="text-4xl text-accent-default">{item.icon}</div>
            <div>
              <p className="font-semibold text-tab dark:text-pgray italic">
                {item.title}
              </p>
              <ul>
                <li>{item.value}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
