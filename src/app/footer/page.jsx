import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="flex justify-between mt-20">
        <div>
          <p className="font-semibold text-[20px]">Freva</p>
          <img src="" alt="" />
        </div>
        <div>
          <p className="font-semibold text-[20px]">Telefon Raqam</p>
          <p>+998 90 932 21 22</p>
        </div>
        <div className="flex justify-evenly gap-20 text-[24px] ">
          <a href="#" className="cursor-pointer">
            <FaTelegram />
          </a>
          <a href="#" className="cursor-pointer">
            <FaInstagram />
          </a>
          <a href="#" className="cursor-pointer">
            <FaYoutube />
          </a>
        </div>
        <div>
          <p className="font-semibold text-[20px]">Elektron pochtamiz</p>
          <p>freva@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
