import { motion } from "framer-motion";

const circleAnimation = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    opacity: 0,
    scale: 0,
  },
  exit: {
    opacity: 0,
    scale: [0, 1],
  },
};

const SlideFade = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        const isWhite = index % 2 === 0;
        return (
          <motion.div
            key={index}
            variants={circleAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className={`relative h-full w-full rounded-full xl:mx-4 lg:mx-2 mx-1 ${
              isWhite ? "bg-primary dark:bg-secondary" : "bg-accent-default"
            }`}
          />
        );
      })}
    </>
  );
};

export default SlideFade;
