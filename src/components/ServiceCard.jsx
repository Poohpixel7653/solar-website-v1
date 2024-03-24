import React, { useState } from "react";
import { FaSolarPanel } from "react-icons/fa";

const ServiceCard = ({ title,desc, onHover, image }) => {
  const [titleHovered, setTitleHovered] = useState("");

  const onHovered = (_hovered) => {
    setTitleHovered(_hovered);
  };

  return (
    <div
      className="w-[200px] lg:w-[100px] p-4 flex flex-col items-center justify-center gap-4 text-white  hover:text-[#649e70] font-bold hover:cursor-pointer"
      onMouseEnter={() => {
        onHovered(title);
        onHover(image,desc);
      }}
    >
      {/* <FaSolarPanel size={40} className="white" /> */}
      <h1 className="text-lg text-center">{title}</h1>
    </div>
  );
};

export default ServiceCard;
