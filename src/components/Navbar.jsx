import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import scrollToComponent from "../utils/ScrollUtils";
import { Link } from "react-router-dom";

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
          ? "md:bg-transparent text-white bg-white"
          : "sticky top-0 z-50 bg-[#2F4F4F] text-white shadow-md"
      } transition-colors duration-500 ease-in-out md:fixed z-40`}
    >
      <div className="md:max-w-[1400px] m-auto w-full flex justify-between items-center px-10">
        <div className="flex p-2 rounded-xl justify-center items-center gap-4">
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
        <div className="hidden md:flex items-center">
          <ul className=" flex gap-10">
            <li
              onClick={() => {
                handleClickActive("Home");
                scrollToComponent("home");
              }}
              className={`menu-item ${activeItem === "Home" ? "active" : ""}`}
            >
              Home
            </li>
            <li
              onClick={() => {}}
              className={`menu-item ${
                activeItem === "Product" ? "active" : ""
              }`}
            >
              <Link to="/package-list">Product</Link>
            </li>
            <li
              onClick={() => {
                handleClickActive("About");
                scrollToComponent("service");
              }}
              className={`menu-item ${activeItem === "About" ? "active" : ""}`}
            >
              Service
            </li>
            <li
              onClick={() => {
                handleClickActive("Map");
                scrollToComponent("map");
              }}
              className={`menu-item ${activeItem === "Map" ? "active" : ""}`}
            >
              Map
            </li>
            <li
              onClick={() => {
                handleClickActive("Feedback");
                scrollToComponent("feedback");
              }}
              className={`menu-item ${
                activeItem === "Feedback" ? "active" : ""
              }`}
            >
              Feedback
            </li>
            <li
              onClick={() => {
                handleClickActive("Contact");
                scrollToComponent("contact");
              }}
              className={`menu-item ${
                activeItem === "Contact" ? "active" : ""
              }`}
            >
              Contact
            </li>
          </ul>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <button class="w-14 h-14 relative focus:outline-none bg-transparent rounded">
            <div class="block w-5 absolute left-6 top-1/2  transform  -translate-x-1/2 -translate-y-1/2">
              <span
                class={`block absolute h-0.5 w-7 text-[#a83234] bg-current transform transition duration-500 ease-in-out ${
                  toggle ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                class={`block absolute  h-0.5 w-7 text-[#a83234] bg-current   transform transition duration-500 ease-in-out ${
                  toggle ? "opacity-0" : ""
                }`}
              ></span>
              <span
                class={`block absolute  h-0.5 w-7 text-[#a83234] bg-current transform  transition duration-500 ease-in-out ${
                  toggle ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={
          toggle
            ? "p-4 w-full px-8 text-black bg-white md:hidden transition-transform transform translate-x-0"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 ">Home</li>
          <li className="p-4 hover:bg-gray-100 ">
            <Link to="/package-list">Product</Link>
          </li>
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
