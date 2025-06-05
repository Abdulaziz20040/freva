"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/order") return null;

  // Har bir link uchun active className funksiyasi
  const linkClass = (href) =>
    `font-medium text-lg ${
      pathname === href ? "text-white" : "text-gray-600 hover:text-[#02E03D]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-2`}
      style={{
        background:
          "linear-gradient(59.36deg, rgba(10,11,42,0.85) 19.47%, rgba(8,9,55,0.85) 104.56%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-[1342px] mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <h2 className="text-[32px] text-[rgba(2,224,61,1)] font-sans font-extrabold leading-none">
            Freva
          </h2>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-10 items-center font-sans">
          <Link href="/" className={linkClass("/")}>
            Asosiy
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            Biz haqimizda
          </Link>
          <Link href="/pockets" className={linkClass("/pockets")}>
            Paketlar
          </Link>
          <Link href="/costs" className={linkClass("/costs")}>
            Narxlar
          </Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/order">
            <button
              type="button"
              className="transition-all font-sans bg-gradient-to-r from-[#0c8932] to-[#29CA59] cursor-pointer duration-200 text-white font-semibold text-sm md:text-base px-6 py-2.5 rounded-full shadow hover:shadow-lg"
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
