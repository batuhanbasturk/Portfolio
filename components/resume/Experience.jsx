import { ScrollArea } from "../ui/scroll-area";

const experience = {
  title: "My Job Experience",
  description: "I have worked in the following companies",
  companies: [
    {
      name: "OBSS",
      position: "Frontend Developer Intern",
      date: "07/2023 - 08/2023",
      description: [
        {
          value:
            "Successfully completed an intensive course focused on advanced web development technologies such as TypeScript, Next.js, React, Electron, Websocket.",
        },
        {
          value:
            "Created and presented 3 different projects named 'Contact Management System', 'Fighter aircraft Status System' and 'Space Invaders Game'.",
        },
        {
          value:
            "After the course, I proactively took the initiative to advance the Contact Management System’s development by engaging in a dedicated independent study period under guidance of a mentor.",
        },
      ],
    },
    {
      name: "Ketencek I.T.",
      position: "Frontend Developer Intern",
      date: "08/2022 - 09/2022",
      description: [
        {
          value:
            "Developed a pre-design for an upcoming business website independently, successfully completing the project while also gaining valuable experience.",
        },
        {
          value:
            "Developed knowledge and experience in HTML, CSS, JavaScript, and Frameworks such as Bootstrap and Tailwind.",
        },
        {
          value:
            "Gained experience in project management by monitoring the project request process and in the execution phase of business projects.",
        },
      ],
    },
  ],
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2>{experience.title}</h2>
      <p>{experience.description}</p>
      <ScrollArea className="lg:h-72 mt-4">
        {experience.companies.map((company, index) => (
          <div key={index} className="flex flex-row gap-2">
            {/* Company and Date */}
            <div className="flex flex-col items-end lg:w-36 mr-4 mt-1">
              <p className="text-xs">{company.date}</p>
              <p className="text-pgray">{company.name}</p>
            </div>
            {/*Divider Timeline */}
            <div className="relative justify-center items-center mr-4">
              <div className="bg-pgray w-[1px] h-full"></div>
              <div className="absolute top-4 left-[0.5px] w-3 h-3 bg-gray-800 border-2 border-accent-default rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Position and Description */}
            <div className="flex-1 mb-8">
              <h4 className="mb-4">{company.position}</h4>
              <ul className="list-disc ml-4 w-[40vw]">
                {company.description.map((desc, index) => (
                  <li key={index} className="mb-2">
                    {desc.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Experience;
