"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
//Components
import AboutMe from "@/components/resume/AboutMe";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
      }}
      className="flex items-center justify-center py-12 xl:py-2"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="aboutme"
          className="flex flex-col xl:flex-row gap-16"
        >
          <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="aboutme">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* About Me */}
            <TabsContent value="aboutme" className="w-full">
              <AboutMe />
            </TabsContent>
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <Experience />
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="h-full w-full">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
