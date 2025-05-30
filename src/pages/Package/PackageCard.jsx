import React from "react";
import numberWithCommas from "../../utils/number.utils";

const PackageCard = ({ data, onClick }) => {
  return (
    <div className="group" onClick={() => onClick(data)}>
      <div class="relative flex flex-col rounded-xl border bg-white bg-clip-border text-gray-700 shadow-md group-hover:shadow-2xl group-hover:cursor-pointer">
        <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={
              data.picture_url ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
            }
            class="h-full w-full object-cover"
          />
        </div>
        {/* <div className="absolute top-5 right-5 bg-[#509274] text-white p-2 rounded-2xl  leading-none flex items-center">
          {data.package}
        </div> */}
        <div class="p-6  divide-y">
          <div class="mb-2 flex items-center justify-between">
            <p class="block  text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {data.phase_power || ""}
            </p>
            <p class="block  text-2xl font-medium leading-relaxed text-blue-gray-900 antialiased">
              {numberWithCommas(data.price) || ""} THB
            </p>
          </div>
          <div>
            <div className="mt-4">
              <div className="mb-4">
                <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  รหัสแพ็กเกจ
                </p>
                <p class="block  text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {data.code || ""}
                </p>
              </div>

              <div className="mb-4">
                <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  แผงโซล่าเซลล์
                </p>
                <p class="block  text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {data.pv_panel_brand || ""}
                </p>
              </div>

              <div className="mb-4">
                <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                  อินเวอร์เตอร์
                </p>
                <p class="block  text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                  {data.inverter_brand || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <button
            class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle  text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
