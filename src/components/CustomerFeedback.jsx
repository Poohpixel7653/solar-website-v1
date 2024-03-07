import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { Feedback } from "../data/feedback";
import FeedbackGard from "./FeedbackGard";

const CustomerFeedback = () => {
  return (
    <div className="w-full h-[100vh] bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] relative">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          MONO<span className="text-[#509274]"> Feedback</span>
        </h1>
        <p className="text-lg text-gray-600">
          Various versions have evolved over the years, sometime by accidentally
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
            {Feedback.map((item) => (
              <SwiperSlide key={item.title}>
                <FeedbackGard title={item.title} image={item.picture} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
