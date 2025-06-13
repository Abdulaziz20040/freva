"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Dropdown } from "antd";
import { MdHeadset } from "react-icons/md";

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === "/order") return null;

  const linkClass = (href) =>
    `font-medium text-[15px] ${
      pathname === href ? "text-[#9333EA]" : "text-white hover:text-[#9333EA]"
    }`;

  const items = [
    {
      key: "1",
      label: <Link href="/service/design">Dizayn</Link>,
    },
    {
      key: "2",
      label: <Link href="/service/website">Web sayt</Link>,
    },
    {
      key: "3",
      label: <Link href="/service/telegram">Telegram bot</Link>,
    },
  ];

  return (
    <div className=" containes">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 `}
        style={{
          background:
            "linear-gradient(59.36deg, rgba(10,11,42,0.85) 19.47%, rgba(8,9,55,0.85) 104.56%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-[1342px] mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Freva Logo" class="freva-rotate" />

            <img
              src="/text.png"
              alt="Freva Logo"
              className="w-17 h-6 object-cover drop-shadow-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-sans">
            <Link href="/" className={linkClass("/")}>
              Asosiy
            </Link>
            <Link href="/aboutt" className={linkClass("/aboutt")}>
              Biz haqimizda
            </Link>
            {/* <Link href="/group" className={linkClass("/group")}>
              Bog‘lanish
            </Link> */}
            <Link href="/filter" className={linkClass("/filter")}>
              Loyihalarimiz
            </Link>

            {/* Dropdown: Xizmatlarimiz */}
            {/* <Dropdown menu={{ items }} trigger={["hover"]} placement="bottom">
              <span className="text-white hover:text-[#9333EA] font-medium text-[15px] cursor-pointer">
                Xizmatlarimiz
              </span>
            </Dropdown> */}

            <Link href="/price" className={linkClass("/price")}>
              Narxlar
            </Link>
          </nav>

          {/* Help & Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 text-white text-[15px]">
              <MdHeadset className="text-[#9333EA]" size={20} />
              <span className="">+998(77) 014 50 47</span>
            </div>
            <Link href="/order">
              <button
                type="button"
                className="bg-[#9333EA] cursor-pointer text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow hover:shadow-lg border border-[#9333EA] hover:bg-transparent hover:text-[#9333EA] transition-all"
              >
                Buyurtma berish
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu (o‘zgartirilmagan holatda qoldirilgan) */}
      </header>
    </div>
  );
}

export default Navbar;
