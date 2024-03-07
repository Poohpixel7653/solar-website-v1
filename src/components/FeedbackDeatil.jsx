import React from "react";

const FeedbackDeatil = ({ title }) => {
  return (
    <div class="container px-6 py-8 mx-auto">
      <p class="text-xl text-center text-gray-800 font-bold">{title}</p>

      <div class="space-y-8 xl:mt-12">
        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl ">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl">
                pannels
              </h2>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl ">49</h2>
        </div>

        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border  cursor-pointer rounded-xl">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl ">
                self-consumption
              </h2>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl">99</h2>
        </div>

        <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl ">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl ">
                saved yearly
              </h2>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl">149</h2>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDeatil;
