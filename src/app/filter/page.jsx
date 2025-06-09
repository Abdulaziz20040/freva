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
          className="flex gap-10 overflow-x-auto items-center justify-start no-scrollbar w-full bg-[#090A31] p-3 rounded-full"
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
                className={`flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ease-in-out transform
          ${
            isActive
              ? "cursor-pointer border border-[#3a86ff] bg-transparent  text-white shadow-inner scale-100"
              : "cursor-pointer hover:scale-105"
          }
        `}
              >
                <span className={`text-lg md:text-xl`}>{item.icon}</span>
                <span className="text-sm md:text-base font-medium">
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
