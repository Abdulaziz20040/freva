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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 p-2 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1342px] mx-auto  flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <div>
            <h2 className="text-[32px] font-extrabold text-[#F2994A] leading-none">
              Freva
            </h2>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 items-center">
          <Link
            href="/"
            className="text-[#F2994A] font-semibold text-lg hover:underline underline-offset-4"
          >
            Asosiy
          </Link>
          <Link
            href="/about"
            className="text-gray-700 font-medium text-lg hover:text-[#F2994A]"
          >
            Biz haqimizda
          </Link>
          <Link
            href="/pockets"
            className="text-gray-700 font-medium text-lg hover:text-[#F2994A]"
          >
            Paketlar
          </Link>
          <Link
            href="/costs"
            className="text-gray-700 font-medium text-lg hover:text-[#F2994A]"
          >
            Narxlar
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/order">
            <button
              type="button"
              className="transition-all cursor-pointer duration-200 text-white font-semibold text-sm md:text-base bg-gradient-to-r from-[#F2994A] to-[#F6BC88] px-6 py-2.5 rounded-full shadow hover:shadow-lg"
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
