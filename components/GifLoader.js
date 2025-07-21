"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const SLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-[#000] z-[9999]"
        >
          <img
            src="https://res.cloudinary.com/dl080hpdx/image/upload/v1753038180/white_ixatmn.webp"
            alt="S Loader"
            width={300}
            height={300}
            className="w-64 h-64 object-contain"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SLoader;
