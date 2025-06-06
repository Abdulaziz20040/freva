"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import image from "../../../img/1.png";
import "../globals.css";

const sliderData = [
  {
    title: "Freva – Tajribali jamoa bilan loyihalaringizni tez va sifatli",
    highlight: "yakunlang",
    description: [
      "Bugun zakaz bering – ertaga tayyor bo‘lsin!",
      "Freva jamoasi har kuni yangi loyihalar uchun tayyor.",
      "— barcha xizmatlar bir joyda.",
      "Mos xizmatni tanlang, biz tez va sifatli yakunlaymiz!",
    ],
    tags: ["Web Dizayn", "UI/UX Dizayner", "Frontend"],
    projectsCount: "10.5K",
    badgeText: "Loyihalar",
    featureText: "Tez va mukammal natija",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
  {
    title: "Biznesingiz uchun zamonaviy raqamli yechimlar",
    highlight: "yarating",
    description: [
      "Biznesingizni internetga olib chiqamiz.",
      "Saytlar, CRM tizimlar, mobil ilovalar – barchasi bizda.",
      "Ishonchli va tezkor yechimlar bilan ishlaymiz.",
    ],
    tags: ["Backend", "Mobil Ilovalar", "CRM"],
    projectsCount: "8.2K",
    badgeText: "Yakunlangan loyihalar",
    featureText: "Innovatsion xizmatlar",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
  {
    title: "Portfolio va brendingizni mukammal qiling",
    highlight: "hoziroq",
    description: [
      "Shaxsiy brendingizni kuchaytiring.",
      "Portfoliongizni professional tarzda yarating.",
    ],
    tags: ["Grafik Dizayn", "Branding", "Portfolio"],
    projectsCount: "6.7K",
    badgeText: "Yakunlangan ishlanmalar",
    featureText: "Kreativ va ta'sirchan dizayn",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
  {
    title: "Mobil ilovalarni ishlab chiqish endi oson",
    highlight: "Freva bilan",
    description: [
      "iOS va Android uchun ilovalar ishlab chiqamiz.",
      "Ilovalaringizni foydalanuvchilarga qulay qiling.",
    ],
    tags: ["React Native", "Flutter", "iOS/Android"],
    projectsCount: "4.9K",
    badgeText: "Mobil Loyihalar",
    featureText: "Platformalararo echimlar",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
  {
    title: "UI/UX dizayn orqali mijozlarni jalb qiling",
    highlight: "natija muhim",
    description: [
      "Foydalanuvchi tajribasini ustuvor qiling.",
      "UI dizayn sizning brendingizni aks ettiradi.",
    ],
    tags: ["UI/UX", "Prototyping", "Interaction"],
    projectsCount: "3.3K",
    badgeText: "Dizayn ishlari",
    featureText: "Estetik va foydali interfeyslar",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
  {
    title: "Freva bilan marketing strategiyangizni kuchaytiring",
    highlight: "va o‘zingizni taniting",
    description: [
      "Raqamli marketing xizmatlari endi bitta joyda.",
      "Kontent marketing, SMM, SEO va boshqalar.",
    ],
    tags: ["Marketing", "SMM", "SEO"],
    projectsCount: "5.6K",
    badgeText: "Marketing loyihalari",
    featureText: "Natijaga yo‘naltirilgan xizmat",
    img: "https://i.ibb.co/DgmhrJZT/laptopboy-removebg-preview.png",
  },
];
const variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let interval;
    if (searchTerm.trim() === "") {
      interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % sliderData.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [searchTerm]);

  const currentSlide = sliderData[index];

  return (
    <div className="relative w-full min-h-[450px] mt-10 md:min-h-[550px] flex items-center justify-center sm:px-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-10 w-full max-w-7xl"
        >
          {/* Left Side */}
          <div className="flex-1 space-y-4">
            <h1 className="text-lg sm:text-2xl md:text-[40px] font-[900] font-sans leading-snug text-white break-words whitespace-normal">
              {currentSlide.title}{" "}
              <span
                style={{
                  background:
                    "linear-gradient(93.59deg, #1ECC52 36.79%, #29CA59 77.82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentSlide.highlight}
              </span>
            </h1>

            <div className="text-gray-400 space-y-1 break-words whitespace-normal">
              {currentSlide.description.map((line, i) => (
                <p
                  key={i}
                  className="text-xs sm:text-sm md:text-base break-words whitespace-normal"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1ECC52] to-[#29CA59]">
              {currentSlide.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <div className="flex items-center bg-white shadow-md rounded-full px-2 py-1 w-full max-w-md mt-3 text-xs sm:text-sm">
              <FiSearch className="text-[#02E03D] text-lg sm:text-xl ml-2" />
              <input
                type="text"
                placeholder="Qidirish"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-2 py-1 text-black placeholder-gray-400 outline-none text-xs sm:text-sm bg-transparent"
              />
              <button className="bg-gradient-to-r from-[#1ECC52] to-[#29CA59] text-white text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:-translate-y-1 transition">
                Qidirish
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex-1 flex justify-center items-center min-h-[250px] sm:min-h-[300px] hidden sm:flex">
            <button className="absolute top-0 right-5 bg-white/60 backdrop-blur-md shadow-md rounded-xl p-3 flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
              <div>
                <div className="text-base md:text-lg font-semibold flex items-center gap-2">
                  <FaFolder className="text-xl text-[#3B82F6]" />
                  {currentSlide.projectsCount}
                </div>
                <div className="text-sm text-white">
                  {currentSlide.badgeText}
                </div>
              </div>
            </button>

            <img
              src={currentSlide.img}
              alt="Slider image"
              width={400}
              height={400}
              className="rounded-lg z-10 w-full max-w-[300px] sm:max-w-[400px] object-contain"
            />

            <div className="absolute bottom-8 left-4 sm:left-10 w-[140px] h-[80px] bg-white/60 text-center z-10 shadow-md backdrop-blur-md rounded-xl p-3 flex flex-col items-center justify-center gap-1 hover:scale-105 hover:shadow-lg transition">
              <div className="text-xl text-orange-400">⚡</div>
              <div className="text-sm text-white">
                {currentSlide.featureText}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderData.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index
                ? "bg-gradient-to-r from-[#1ECC52] to-[#29CA59]"
                : "bg-[#e3f7e8]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
