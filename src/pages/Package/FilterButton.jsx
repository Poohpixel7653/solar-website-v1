import React, { useState } from "react";

const FilterButton = ({ name, onClick, selected }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick(name);
  };

  return (
    <div className="flex justify-center m-2">
      <button
        className={`flex w-[150px] justify-center items-center gap-3 rounded-lg border border-green-500 py-3 m-auto text-center align-middle font-sans text-xs font-bold uppercase text-[#509274] transition-all hover:opacity-75 ${
          isActive ? "ring ring-green-300 bg-[#509274] text-white" : ""
        }`}
        type="button"
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default FilterButton;
