import React from "react";
import numberWithCommas from "../../utils/number.utils";

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
                    <span className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                     {" "} ({numberWithCommas(data.price)} บาท)
                    </span>
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
                        {data.pv_panel_model || ""}
                      </h1>
                    </div>

                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        จำนวน (แผง)
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        {data.pv_panel_quantity || ""}
                      </h1>
                    </div>

                    {/* <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Maximum Power
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        550 Watts
                      </h1>
                    </div> */}
                    {/* 
                    <div className="mb-4">
                      <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        Module Efficiency
                      </p>
                      <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        21.1%
                      </h1>
                    </div> */}

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
                        {data.inverter_model}
                      </h1>
                    </div>

                    {/* <div className="mb-4">
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
                    </div> */}

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

                <div className="mt-5">
                  <h1 className="font-medium text-2xl underline text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    เพิ่มเติม
                  </h1>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 mb-2 mt-2 items-center justify-center">
                    {data.wlan ? (
                      <>
                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            WLAN
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.wlan}
                          </h1>
                        </div>

                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            จำนวน (ตัว)
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.wlan_quantity}
                          </h1>
                        </div>
                      </>
                    ) : null}
                    {data.meter ? (
                      <>
                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            SMART METER
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.meter}
                          </h1>
                        </div>

                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            จำนวน (ตัว)
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.meter_quantity}
                          </h1>
                        </div>
                      </>
                    ) : null}

                    {data.box ? (
                      <>
                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            กล่อง AC/DC BOX
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.box}
                          </h1>
                        </div>

                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            จำนวน (ตู้)
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.box_quantity}
                          </h1>
                        </div>
                      </>
                    ) : null}

                    {data.mount ? (
                      <>
                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            Mounting roof
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.mount}
                          </h1>
                        </div>

                        <div className="mb-4">
                          <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                            จำนวน (ชุด)
                          </p>
                          <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                            {data.mount_quantity}
                          </h1>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>

                {data.detail ? (
                  <div className="mt-5">
                    <h1 className="font-medium text-2xl underline text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                      รายละเอียด
                    </h1>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-2 mt-2 items-center justify-center">
                      <div className="mb-4">
                        <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                          ประหยัดค่าไฟฟ้า (บาท)
                        </p>
                        <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                          {numberWithCommas(data.detail.save)}
                        </h1>
                      </div>

                      <div className="mb-4">
                        <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                          พื้นที่ติดตั้งโดยประมาณ(ตร.ม)
                        </p>
                        <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                          {data.detail.area}
                        </h1>
                      </div>

                      <div className="mb-4">
                        <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                          ระยะเวลาคืนทุน(ปี)
                        </p>
                        <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                          {data.detail.payback_period}
                        </h1>
                      </div>

                      <div className="mb-4">
                        <p class="block  text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                          รับประกันงานติดตั้ง(ปี)
                        </p>
                        <h1 className="font-medium text-2xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                          {data.detail.guarantee}
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="mt-5">
                  <h1 className="font-medium text-2xl underline text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    บริการ
                  </h1>
                  <div className="mb-2 mt-2 items-center justify-center">
                    <ul>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        ฟรี ล้างแผง 2 ครั้ง
                      </li>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        ฟรี ค่าแรงติดตั้ง
                      </li>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        ฟรี ค่าดำเนินการขออนุญาตขนานไฟฟ้า
                      </li>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        ระยะสายไฟจาก แผงถึง อินเวอร์เตอร์ ไม่เกิน 80 ม.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5">
                  <h1 className="font-medium text-2xl underline text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                    ติดต่อ
                  </h1>
                  <div className="mb-2 mt-2 items-center justify-center">
                    <ul>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        <a href="mailto:contact@mnec.co.th">sales@mnec.co.th</a>
                      </li>
                      <li className="font-medium text-xl text-[#3f3a3a] leading-relaxed text-blue-gray-900 antialiased">
                        <a href="tel:+66937261090">093-726-1090</a>
                      </li>
                    </ul>
                  </div>
                </div>

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
                      src={data.inverter_pdf}
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
