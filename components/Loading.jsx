import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-t-4 border-t-accent-default border-secondary rounded-full"
      />
    </div>
  );
};

export default Loading;
