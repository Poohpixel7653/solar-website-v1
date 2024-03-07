import React from "react";
import FeedbackDeatil from "./FeedbackDeatil";

const FeedbackGard = ({ title, image }) => {
  return (
    <div className="group flex flex-col group relative shadow-lg text-white rounded-md px-6 py-8 w-[350px] h-[580px] md:w-[440px]  overflow-hidden cursor-pointer ">
      <div
        className="absolute inset-0 bg-cover bg-center  group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 duration-300 ease-in-out"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div class="absolute inset-0 opacity-0 bottom-0 h-[100%] w-[100%] bg-white fd-sh group-hover:translate-y-0 transform translate-y-full transition-transform duration-500 group-hover:opacity-100">
        <FeedbackDeatil title={title} />
      </div>
      <h3 className="absolute bottom-5 left-5 text-2xl font-bold mt-10">
        {title}
      </h3>
    </div>
  );
};

export default FeedbackGard;
