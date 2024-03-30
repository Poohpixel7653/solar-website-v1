import React, { useState } from "react";
import Footer from "../../components/Footer";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

import { item } from "../../data/item";

const Item = () => {
  return (
    <>
      <div className="w-full bg-[#F0FBF7]">
        <div className="md:max-w-[1400px] m-auto">
          <Link to={"/"}>
            <div className="flex p-2 rounded-xl gap-4">
              <img src={logo} className="h-[75px]" />
              <div>
                <p className="hidden lg:block lg:text-lg font-medium">
                  MONO ENERGY CONSTRUCTION CO., LTD.
                </p>
                <p className="hidden lg:block text-[#d1d1d1] font-medium">
                  บริษัท โมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น จำกัด
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#F0FBF7] py-24">
        <div className="md:max-w-[1400px] m-auto grid md:grid-cols-1">
          <div className="flex justify-center">
            <h1 className="md:leading-[72px] text-5xl font-bold">
              อุปกรณ์สำหรับ <span className="text-[#509274]">เพื่อนช่าง</span>
            </h1>
          </div>
          <div className="gap-4 mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
              {item.map((item) => (
                <ItemCard data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Item;
