"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

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
        const project = projects.find((proj) => proj.num === projectId);
        setProject(project);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <Link href="/projects">Back to Projects</Link>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((item, index) => (
            <li
              key={index}
              className="bg-tab text-accent-default px-4 py-1 rounded-lg"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetail;
