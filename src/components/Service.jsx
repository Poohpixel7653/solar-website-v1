import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { RiSchoolLine } from "react-icons/ri";

const SolarService = [
  {
    id: 1,
    title: "Engineering",
    description:
      "ออกแบบระบบโซล่าเซลล์ให้ถูกต้องตามมารฐานสํารวจหน้างานประเมินการใช้ไฟของลูกค้า",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Procurement",
    description:
      "เลือกผลิตภัณฑ์ที่เหมาะสมกับความต้องการของลูกค้าและมีคุณภาพพร้อมมาตรฐานในราคาที่ถูก",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Construction",
    description:
      "ดําเนินการโครงการตามที่ออกแบบไว้ พร้อมทีมงานและเครื่องมือที่ครบทั้งโครงการ โดยคํานึงถึงความปลอดภัย",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Service = ({ id }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredDesc, setHoveredDesc] = useState(null);

  const handleMouseEnter = (image, desc) => {
    setHoveredImage(image);
    setHoveredDesc(desc);
    console.log("MouseEnter", image, desc);
  };

  return (
    <div id={id} className="w-full h-[100vh] bg-[#F0FBF7] py-24">
      <div
        className="md:max-w-[1400px]
            m-auto
            grid
            lg:grid-cols-2"
      >
        <div>
          <h1 className="md:leading-[72px] text-3xl font-bold grid-cols-1">
            MONO<span className="text-[#509274]"> Services</span>
          </h1>
          <p className="text-lg text-gray-600">
            บริการของ Mono energy contruction co.,ltd.
          </p>
          <div>
            <p class="mt-2 text-gray-500">
              ออกแบบระบบพลังงานแสงอาทิตย์ให้เหมาะสมกับความต้องการ
            </p>
            <p class="mt-2 text-gray-500">
              คัดสรรอุปกรณ์ที่มีคุณภาพสูงและมาตรฐาน
            </p>
            <p class="mt-2 text-gray-500">ติดตั้งระบบโดยทีมช่างผู้ชำนาญ</p>
            <p class="mt-2 text-gray-500">
              บริการตรวจเช็คและดูแลรักษาระบบอย่างสม่ำเสมอ
            </p>

            <p className="text-lg text-gray-600 mt-10">
              ทำไมต้อง เลือกโมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น
            </p>
            <p class="mt-2 text-gray-500">ทีมวิศวกรและทีมช่างผู้ชำนาญ</p>
            <p class="mt-2 text-gray-500">ผลงานที่การันตีความน่าเชื่อถือ</p>
            <p class="mt-2 text-gray-500">บริการครบวงจร</p>
            <p class="mt-2 text-gray-500">เทคโนโลยีที่ทันสมัย</p>
            <p class="mt-2 text-gray-500">ราคาที่คุ้มค่า</p>
          </div>
        </div>

        <div className="bg-white p-5 py-10 rounded-lg grid-cols-1">
          <div
            className="h-[300px] lg:h-[500px] mt-4 bg-center bg-cover bg-no-repeat transition-background-image duration-300 group relative m-0 flex rounded-xl shadow-xl"
            style={{
              backgroundImage: `url(${
                hoveredImage ? hoveredImage : SolarService[0].image
              })`,
            }}
          >
            <div className="w-full mt-auto justify-center justify-items-center items-center gap-6 bottom-0">
              <div className="justify-center w-[100%] gap-6 bottom-40">
                <p className="text-xl text-white p-10">
                  {hoveredDesc ? hoveredDesc : SolarService[0].description}
                </p>
              </div>
              <div className="grid grid-cols-3 z-1 justify-items-center">
                {SolarService.map((service) => (
                  <ServiceCard
                    title={service.title}
                    image={service.image}
                    desc={service.description}
                    onHover={(image, desc) => handleMouseEnter(image, desc)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
