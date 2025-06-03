"use client";

import React, { useRef, useState } from "react";
// dsfddsifhdjfjdfdnjfdfd

// dfd
// fd
// fdf

// ICONLAR
import { FaMobileAlt, FaPaintBrush, FaBrain } from "react-icons/fa";
import { BiCodeAlt, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { SiSpring } from "react-icons/si";
import MobileContent from "./MobileContent ";
import UIDesignContent from "./UIDesignContent ";
import BackendContent from "./BackendContent ";
import WebContent from "./WebContent ";

const filters = [
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

  const scrollLeft = () => {
    const newIndex = activeIndex === 0 ? filters.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = activeIndex === filters.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollAmount = 320; // har bir button eni
    scrollContainer.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center w-full mt-18">
      {/* Tugmalar navigatsiyasi */}
      <div className="flex items-center w-full justify-center gap-4">
        {/* Chapga surish tugmasi */}
        <button
          onClick={scrollLeft}
          className="text-4xl text-orange-500 hover:text-orange-700 transition"
        >
          <BiChevronLeft />
        </button>

        {/* Scrollable buttonlar */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-[1600px] max-w-full px-2"
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
                className={`flex items-center justify-start gap-4 cursor-pointer px-6 py-5 rounded-[20px] transition-all duration-300 w-[300px] h-[100px] flex-shrink-0
                  ${
                    isActive
                      ? "bg-[linear-gradient(180deg,_#F2994A_0%,_#F6BC88_100%)] text-white"
                      : "bg-white text-zinc-800"
                  }
                `}
                style={{
                  boxShadow: isActive
                    ? "0px 4.21px 21.03px 0px rgba(255, 239, 224, 1)"
                    : "0px 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* Icon */}
                <span
                  className={`text-2xl ${
                    isActive ? "text-white" : "text-orange-400"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span className="text-sm font-semibold text-left leading-tight flex-1 text-center">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* O‘ngga surish tugmasi */}
        <button
          onClick={scrollRight}
          className="text-4xl text-orange-500 hover:text-orange-700 transition"
        >
          <BiChevronRight />
        </button>
      </div>

      {/* Kontent qismi */}
      <div className="w-full mt-10">{filters[activeIndex].component}</div>
    </div>
  );
}

export default Filter;
