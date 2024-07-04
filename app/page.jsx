"use client";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
//Components
import Socials from "@/components/home/Socials";
import Photo from "@/components/home/Photo";
import Stats from "@/components/home/Stats";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*Photo*/}
          <Photo />
          {/*Text*/}
          <div className="xl:text-justify text-center mt-4">
            <div className="mb-8">
              <h3 className="text-tab dark:text-tertiary mb-2">
                Software Developer
              </h3>
              <h1>Batuhan Baştürk</h1>
            </div>
            <p className="max-w-[600px] mb-8">
              Welcome to my portfolio! I’m a recent Computer Engineering
              graduate. I love creating beautiful and responsive websites using
              HTML, CSS, and JavaScript, Tailwind, with a focus on React.
              Currently exploring Next.js, and diving into Typescript to expand
              my toolkit. I’m eager to dive into the world of frontend
              development and collaborate on exciting projects. Let’s build
              something amazing together!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 mb-8">
              <a
                href="/assets/batuhanbasturk_resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <Button size="lg" className="flex items-center gap-2">
                  <FaDownload />
                  Download CV
                </Button>
              </a>
              <Socials />
            </div>
            <Stats />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
