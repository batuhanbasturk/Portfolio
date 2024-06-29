"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.3, ease: "easeInOut" },
        }}
      >
        {/*Photo*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
          }}
        >
          <div className=" absolute w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-normal">
            <Image
              src="/assets/thesis-photo.png"
              quality={100}
              fill
              priority
              sizes="(max-width: 500px) 300px, 500px"
              alt="Photo"
              className="rounded-full"
            />
          </div>
        </motion.div>
        {/* Circle animation */}
        <motion.svg
          className="w-[308px] h-[308px] xl:w-[510px] xl:h-[510px]"
          fill="transparent"
          viewBox="0 0 510 510"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Blue circle */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--stroke-blue)"
            strokeWidth="4"
            initial={{ strokeDasharray: "20 40" }}
            animate={{
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
          {/* White circle */}
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="var(--stroke-secondary)"
            strokeWidth="4"
            initial={{ strokeDasharray: "20 40", strokeDashoffset: "30" }}
            animate={{
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          ></motion.circle>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
