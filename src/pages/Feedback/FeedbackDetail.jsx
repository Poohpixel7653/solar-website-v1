import React from "react";

const FeedbackDetail = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1400px] m-auto grid md:grid-cols-1">
        <div class="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
          <div
            class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
      max-w-7xl"
          >
            <div class="flex flex-col items-center sm:px-5 md:flex-row">
              <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                <div
                  class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
            md:space-y-5"
                >
                  <a class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                    PROJECT NAME
                  </a>
                  <div class="pt-2 pr-0 pb-0 pl-0">
                    <p class="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
                      · 23rd, April 2021 ·
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="block">
                  <img
                    src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                    class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="py-20">
              <p>
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>

              <div className="md:max-w-[1400px] justify-items-center m-auto grid md:grid-cols-3 max-[780px]:grid-cols-2 gap-8 max-w-[600px] py-20 mt-10 bg-[#71caa2]">
                <div className="col-span-1">44444444444444444444444444</div>
                <div className="col-span-1">44444444444444444444444444</div>
                <div className="col-span-1">44444444444444444444444444</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
