import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Loading from "../Loading";

const Education = () => {
  const [education, setEducation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/resume/education")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEducation(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!education) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-6">
      <h2>{education.title}</h2>
      <ScrollArea className="lg:h-72 mt-4">
        {education.school.map((item, index) => (
          <div key={index} className="flex flex-row gap-2">
            {/* Date */}
            <div className="flex flex-col items-end lg:w-36 mr-4 mt-1 text-center">
              <p>{item.date}</p>
            </div>
            {/* Divider Timeline */}
            <div className="relative justify-center items-center mr-4">
              <div className="bg-pgray w-[1px] h-full"></div>
              <div className="absolute top-4 left-[0.5px] w-3 h-3 bg-gray-800 border-2 border-accent-default rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* School Info */}
            <div className="flex-1 mb-8">
              <h4 className="mb-4 dark:text-pgray">{item.name}</h4>
              <ul className="list-disc ml-4 w-[60vw] md:w-[50vw] lg:w-[40vw]">
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
