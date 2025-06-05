"use client";

import React, { useRef, useState } from "react";

// ICONLAR
import { FaMobileAlt, FaPaintBrush, FaBrain } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { SiSpring } from "react-icons/si";
import MobileContent from "./MobileContent ";
import UIDesignContent from "./UIDesignContent ";
import BackendContent from "./BackendContent ";
import WebContent from "./WebContent ";
import All from "./All";

const filters = [
  {
    icon: <BiCodeAlt />, // kerak bo‘lsa boshqa ikonaga almashtiring
    label: "Barcha Loyihalar",
    component: <All />,
  },
  {
    icon: <FaMobileAlt />,
    label: "Mobile Dasturlash",
    component: <MobileContent />,
  },
  {
    icon: <FaPaintBrush />,
    label: "UI / UX Dizayn",
    component: <UIDesignContent />,
  },
  {
    icon: <SiSpring />,
    label: "Backend Dasturlash",
    component: <BackendContent />,
  },
  {
    icon: <BiCodeAlt />,
    label: "Web Dasturlash",
    component: <WebContent />,
  },
  {
    icon: <FaBrain />,
    label: "AI / ML",
    component: <div>AI / ML Content</div>,
  },
  {
    icon: <MdSecurity />,
    label: "Cybersecurity",
    component: <div>Cybersecurity Content</div>,
  },
];

function Filter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const buttonWidth = 320; // button eni + gap
    const containerWidth = scrollContainer.offsetWidth;

    const scrollPosition =
      index * buttonWidth - containerWidth / 2 + buttonWidth / 2;

    scrollContainer.scrollTo({
      left: scrollPosition > 0 ? scrollPosition : 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" mt-20">
      <div className="flex items-center gap-4">
        <h1
          style={{
            fontWeight: "bold",
          }}
          className=" text-[25px] pt-[px]"
        >
          Loyihalarimiz
        </h1>
      </div>
      <div className="flex flex-col items-center w-full mt-6">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth w-full max-w-[100%]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {filters.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }}
                className={`flex items-center gap-4 cursor-pointer px-6 py-5 rounded-[15px] transition-all duration-300 w-[350px] h-[100px] flex-shrink-0 select-none
                ${isActive ? "text-white" : "text-[#0c8932]"}`}
                style={{
                  background: isActive
                    ? "linear-gradient(90deg, #0c8932 0%, #29CA59 100%)"
                    : "linear-gradient(90deg, #f6fdf7 0%, #eaf7eb 100%)",
                  boxShadow: isActive
                    ? "0 4px 20px rgba(12, 137, 50, 0.6)"
                    : "0 2px 6px rgba(0, 0, 0, 0.1)",
                  border: isActive ? "none" : "1px solid #0c8932",
                }}
              >
                <span
                  className={`text-2xl ${
                    isActive ? "text-white" : "text-[#0c8932]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-sm font-semibold text-left leading-tight flex-1 text-[#0c8932]`}
                  style={{
                    color: isActive ? "white" : "#0c8932",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-full mt-10">{filters[activeIndex].component}</div>
      </div>
    </div>
  );
}

export default Filter;
