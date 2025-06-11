"use client";
import React, { useEffect, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "../globals.css";
import Link from "next/link";

const sliderData = [
  {
    title: "Freva – Tajribali jamoa bilan loyihalaringizni tez va sifatli",
    highlight: "yakunlang",
    description: [
      "Bugun zakaz bering – ertaga tayyor bo‘lsin!",
      "Freva jamoasi har kuni yangi loyihalar uchun tayyor.",
    ],
    tags: ["Web Dizayn", "UI/UX Dizayner", "Frontend"],
    projectsCount: "60+",
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
    ],
    tags: ["Backend", "Mobil Ilovalar", "CRM"],
    projectsCount: "75+",
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
    projectsCount: "90+",
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
    projectsCount: "30+",
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
    projectsCount: "130+",
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
    projectsCount: "16+",
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sliderData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = sliderData[index];

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" containes relative  w-full pt-25 min-h-[450px] md:min-h-[550px] flex items-center justify-center sm:px-6 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 sm:gap-10 w-full max-w-7xl"
        >
          {/* Chap tomon */}
          <div className="flex-1 space-y-4">
            <h1
              style={{
                fontWeight: "700",
              }}
              className="text-lg sm:text-2xl md:text-[40px] leading-snug text-white font-sans break-words whitespace-normal"
            >
              {currentSlide.title}{" "}
              <span
                style={{
                  background:
                    "linear-gradient(93.59deg, #9333EA 36.79%, #9333EA 77.82%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentSlide.highlight}
              </span>
            </h1>

            <div className="text-gray-200 space-y-1">
              {currentSlide.description.map((line, i) => (
                <p key={i} className="text-sm leading-2.5">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#9333EA]">
              {currentSlide.tags.map((tag, i) => (
                <span key={i} className="cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttonlar */}
            <div className="flex gap-4 pt-4 flex-wrap">
              <a href="https://t.me/freva_manager">
                <button className="bg-gradient-to-r from-[#9333EA] to-[#9333EA] text-white font-semibold px-5 py-2 rounded-[8px] cursor-pointer hover:-translate-y-[1px] transition text-sm sm:text-base">
                  Bepul konsultatsiya olish
                </button>
              </a>
              <Link href="/filter">
                <button className="bg-transparent text-[#9333EA] font-semibold px-5 py-2 rounded-[8px] cursor-pointer hover:-translate-y-[1px] transition border border-[#9333EA] text-sm sm:text-base">
                  Loyihalarni ko‘rish
                </button>
              </Link>
            </div>

            {/* Pastki chiziq */}
            <div className="w-full h-[1px] bg-[#9333EA] my-6"></div>

            {/* Statistikalar bloki */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 text-white text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-[700] text-[#9333EA]">
                  1+
                </p>
                <p className="text-sm sm:text-base">Yillik tajriba</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-[700] text-[#9333EA]">
                  140+
                </p>
                <p className="text-sm sm:text-base">Muvaffaqiyatli loyihalar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-[700] text-[#9333EA]">
                  12+
                </p>
                <p className="text-sm sm:text-base">
                  Professional mutaxassislar
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-[700] text-[#9333EA]">
                  95%
                </p>
                <p className="text-sm sm:text-base">Mijozlar mamnuniyati</p>
              </div>
            </div>
          </div>

          {/* O‘ng tomon */}
          <div className="relative flex-1 flex  justify-center items-center min-h-[300px] hidden sm:flex">
            <button className="absolute top-0 right-5 bg-white/60 backdrop-blur-md shadow-md rounded-xl p-3 flex items-center gap-2 hover:scale-105 hover:shadow-lg transition">
              <div className="text-base md:text-lg font-semibold flex items-center gap-2">
                <FaFolder className="text-xl text-[#9333EA]" />
                {currentSlide.projectsCount}
              </div>
              <div className="text-sm text-white">{currentSlide.badgeText}</div>
            </button>

            <img
              src={currentSlide.img}
              alt="Slider image"
              width={400}
              height={400}
              className="rounded-lg z-10 w-full max-w-[300px] sm:max-w-[400px] object-contain"
            />

            <div className="absolute bottom-8 left-4 sm:left-10 w-[160px] bg-white/60 text-center z-10 shadow-md backdrop-blur-md rounded-xl p-3 flex flex-col items-center justify-center gap-1 hover:scale-105 hover:shadow-lg transition">
              <div className="text-xl text-purple-600">⚡</div>
              <div className="text-sm text-white">
                {currentSlide.featureText}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Nuqtalar */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex mt-10 gap-2">
        {sliderData.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
              i === index ? "bg-[#9333EA]" : "bg-[#f3f5f9]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
