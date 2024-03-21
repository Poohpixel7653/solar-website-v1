import React from "react";

const PackageModal = ({ data, onClose }) => {
  console.log(data);
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full m-10">
            <button
              type="button"
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="md:max-w-[1400px] m-auto overflow-y-auto bg-white px-10 pb-10 py-10">
              <h1 className="font-medium text-3xl py-10 text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                รายละเอียดแพ็กเกจ
              </h1>
              <div class="relative h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                  src={
                    data.picture_url ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
                  }
                  class="h-full object-cover"
                />
              </div>
              <div>
                <div class="mb-2 mt-2 items-center">
                  <h1 className="font-medium text-5xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    {data.code || ""}
                  </h1>
                </div>

                <div className="mt-5">
                  <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    ข้อมูลแผงโซลาร์เซลล์
                  </h1>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-2 mt-2 items-center justify-center">
                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        ยี่ห้อแผงโซลาร์เซลล์
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        {data.pv_panel_brand}
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        รุ่นแผงโซลาร์เซลล์
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        HY-WH144P8-550
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Maximum Power
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        550 Watts
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Module Efficiency
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        21.1%
                      </h1>
                    </div>

                    {/* <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Solar Panel Datasheet
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        Runergy_545W.pdf
                      </h1>
                    </div> */}
                  </div>
                </div>

                <div className="mt-5">
                  <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    ข้อมูลอินเวอร์เตอร์
                  </h1>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-2 mt-2 items-center justify-center">
                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        ยี่ห้ออินเวอร์เตอร์
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        {data.inverter_brand}
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        รุ่นอินเวอร์เตอร์
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        BluE-G-3000S
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Rated Output Power
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        3,000 Watts
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Maximum Efficiency
                      </p>
                      <h1 className="font-medium font-400 text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        97.6%
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        จำนวน (ตัว)
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        1
                      </h1>
                    </div>

                    {/* <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Inverter Datasheet
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        Kstar_Inverter_3K.pdf
                      </h1>
                    </div> */}
                  </div>
                </div>

                {/* <div className="mt-5">
                  <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    ข้อมูลสำหรับแพ็กเกจ Optimizer / Micro Inverter
                  </h1>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 mb-2 mt-2 items-center justify-center">
                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Additional
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        -
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        ยี่ห้อ PV Optimizer
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        -
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        รุ่น PV Optimizer
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        -
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Maximum Efficiency
                      </p>
                      <h1 className="font-medium font-400 text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        -
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        PV Optimizer Datasheet
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        -
                      </h1>
                    </div>
                  </div>
                </div> */}

                <div className="mt-20">
                  <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    Solar Panel Datasheet
                  </h1>

                  <div className="mt-5 overflow-auto">
                    <iframe
                      className="w-full min-h-full"
                      width="100%"
                      height="100%"
                      src={data.pv_panel_pdf}
                      title="pdf-title"
                    ></iframe>
                  </div>
                </div>

                <div className="mt-20">
                  <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    Inverter Datasheet
                  </h1>

                  <div className="mt-5 overflow-auto">
                    <iframe
                      className="w-full min-h-full"
                      width="100%"
                      height="100%"
                      src="https://www.computing.psu.ac.th/th/wp-content/uploads/2014/03/sample-pdf.pdf"
                      title="pdf-title"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
