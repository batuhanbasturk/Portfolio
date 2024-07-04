"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import SwiperButtons from "../../components/SwiperButtons";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/tooltip";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();

        if (!response.ok) {
          setError({ message: data.message, status: response.status });
          return;
        }
        setProjects(data);
        setProject(data[0]);
      } catch (error) {
        setError({ message: error.message, status: error.status || 500 });
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} status={error.status} />;
  }

  return (
    <motion.div
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8 lg:items-center">
          <div className="flex flex-col order-2 w-full xl:w-[50%] lg:w-[60%] xl:h-[460px] xl:justify-between xl:order-none">
            <div className="flex flex-col gap-6 h-[50%]">
              {/* Outline Number */}
              <div className="text-tab dark:text-tertiary text-8xl font-number leading-none">
                {project.num}
              </div>
              <div>
                <h3 className="text-accent-default">{project.title}</h3>
                <h4 className="text-tab dark:text-tertiary mt-2">
                  {project.category}
                </h4>
              </div>
              {/* Project Description */}
              <p className="text-pgray">{project.description}</p>
              {/* Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="bg-tertiary dark:bg-tab text-accent-default px-4 py-1 rounded-lg"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border-b border-accent-default" />
              {/* Links */}
              <div className="flex items-center gap-4">
                {/*Github Button*/}
                <Link href={project.link}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center group rounded-lg bg-tertiary dark:bg-tab w-16 h-16">
                        <FaGithub className="text-4xl text-primary dark:text-secondary group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*External Link Button*/}
                <Link href={`/projects/${project.num}`}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="flex justify-center items-center group rounded-lg bg-tertiary dark:bg-tab w-16 h-16">
                        <FaExternalLinkAlt className="text-4xl text-primary dark:text-secondary group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>Read for more...</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] lg:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) =>
                setProject(projects[swiper.activeIndex])
              }
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className=" h-[300px] sm:h-[500px] relative group flex justify-center items-center bg-tab ">
                    {/* Overlay */}
                    <div className="absolute w-full h-full inset-y-0 bg-black/10 z-20"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 100vw, 50vw"
                        className="object-cover "
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Swiper Button */}
              <SwiperButtons
                containerStyles="flex justify-between absolute gap-2 right-0 bottom-[calc(50%_-_24px)] w-full xl:bottom-0 xl:w-max xl:justify-none z-40"
                btnStyles="bg-accent-default text-primary dark:text-secondary rounded-lg w-8 h-8 md:w-12 md:h-12 flex justify-center items-center transition-all duration-300 hover:bg-accent-hover"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
