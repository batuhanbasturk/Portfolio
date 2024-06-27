import calculateYear from "@/utils/calculateYear";
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

const aboutme = {
  title: "About Me",
  description:
    "Newly graduated computer engineering student with a passion for frontend development. Seeking opportunities to improve skills in HTML-CSS-JS, Typescript, React and frameworks such as Next.js, Tailwind. Interested in an entry-level role as a frontend developer to continue learning and growth.",
  info: [
    {
      icon: <FaUser />,
      title: "Name",
      value: "Batuhan Baştürk",
    },
    {
      icon: <FaCalendar />,
      title: "Age",
      value: calculateYear(new Date(2000, 5, 7)),
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "batuhanbasturk636@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "(+90) 506 141 26 80",
    },
    {
      icon: <FaLocationArrow />,
      title: "Location",
      value: "Istanbul, Turkey",
    },
    {
      icon: <FaSuitcase />,
      title: "Freelance",
      value: (
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
      ),
    },
    {
      icon: <FaLanguage />,
      title: "Languages",
      value: "Turkish, English",
    },
    {
      icon: <FaIcons />,
      title: "Hobbies",
      value: "Photography, Exploring new places, Games",
    },
    {
      icon: <FaBook />,
      title: "Interests",
      value: "Frontend Development, Fullstack Development",
    },
    {
      icon: <FaGlobe />,
      title: "Nationality",
      value: "Turkish",
    },
  ],
};

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <h2>{aboutme.title}</h2>
      <p>{aboutme.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {aboutme.info.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 bg-tab rounded-3xl p-6"
          >
            <div className="text-4xl text-accent-default">{item.icon}</div>
            <div>
              <p className="font-semibold text-pgray italic">{item.title}</p>
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
