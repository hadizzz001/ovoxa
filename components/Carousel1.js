'use client';

import React from 'react';
import { Star } from 'lucide-react';

const MyCarousel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden mb-20 mt-20">
      {/* Responsive Background Image */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/dl080hpdx/image/upload/v1753111348/banner_ubxshb.webp"
        />
        <img
          src="https://res.cloudinary.com/dl080hpdx/image/upload/v1753111348/banner_ubxshb.webp"
          alt="Sunny-Day Sale Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </picture>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-16 text-left text-white bg-black bg-opacity-30">

<div className="flex space-x-1 text-yellow-400 mb-2">
  {[...Array(5)].map((_, index) => (
    <Star
      key={index}
      size={18}
      stroke="black"
      strokeWidth={1.5}
      fill="#facc15"
    />
  ))} 
          <span className="ml-2 text-white text-xs secP3">by valued customers</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 reviewText">
          Our Products
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg max-w-md leading-relaxed secP2">
          Discover why our shampoo leaves hair soft and revitalized, our skin cream keeps your skin hydrated all day, our beard oil adds shine and strength, and our body oil gives a luxurious glow. Trusted by customers who value quality in every drop.
        </p>

        {/* Button */}
        <a
          href="/shop"
          className="myButton1"
        >
          Shop Now!
        </a>
      </div>
    </div>
  );
};

export default MyCarousel;
