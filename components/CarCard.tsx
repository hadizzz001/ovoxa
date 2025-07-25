"use client";

import { TempProps } from "../types";
import { motion } from "framer-motion";

interface CarCardProps {
  temp: TempProps;
}

const CarCard = ({ temp }: CarCardProps) => {
  const { _id, title, price, discount, img, category, stock, type, color } = temp;

  const isOutOfStock =
    (type === "single" && parseInt(stock) === 0) ||
    (type === "collection" &&
      color?.every((clr) => clr.sizes?.every((size) => parseInt(size.qty) === 0)));

  return (
    <a id="nonehover" href={`/product?id=${_id}`}>
<div className="w-[290px] sm:w-[370px]">
  <div className="relative overflow-hidden rounded-2xl group w-[290px] sm:w-[350px] h-[450px]">
    <img
      src={img[0]}
      alt={title}
      className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110 rounded-2xl"
    />

    {isOutOfStock && (
      <div className="absolute inset-0 bg-gray-600 bg-opacity-70 text-white flex items-center justify-center text-lg font-bold z-10 rounded-2xl">
        Out of Stock
      </div>
    )}
  </div>

  <div className="px-2 mt-3 text-left">
    <h2 className="myPrice1">{title}</h2>
    <div className="inline-flex flex-wrap gap-x-2 items-baseline justify-start text-white">
      <span className="font-light text-[11px] py-1 line-through text-gray-400">
        ${parseFloat(price).toFixed(2)}
      </span>
      <span className="myPrice">
        ${parseFloat(discount).toFixed(2)} USD
      </span>
    </div>
  </div>
</div>

    </a>
  );
};

export default CarCard;
