import React, { useRef } from "react";
import { achievement } from "../assets";
import { SlGraduation, SlPeople } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
const About = ({ id }) => {
  return (
    <div
      id={id}
      className="
        w-full
        h-[100vh]
        bg-[#7a8486]
        py-24
    "
    >
      <div
        className="
            md:max-w-[1400px]
            m-auto
            grid
            md:grid-cols-2
            max-w-[600px]
        "
      >
        <div
          className="
            flex
            flex-col
            justify-center
        "
        >
          <h1
            className="
            md:leading-[72px]
          text-3xl 
          font-bold
          "
          >
            MONO<span className="text-[#208486]">About</span>
          </h1>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>
          <p
            className="
            text-lg
            text-gray-600
          "
          >
            Various versions have evolved over the years, sometime by
            accidentally
          </p>
        </div>

        <img
          className="
            m-auto
            md:order-last
            order-first
        "
          src={achievement}
        />
      </div>
    </div>
  );
};

export default About;
