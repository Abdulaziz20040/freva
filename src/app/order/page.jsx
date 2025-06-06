"use client";
import React, { useEffect, useState } from "react";
import OrderPage from "./Order";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Link from "next/link";

function Page() {
  const motivatsionSozlar = [
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
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === motivatsionSozlar.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = motivatsionSozlar[currentIndex];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Chap yarim - Slider */}
      <div
        style={{
          borderRadius: "0 110px 110px 0",
          background:
            "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
        }}
        className="w-full md:w-1/2 p-6 md:p-12 relative flex items-center justify-start shadow-lg shadow-gray-400/20"
      >
        {/* Orqaga qaytish icon */}
        <Link href="/">
          <button className="absolute cursor-pointer top-6 left-6 text-[#ffffff] text-[25px] font-bold transition-all duration-500 hover:text-[#02E03D] hover:-translate-x-2 z-10">
            <AiOutlineDoubleLeft />
          </button>
        </Link>

        <div className="w-full relative h-[300px] md:h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute max-w-md text-left top-0 left-8 md:left-12"
            >
              <h2 className="text-2xl md:text-3xl font-[700] font-sans text-white mb-4 leading-snug">
                {currentSlide.title}{" "}
                <span className="text-[#02E03D]">{currentSlide.highlight}</span>
              </h2>
              <div className="mb-3">
                {currentSlide.description.map((desc, i) => (
                  <p
                    key={i}
                    className="text-gray-400 font-[500] text-sm md:text-base"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              <p className="mt-4 text-xs md:text-sm text-[#02E03D]">
                {currentSlide.projectsCount}+ {currentSlide.badgeText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* O'ng yarim - OrderPage */}
      <div className="w-full md:w-[55%] min-h-[400px] md:min-h-full">
        <OrderPage />
      </div>
    </div>
  );
}

export default Page;
