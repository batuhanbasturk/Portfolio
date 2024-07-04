const errorPage = ({ message, status }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="inline-block">
          <h1 className="text-4xl font-semibold mb-0 pr-6 border-r border-gray-500">
            {status}
          </h1>
        </div>
        <div className="inline-block pl-6">
          <h2 className="text-lg font-light">{message}</h2>
        </div>
      </div>
    </div>
  );
};

export default errorPage;
