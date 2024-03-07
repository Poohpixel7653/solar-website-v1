import React, { useEffect, useState } from "react";
import { logo } from "../assets";

const Navbar = ({ onClick }) => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [currentScrollPos, setCurrentScrollPos] = useState(0);

  const [activeItem, setActiveItem] = useState(null);

  const handleClick = () => setToggle(!toggle);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(prevScrollPos > currentScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
      setCurrentScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, currentScrollPos]);

  const handleClickActive = (item) => {
    setActiveItem(item);
    // Add your logic here to handle the click event for each menu item
  };

  return (
    <div
      className={`w-full h-[96px] ${
        currentScrollPos <= 50
          ? "bg-transparent text-white"
          : "sticky top-0 z-50 bg-white text-[#506f72] shadow-md"
      } transition-colors duration-500 ease-in-out fixed z-40`}
    >
      <div className=" md:max-w-[1400px] max-w-[600px] m-auto w-full h-full flex justify-between items-center ">
        <div className="flex p-2 rounded-xl justify-center items-center gap-4">
          <img src={logo} className="h-[75px]" />
          <div>
            <p className="text-white font-medium">
            MONO ENERGY CONSTRUCTION CO., LTD.
            </p>
            <p className="text-[#d1d1d1] font-medium">
            บริษัท โมโน เอ็นเนอร์ยี่ คอนสตรัคชั่น จำกัด
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <ul className=" flex gap-10">
            <li
              onClick={() => handleClickActive("Home")}
              className={`menu-item ${activeItem === "Home" ? "active" : ""}`}
            >
              Home
            </li>
            <li
              onClick={() => handleClickActive("About")}
              className={`menu-item ${activeItem === "About" ? "active" : ""}`}
            >
              About
            </li>
            <li
              onClick={() => handleClickActive("Support")}
              className={`menu-item ${
                activeItem === "Support" ? "active" : ""
              }`}
            >
              Support
            </li>
            <li
              onClick={() => handleClickActive("Platform")}
              className={`menu-item ${
                activeItem === "Platform" ? "active" : ""
              }`}
            >
              Platform
            </li>
            <li
              onClick={() => handleClickActive("Footer")}
              className={`menu-item ${activeItem === "Footer" ? "active" : ""}`}
            >
              Footer
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <button class="navbar-burger flex items-center text-blue-600 p-3">
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={
          toggle ? "absolute z-10 p-4 w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 ">Home</li>
          <li className="p-4 hover:bg-gray-100 ">About</li>
          <li className="p-4 hover:bg-gray-100 ">Support</li>
          <li className="p-4 hover:bg-gray-100 ">Platform</li>
          <li className="p-4 hover:bg-gray-100 ">Price</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
