import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { Feedback } from "../data/feedback";
import FeedbackGard from "./FeedbackGard";
import { Link } from "react-router-dom";
import { projects } from "../data/project";

const CustomerFeedback = ({ id }) => {
  return (
    <div id={id} className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] relative">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          MONO<span className="text-[#509274]"> Feedback</span>
        </h1>
        <p className="text-lg text-gray-600">
          ผลงานที่ผ่านมาของ{" "}
          <span className="text-[#509274]">
            {" "}
            Mono Energy Contruction co.,ltd.
          </span>
        </p>
        <div className="items-center justify-center">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 1,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="w-full"
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <FeedbackGard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="flex justify-end mt-10">
          <Link to="/feedback">
            <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-white text-lg shadow">
              <div class="absolute inset-0 w-3 bg-[#509274] transition-all duration-[250ms] ease-out group-hover:w-full"></div>

              <span class="relative text-black group-hover:text-white">
                See more!
              </span>
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default CustomerFeedback;
