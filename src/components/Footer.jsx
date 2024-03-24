import React from "react";
import { logo } from "../assets";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { CiBasketball } from "react-icons/ci";
import { contact } from "../data/contact";

const Footer = ({ id }) => {
  return (
    <div id={id} className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px]">
        <div className="col-span-4">
          <img src={logo} className="h-[50px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call : <a href="tel:+66937261090">{contact.number}</a></h3>
          <h3 className="py-2 text-[#6D737A]">Address : {contact.address}</h3>
          <h3 className="py-2 text-[#6D737A]">
            Email :{" "}
            <a href={`mailto:${contact.contact_email}`}>
              {contact.contact_email}
            </a>
            {", "}
            <a href={`mailto:${contact.sale_email}`}>{contact.sale_email}</a>
            {", "}
            <a href={`mailto:${contact.ceo_email}`}>{contact.ceo_email}</a>
          </h3>
          <div className="flex gap-4 py-4">
            <a
              className="p-4 bg-[#E9F8F3] rounded-xl text-[#4DC39E] hover:bg-[#20B486] hover:text-[#E9F8F3]"
              href={contact.facebook}
              target="_blank"
            >
              <FaFacebookF size={25} />
            </a>
            {/* <a
              className="p-4 bg-[#E9F8F3] rounded-xl text-[#4DC39E] hover:bg-[#20B486] hover:text-[#E9F8F3]"
              href="#"
            >
              <CiBasketball size={25} />
            </a> */}
          </div>
        </div>

        {/* <div className="max-[780px]:col-span-4">
          <h3 className="text-2xl font-bold">Contact</h3>
          <h3 className="py-2 text-[#6D737A]">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email Here"
            />
            <textarea
              className="bg-[#F2F3F4] p-4 w-full rounded my-4 px-5"
              placeholder="Text Here"
            />
            <button
              className="
            max-[780px]:w-full
            my-4
            px-5
          py-5
          rounded-md
          bg-[#20B486]
          text-white
          font-medium
          "
            >
              SEND
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
