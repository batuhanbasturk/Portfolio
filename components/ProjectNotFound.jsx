const ProjectNotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="inline-block">
          <h1 className="text-4xl font-semibold mb-0 pr-6 border-r border-gray-500">
            404
          </h1>
        </div>
        <div className="inline-block pl-6">
          <h2 className="text-lg font-light">
            The project you are looking for does not exists for now.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectNotFoundPage;
