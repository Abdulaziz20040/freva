"use client";

import React, { useRef, useState } from "react";
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
    icon: <BiCodeAlt />,
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
];

function Filter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const buttonWidth = 320;
    const containerWidth = scrollContainer.offsetWidth;

    const scrollPosition =
      index * buttonWidth - containerWidth / 2 + buttonWidth / 2;

    scrollContainer.scrollTo({
      left: scrollPosition > 0 ? scrollPosition : 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-10 md:mt-20 px-4">
      <div className="flex items-center gap-4">
        <h1 className="text-xl md:text-2xl lg:text-[25px] font-bold">
          Loyihalarimiz
        </h1>
      </div>

      <div className="flex flex-col items-center w-full mt-6">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth w-full"
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
                className={`flex items-center gap-3 cursor-pointer px-4 md:px-6 py-4 md:py-5 rounded-[15px] transition-all duration-300 
                min-w-[70%] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[350px] h-[90px] md:h-[100px] flex-shrink-0 select-none 
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
                  className={`text-xl md:text-2xl ${
                    isActive ? "text-white" : "text-[#0c8932]"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xs sm:text-sm md:text-base font-semibold text-left leading-tight flex-1`}
                  style={{ color: isActive ? "white" : "#0c8932" }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-full mt-8 md:mt-10">
          {filters[activeIndex].component}
        </div>
      </div>
    </div>
  );
}

export default Filter;
