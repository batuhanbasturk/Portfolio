"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
//Components
import SlideFade from "./SlideFade";

const SlideFadeTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="flex fixed w-screen h-screen inset-x-0 inset-y-0 pointer-events-none z-40">
            <SlideFade />
          </div>
          <motion.div
            className="fixed w-screen h-screen top-0 pointer-events-none bg-primary"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
            }}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default SlideFadeTransition;
