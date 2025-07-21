"use client";

import React, { useEffect, useState } from "react";

const MyCarousel = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://res.cloudinary.com/dl080hpdx/image/upload/v1753037979/Website_Banners1_klime8.webp"
  );
  const [scale, setScale] = useState(1.1);
  const [enableScrollZoom, setEnableScrollZoom] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setImageSrc(
        "https://res.cloudinary.com/dl080hpdx/image/upload/v1753037978/Website_Banners_corbft.webp"
      );
    }

    const timeout = setTimeout(() => {
      setScale(1);
      setEnableScrollZoom(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!enableScrollZoom) return;

    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? "down" : "up";

      setScale((prev) => {
        let newScale = direction === "down" ? prev + 0.002 : prev - 0.002;
        return Math.min(Math.max(newScale, 1), 1.1);
      });

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableScrollZoom]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt="Banner"
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.6s ease-out",
        }}
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-20 text-left text-black phoneP">
        <p className="text-[14px] mt-2 fadeUp delay-200 gothic mb-3">
          Frost
        </p>
        <h1 className="font-bold uppercase animate-popupUp text-black bannertitle">
          Mourning<br />Cream
        </h1>
        <p className="text-[14px] mt-2 fadeUp delay-100 gothic mt-3">
          GROOMING PRODUCTS
        </p>
        <a href="/shop" style={{ padding: "1em" }} className="mt-10 myButton">
          Shop Now
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes popupUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-popupUp {
          animation: popupUp 1s ease-out forwards;
        }

        .fadeUp {
          animation: fadeUp 1s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default MyCarousel;
