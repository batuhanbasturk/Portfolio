import { useEffect, useState } from "react";
//Shadcn
import { ScrollArea } from "../ui/scroll-area";
//Components
import Loading from "../Loading";
import Error from "../Error";

const Experience = () => {
  const [experience, setExperience] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch("/api/resume/experience");
        const data = await response.json();
        if (!response.ok) {
          setError({
            message: data.message || "Network response was not ok",
            status: response.status,
          });
          return;
        }
        setExperience(data);
      } catch (error) {
        setError({ message: error.message, status: error.status || 500 });
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col gap-6">
      <h2>{experience.title}</h2>
      <p>{experience.description}</p>
      <ScrollArea className="lg:h-72 mt-4">
        {experience.companies.map((company, index) => (
          <div key={index} className="flex flex-row gap-2">
            {/* Company and Date */}
            <div className="flex flex-col items-center md:items-end lg:w-36 mr-4 mt-1 text-center min-w-[100px]">
              <p className="whitespace-pre-line md:whitespace-normal">
                {company.date}
              </p>
              <p className="text-tab dark:text-pgray font-semibold">
                {company.name}
              </p>
            </div>
            {/* Divider Timeline */}
            <div className="relative justify-center items-center mr-4">
              <div className="bg-pgray w-[1px] h-full"></div>
              <div className="absolute top-4 left-[0.5px] w-3 h-3 bg-gray-800 border-2 border-accent-default rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Position and Description */}
            <div className="flex-1 mb-8">
              <h4 className="mb-4 dark:text-pgray">{company.position}</h4>
              <ul className="list-disc ml-4 lg:w-[40vw] md:w-[50vw]">
                {company.description.map((desc, descIndex) => (
                  <li key={descIndex} className="mb-2">
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
