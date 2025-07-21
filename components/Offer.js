import React from "react";
import Marquee from "react-fast-marquee";
import { Truck, MapPin, Leaf } from "lucide-react";

export default function OfferHeadline() {
  const items = [
    {
      text: "Free delivery on orders over $50",
      icon: <Truck size={24} strokeWidth={1} style={{ marginRight: "8px" }} />,
    },
    {
      text: "We deliver to all cities in Lebanon",
      icon: <MapPin size={24} strokeWidth={1} style={{ marginRight: "8px" }} />,
    },
    {
      text: "Our products are made of natural components",
      icon: <Leaf size={24} strokeWidth={1} style={{ marginRight: "8px" }} />,
    },
  ];

  const renderItems = () => {
    return (
      <>
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "#000",
              fontSize: "11px",
              fontWeight: "100",
              whiteSpace: "nowrap",
              marginRight: "50px",
              marginTop: "1em",
            }}
          >
            {item.icon}
            {item.text}
          </span>
        ))}
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#e4ff52",
        color: "#3d3d3a",
        padding: "2px 0",
        position: "absolute",
        top: "5em",
        width: "100%", 
        overflow: "hidden",
        
      }}
      className="offerline"
    >
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={false}
        direction="left"
        style={{ display: "flex" }}
      >
        {renderItems()}
        {renderItems()}
      </Marquee>
    </div>
  );
}
