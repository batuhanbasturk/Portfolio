import {
  SiNextdotjs,
  SiTypescript,
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
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

const skills = {
  title: "My Skills",
  description: "I have experience with the following technologies",
  skillList: [
    {
      name: "HTML5",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS3",
      icon: <SiCss3 />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Sass",
      icon: <SiSass />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="mb-4">
        <h2 className="mb-4">{skills.title}</h2>
        <p>{skills.description}</p>
      </div>
      <ul className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 xl:gap-6 gap-4">
        {skills.skillList.map((skill, index) => {
          return (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="flex group justify-center items-center w-full h-40 bg-tab rounded-3xl">
                    <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                      {skill.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
