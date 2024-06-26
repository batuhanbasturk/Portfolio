"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed w-screen h-screen bg-primary top-0 pointer-events-none"
        />
        {children}
        {isTransitioning && (
          <div className="fixed w-screen h-screen top-0 left-0 pointer-events-auto bg-transparent z-50" />
        )}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
