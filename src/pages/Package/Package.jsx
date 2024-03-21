import React, { useState } from "react";
import FilterButton from "./FilterButton";
import PackageCard from "./PackageCard";
import { packages_data } from "../../data/package";
import PackageModal from "./PackageModal";

const phases = [
  "1 Phase | 3 kW",
  "1 Phase | 5 kW",
  "3 Phase | 10 kW",
  "3 Phase | 15 kW",
  "3 Phase | 20 kW",
  "3 Phase | 30 kW",
  "3 Phase | 50 kW",
  "3 Phase | 100 kW",
];

const solar_brand = ["TW SOLAR"];

const inverter_brand = ["HUAWEI"];

const packages = [
  "ไม่ติดตั้ง Rapid Shutdown",
  "ติดตั้ง Rapid Shutdown",
  "ติดตั้ง Optimizer หรือ Micro Inverter",
];

let phasePowers = [];
let pvList = [];
let inverterList = [];

const Package = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [packageData, setPackageData] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState(packages_data);

  const [selectedPhases, setselectedPhases] = useState([]);

  const togglePhase = (phase) => {
    if (selectedPhases.includes(phase)) {
      setselectedPhases(
        selectedPhases.filter((selectedPhase) => selectedPhase !== phase)
      );
    } else {
      setselectedPhases([...selectedPhases, phase]);
    }
  };

  const clickHandler = (data) => {
    setPackageData(data);
    openModalHandler();
  };

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
    setPackageData(null);
  };

  const filterProducts = () => {
    if (!phasePowers.length && !pvList.length && !inverterList.length) {
      setFilteredProducts(packages_data);
      return;
    }

    const newFilteredProducts = packages_data.filter((product) => {
      return phasePowers.some((power) => product.phase_power.includes(power));
    });
    setFilteredProducts(newFilteredProducts);
  };

  const filterPVSolar = () => {
    if (!phasePowers.length && !pvList.length && !inverterList.length) {
      setFilteredProducts(packages_data);
      return;
    }

    const newFilteredProducts = packages_data.filter((product) =>
      pvList.some((brand) => product.pv_panel_brand.includes(brand))
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterInverterSolar = () => {
    if (!phasePowers.length && !pvList.length && !inverterList.length) {
      setFilteredProducts(packages_data);
      return;
    }

    const newFilteredProducts = packages_data.filter((product) =>
      inverterList.some((inverter) => product.inverter_brand.includes(inverter))
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1400px] m-auto grid md:grid-cols-1">
        <div className="flex justify-center">
          <h1 className="md:leading-[72px] text-5xl font-bold">
            แพ็กเกจ<span className="text-[#509274]"> Solar Rooftop</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          <div className="text-center">
            <div className="mb-5">
              <h1>เฟส | กำลังติดตั้ง</h1>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {phases.map((phase) => {
                  return (
                    <FilterButton
                      key={phase}
                      name={phase}
                      onClick={(name) => {
                        if (phasePowers.indexOf(name) > -1) {
                          phasePowers.splice(phasePowers.indexOf(name), 1);
                        } else {
                          phasePowers.push(name);
                        }

                        filterProducts(phasePowers);
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mb-5">
              <h1>ยี่ห้อแผงโซลาร์เซลล์</h1>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {solar_brand.map((solar) => (
                  <FilterButton
                    key={solar}
                    name={solar}
                    onClick={(solar) => {
                      if (pvList.indexOf(solar) > -1) {
                        pvList.splice(pvList.indexOf(solar), 1);
                      } else {
                        pvList.push(solar);
                      }
                      filterPVSolar();
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h1>ยี่ห้ออินเวอเตอร์</h1>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {inverter_brand.map((inverter) => (
                  <FilterButton
                    key={inverter}
                    name={inverter}
                    onClick={(inverter) => {
                      if (inverterList.indexOf(inverter) > -1) {
                        inverterList.splice(inverterList.indexOf(inverter), 1);
                      } else {
                        inverterList.push(inverter);
                      }
                      filterInverterSolar();
                    }}
                  />
                ))}
              </div>
            </div>

            {/* <div className="mb-5">
              <h1>แพ็กเกจ</h1>
              <div className="grid grid-cols-3 md:grid-cols-1">
                {packages.map((_package) => (
                  <FilterButton key={_package} name={_package} />
                ))}
              </div>
            </div> */}
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3  gap-4">
              {filteredProducts.map((item) => (
                <PackageCard data={item} onClick={clickHandler} />
              ))}
            </div>
            {/* 
            <div class="flex w-full items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
              <div class="w-full  flex items-center justify-between border-t border-gray-200">
                <div class="flex items-center pt-3 text-gray-600 hover:text-[#509274] cursor-pointer">
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.1665 4H12.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.1665 4L4.49984 7.33333"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.1665 4.00002L4.49984 0.666687"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="text-sm ml-3 font-medium leading-none ">Previous</p>
                </div>
                <div class="sm:flex hidden">
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    1
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    2
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    3
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-[#509274] border-t border-[#509274] pt-3 mr-4 px-2">
                    4
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    5
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    6
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    7
                  </p>
                  <p class="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-[#509274] border-t border-transparent hover:border-[#509274] pt-3 mr-4 px-2">
                    8
                  </p>
                </div>
                <div class="flex items-center pt-3 text-gray-600 hover:text-[#509274] cursor-pointer">
                  <p class="text-sm font-medium leading-none mr-3">Next</p>
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.1665 4H12.8332"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 7.33333L12.8333 4"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.5 0.666687L12.8333 4.00002"
                      stroke="currentColor"
                      stroke-width="1.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {modalOpen && packageData ? (
        <PackageModal data={packageData} onClose={closeModalHandler} />
      ) : null}
    </div>
  );
};

export default Package;
