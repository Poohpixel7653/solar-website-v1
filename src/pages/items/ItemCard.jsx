import React from "react";

const ItemCard = ({ data }) => {
  return (
    <div className="group">
      <div class="relative cursor-pointer rounded-lg border p-5 bg-white group-hover:shadow-md group-hover:cursor-pointer">
        <div class="aspect-square overflow-hidden">
          <img
            class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300"
            src={data.picture}
            alt=""
          />
        </div>
        {/* <div class="absolute top-0 m-1 rounded-full bg-white">
        <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
          Sale
        </p>
      </div> */}
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                {data.name || ""}
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
          </div>

          <div class="text-right">
            <p class="text-xs font-normal sm:text-sm md:text-base">
              {data.price || ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
