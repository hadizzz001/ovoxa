"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ResponsiveVideo = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/category");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const renderMedia = (category) => {
    const isVideo = category.img[0].endsWith(".mp4");

    return (
      <div className="relative group w-[370px] h-[550px] flex-shrink-0 overflow-hidden rounded-2xl">
        {isVideo ? (
          <video
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={category.img[0]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
            src={category.img[0]}
            alt={category.name}
          />
        )}

        <div className="absolute bottom-0 w-full   p-4 text-white flex flex-col items-start">
          <h3 className="reviewText">{category.name}</h3>
          <button
            onClick={() => router.push("/search?cat=" + category.name)}
            className="mt-2 myButton2 relative overflow-hidden text-white"
          >
            Shop Now
          </button>

        </div>
      </div>
    );
  };

  return (
    <div className="padforcat">
      <h1 className="myntit mb-3 sm:mb-5">
        Collections
      </h1>

      {/* Mobile: horizontal scroll */}
      <div className="flex overflow-x-auto gap-4 ">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            {renderMedia(category)}
          </motion.div>
        ))}
      </div>


    </div>
  );
};

export default ResponsiveVideo;
