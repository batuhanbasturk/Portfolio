"use client";

import { FaGithub, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ProjectNotFoundPage from "@/components/ProjectNotFound";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/api/projects");
        const projects = await response.json();
        if (!response.ok) {
          setError({ message: projects.message, status: response.status });
          return;
        }
        const project = projects.find((proj) => proj.num === projectId);
        setProject(project);
        setLoading(false);
      } catch (error) {
        setError({ message: error.message, status: error.status || 500 });
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  if (!project) {
    return <ProjectNotFoundPage />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
      }}
      className="container mx-auto py-12"
    >
      {/* Back Button */}
      <div className="lg:absolute flex flex-row gap-4">
        <Link href="/projects">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center group rounded-lg bg-tertiary dark:bg-tab w-12 h-12">
                <FaArrowAltCircleLeft className="text-3xl text-primary dark:text-secondary group-hover:text-accent-hover" />
              </TooltipTrigger>
              <TooltipContent>Back to Projects</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        {/* Github Button */}
        <Link href={project.link}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="flex justify-center items-center group rounded-lg bg-tertiary dark:bg-tab w-12 h-12 ">
                <FaGithub className="text-3xl text-primary dark:text-secondary group-hover:text-accent-hover" />
              </TooltipTrigger>
              <TooltipContent>Github Repository</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </div>
      <div className="flex flex-col items-center max-w-3xl mx-auto px-4 pt-6 lg:pt-0">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-8 max-w-[600px]">
          {project.title}
        </h1>
        <ul className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((item, index) => (
            <li
              key={index}
              className="bg-tertiary dark:bg-tab text-accent-default px-4 py-1 rounded-lg"
            >
              {item.name}
            </li>
          ))}
        </ul>
        {/* Description */}
        {project.readmore.sections.map((section, index) => (
          <div
            key={index}
            className="w-full p-6 mb-8 rounded-lg dark:bg-tab bg-tertiary"
          >
            {/* Section Title*/}
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            {/* Content */}
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-6 mb-4">
                {section.content.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-4">{section.content}</p>
            )}
            {/* Subsections */}
            {section.subsections &&
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 dark:text-tertiary">
                    {subsection.title}
                  </h3>
                  {Array.isArray(subsection.content) ? (
                    <ul className="list-disc pl-6 mb-4">
                      {subsection.content.map((item, i) => (
                        <li key={i} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{subsection.content}</p>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
