import React from "react";

const FeedbackDeatil = ({ name, panel, inverter, description, watt }) => {
  return (
    <div class="container px-6 py-8 mx-auto">
      <p class="text-2xl text-center text-gray-800 font-bold">{name}</p>

      <div class="space-y-8 xl:mt-12 mt-20">
        <div class="flex items-center justify-between max-w-2xl px-8 mx-auto ">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl">
                Panels
              </h2>
            </div>
          </div>

          <h2 class="text-xl font-semibold text-gray-500 sm:text-4xl ">
            {panel}
          </h2>
        </div>

        <div class="flex items-center justify-between max-w-2xl px-8 mx-auto ">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl ">
                Inverter
              </h2>
            </div>
          </div>

          <h2 class="text-xl font-semibold text-gray-500 sm:text-4xl">
            {inverter}
          </h2>
        </div>

        <div class="flex items-center justify-between max-w-2xl px-8 mx-auto ">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl ">
                Watt
              </h2>
            </div>
          </div>

          <h2 class="text-xl font-semibold text-gray-500 sm:text-4xl">
            {watt} <span className="text-2xl">kWp</span>
          </h2>
        </div>

        <div class="flex items-center max-w-2xl px-8 mx-auto ">
          <div class="flex items-center">
            <p className="text-black">{description}</p>
          </div>
        </div>

        {/* <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto">
          <div class="flex items-center">
            <div class="flex flex-col items-center mx-5 space-y-1">
              <h2 class="text-lg font-medium text-gray-700 sm:text-2xl ">
                saved yearly
              </h2>
            </div>
          </div>

          <h2 class="text-2xl font-semibold text-gray-500 sm:text-4xl">149</h2>
        </div> */}
      </div>
    </div>
  );
};

export default FeedbackDeatil;
