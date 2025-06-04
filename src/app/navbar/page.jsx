"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vector from "../navbar/Vector.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // 10px dan keyin background ko‘rinadi
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // ${
    //     scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
    //   }
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 px-2
        
        `}
    >
      <div className="max-w-[1342px] mx-auto  flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <div>
            <h2 className="text-[32px] text-[rgba(2,224,61,1)] font-extrabold leading-none">
              Freva
            </h2>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link
            href="/"
            className=" text-[#ffffff] font-semibold text-lg hover:underline underline-offset-4"
          >
            Asosiy
          </Link>
          <Link
            href="/about"
            className="text-gray-600 font-medium text-lg hover:text-[#02E03D]"
          >
            Biz haqimizda
          </Link>
          <Link
            href="/pockets"
            className="text-gray-600 font-medium text-lg hover:text-[#02E03D]"
          >
            Paketlar
          </Link>
          <Link
            href="/costs"
            className="text-gray-600 font-medium text-lg hover:text-[#02E03D]"
          >
            Narxlar
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/order">
            <button
              type="button"
              className="transition-all bg-gradient-to-r from-[#0c8932] to-[#29CA59] cursor-pointer duration-200 text-white font-semibold text-sm md:text-base  px-6 py-2.5 rounded-full shadow hover:shadow-lg"
            >
              Buyurtma berish
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
