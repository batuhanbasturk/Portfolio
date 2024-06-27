import { ScrollArea } from "../ui/scroll-area";

const education = {
  title: "Education & Certification",
  school: [
    {
      name: "Marmara University - Computer Engineering",
      date: "09/2019 - 07/2024",
      description: [
        {
          value:
            "For my graduation thesis project, I completed a project titled 'Forecasting Workforce Capacity for Supermarket Delivery System' using machine learning, utilizing data obtained from Turkey's one of the most famous supermarket chain.",
        },
        {
          value:
            "As a Promotion Committee Member at MIES club, I collaborated with a team to plan and execute one ofthe largest events for the most active club at Marmara University, with over 600 participants.",
        },
      ],
    },
  ],
};

const Education = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2>{education.title}</h2>
      <ScrollArea className="lg:h-72 mt-4">
        {education.school.map((item, index) => (
          <div key={index} className="flex flex-row gap-2">
            <div className="flex flex-col items-end lg:w-36 mr-4 mt-1">
              <p>{item.date}</p>
            </div>
            {/*Divider Timeline */}
            <div className="relative justify-center items-center mr-4">
              <div className="bg-pgray w-[1px] h-full"></div>
              <div className="absolute top-4 left-[0.5px] w-3 h-3 bg-gray-800 border-2 border-accent-default rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="flex-1 mb-8">
              <h4 className="mb-4">{item.name}</h4>
              <ul className="list-disc ml-4 w-[40vw]">
                {item.description.map((desc, index) => (
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

export default Education;
