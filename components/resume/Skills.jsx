import { useEffect, useState } from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiSass,
  SiNodedotjs,
  SiReact,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
//Shadcn
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
//Components
import Loading from "../Loading";
import Error from "../Error";

const Skills = () => {
  const [skills, setSkills] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const icons = {
    SiNextdotjs: <SiNextdotjs />,
    SiTailwindcss: <SiTailwindcss />,
    SiJavascript: <SiJavascript />,
    SiMysql: <SiMysql />,
    SiMongodb: <SiMongodb />,
    SiSass: <SiSass />,
    SiNodedotjs: <SiNodedotjs />,
    SiReact: <SiReact />,
    SiHtml5: <SiHtml5 />,
    SiCss3: <SiCss3 />,
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/resume/skills");
        const data = await response.json();
        if (!response.ok) {
          setError({
            message: data.message || "Network response was not ok",
            status: response.status,
          });
          return;
        }
        setSkills(data);
      } catch (error) {
        setError({ message: error.message, status: error.status || 500 });
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="mb-4">{skills.title}</h2>
        <p>{skills.description}</p>
      </div>
      <ul className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 xl:gap-6 gap-4">
        {skills.skillList.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="flex group justify-center items-center w-full h-40 bg-tertiary dark:bg-tab rounded-3xl">
                  <div className="text-6xl group-hover:text-accent-hover transition-all duration-300 text-primary dark:text-secondary">
                    {icons[skill.icon]}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
