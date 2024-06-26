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
    scale: [1, 0],
  },
};

const SlideFade = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
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
            className="relative h-full w-full bg-secondary rounded-full"
          />
        );
      })}
    </>
  );
};

export default SlideFade;
