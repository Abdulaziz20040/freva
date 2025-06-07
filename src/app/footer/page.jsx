import React from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full  text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-0">
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold text-xl">Freva</p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold text-xl">Telefon Raqam</p>
          <p className="mt-1">+998 90 932 21 22</p>
        </div>

        <div className="flex justify-center sm:justify-start gap-8 text-2xl text-white">
          <a
            href="https://t.me/freva_manager"
            className="cursor-pointer hover:text-blue-400 transition"
          >
            <FaTelegram />
          </a>
          <a href="#" className="cursor-pointer hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="cursor-pointer hover:text-red-600 transition">
            <FaYoutube />
          </a>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold text-xl">Elektron pochtamiz</p>
          <p className="mt-1">frontenddevelopment17@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
