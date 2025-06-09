"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // lucide-react o'rnatilgan bo'lishi kerak

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/order") return null;

  const linkClass = (href) =>
    `font-medium text-lg ${
      pathname === href ? "text-white" : "text-gray-400 hover:text-[#3a86ff]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4`}
      style={{
        background:
          "linear-gradient(59.36deg, rgba(10,11,42,0.85) 19.47%, rgba(8,9,55,0.85) 104.56%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="max-w-[1342px] mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <h2 className="text-[28px] text-[#3a86ff] font-extrabold font-sans leading-none">
            Freva
          </h2> */}
          <img
            src="https://i.ibb.co/JWHNV4Gq/Chat-GPT-Image-10-2025-01-53-04-removebg-preview.png"
            alt="Freva Logo"
            className="w-30 h-10 object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-sans">
          <Link href="/" className={linkClass("/")}>
            Asosiy
          </Link>

          <Link href="/price" className={linkClass("/price")}>
            Narxlar
          </Link>
        </nav>

        {/* Buyurtma Button */}
        <div className="hidden md:block">
          <Link href="/order">
            <button
              type="button"
              className="transition-all font-sans bg-[#3a86ff] cursor-pointer text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow hover:shadow-lg border border-[#3a86ff] hover:bg-transparent hover:text-[#3a86ff]"
            >
              Buyurtma berish
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Mobile menu toggle"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-screen bg-[#0a0b2afc] backdrop-blur-md z-50 flex flex-col px-6 py-6 shadow-lg
    transform transition-transform duration-700 ease-in-out
    transition-opacity duration-700
    ${
      mobileMenuOpen
        ? "translate-x-0 opacity-100 pointer-events-auto"
        : "translate-x-full opacity-0 pointer-events-none"
    }`}
      >
        <Link
          href="/"
          className={`${linkClass("/")} mb-4 block`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Asosiy
        </Link>
        <Link
          href="/about"
          className={`${linkClass("/about")} mb-4 block`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Biz haqimizda
        </Link>
        <Link
          href="/price"
          className={`${linkClass("/price")} mb-4 block`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Narxlar
        </Link>

        <div className="flex-grow" />

        <Link href="/order" onClick={() => setMobileMenuOpen(false)}>
          <button
            type="button"
            className="transition-all font-sans bg-[#3a86ff] cursor-pointer text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow hover:shadow-lg border border-[#3a86ff] hover:bg-transparent hover:text-[#3a86ff]"
          >
            Buyurtma berish
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
