import React, { useEffect, useRef, useState } from "react";
import { hero, house } from "../assets";
import HeroCard from "./HeroCard";
import { projects } from "../data/project";

const Hero = ({ id }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [info, setInfo] = useState({
    installed: 0,
    watt: 0,
  });

  useEffect(() => {
    let installed = projects.length;
    let watt = projects
      .map((project) => project.kwp)
      .reduce((acc, amount) => acc + amount);

    setInfo({
      installed: installed,
      watt: parseInt(watt),
    });

    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollTop = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id={id} className="w-full flex justify-center items-center">
        {/* <img
          src={house}
          alt="Background"
          className="w-full object-cover"
        /> */}
        <video autoPlay loop muted class="md:w-full">
          <source
            src="https://bucket-poohtest.s3.ap-southeast-1.amazonaws.com/video/dji_fly_20230920_100250_112_1695548695648_quickshot.mp4"
            type="video/mp4"
          />
        </video>

        <div
          className={`absolute transition-opacity duration-1000 md:max-w-[1400px]
          m-auto ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-xl py-2 lg:text-5xl md:text-xl text-white font-medium">
            SAVE ENERGY SAFETY WITH OUR SOLAR CELL SYSTEM
          </p>
          <span className="text-xs py-2 lg:text-3xl md:text-2xl text-white font-medium">
            BY Mono Energy Contruction co.,ltd.
          </span>
          <p className="hidden md:block py-2 text-xs lg:text-lg md:text-sm text-white font-medium mt-5">
            ระบบเซลล์แสงอาทิตย์เป็นระบบที่ผลิตไฟฟ้าจากแสงอาทิตย์
            ซึ่งเป็นพลังงานหมุนเวียนที่สะอาด ปลอดภัย และยั่งยืน
            ระบบเซลล์แสงอาทิตย์ช่วยลดการพึ่งพาเชื้อเพลิงฟอสซิล
            ซึ่งเป็นสาเหตุหลักของมลพิษทางอากาศและการเปลี่ยนแปลงสภาพภูมิอากาศ
            ระบบเซลล์แสงอาทิตย์ช่วยประหยัดค่าไฟฟ้า
            ระบบเซลล์แสงอาทิตย์ติดตั้งง่ายและใช้งานได้ยาวนาน
            หากท่านสนใจติดตั้งระบบเซลล์แสงอาทิตย์ สามารถติดต่อเราได้
          </p>

          <div className="hidden md:block mt-10">
            <HeroCard
              installed={info.installed}
              watt={info.watt}
              province={77}
            />
          </div>
        </div>

        <div
          className={`hidden md:block absolute transition-opacity duration-1000 md:max-w-[1400px]
          m-auto
          max-w-[600px] ${!isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-xl py-2 lg:text-5xl md:text-xl text-white font-medium">
            เกี่ยวกับ{" "}
            <span className="md:leading-[72px] text-6xl font-bold">
              Mono Energy Contruction co.,ltd.
            </span>
          </p>
          <p className="text-xs py-2 lg:text-3xl md:text-2xl font-medium text-[#7ce6b6]">
            โมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น:
            ผู้เชี่ยวชาญด้านพลังงานแสงอาทิตย์สู่พลังงานสะอาด
          </p>
          <p className="hidden md:block py-2 text-xs lg:text-lg md:text-sm text-white font-medium mt-5">
            โมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น จำกัด
            ก่อตั้งขึ้นจากความมุ่งมั่นที่จะนำพลังงานแสงอาทิตย์มาใช้ประโยชน์อย่างมีประสิทธิภาพสูงสุด
            ด้วยวิสัยทัศน์ในการเป็นผู้นำด้านพลังงานแสงอาทิตย์ที่มุ่งมั่นพัฒนาและส่งมอบโซลูชั่นพลังงานสะอาดที่ครบวงจร
            จากจุดเริ่มต้น สู่ความเป็นมืออาชีพ
            บริษัทของเราก่อตั้งขึ้นโดยทีมผู้เชี่ยวชาญที่มีประสบการณ์ยาวนานในอุตสาหกรรมพลังงานแสงอาทิตย์
            เริ่มต้นจากการออกแบบระบบ อินเวอร์เตอร์
            และรับติดตั้งงานโซล่าเซลล์ขนาดเล็ก
            ด้วยความมุ่งมั่นที่จะพัฒนาและขยายธุรกิจ
            เราจึงได้จัดตั้งบริษัทขึ้นอย่างเป็นทางการ
            พร้อมเสริมทัพด้วยทีมวิศวกรและทีมช่างผู้ชำนาญ
            เพื่อรองรับโครงการขนาดใหญ่ที่หลากหลาย ผลงานที่การันตีความน่าเชื่อถือ
            โมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น
            ดำเนินโครงการพลังงานแสงอาทิตย์มาแล้วกว่า 40 โครงการ
            ครอบคลุมทั้งภาคเอกชนและภาครัฐ
            ผลงานของเรามีทั้งโครงการขนาดเล็กสำหรับบ้านพักอาศัย
            ไปจนถึงโครงการขนาดใหญ่สำหรับโรงงานอุตสาหกรรม ห้างสรรพสินค้า
            และหน่วยงานภาครัฐ บริการครบวงจร ตอบโจทย์ทุกความต้องการ
            เราพร้อมให้บริการออกแบบ ติดตั้ง
            และดำเนินการโครงการพลังงานแสงอาทิตย์ครบวงจร
            ด้วยทีมงานมืออาชีพและเทคโนโลยีที่ทันสมัย
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
