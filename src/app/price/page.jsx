"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Barchasi", "Frontend", "Backend", "Mobile"];
const pricingData = [
  {
    title: "Java Backend Dasturlash",
    category: "Backend",
    price: "250,000 so‘m dan boshlab",
    features: [
      "Spring Boot & REST API",
      "Ma’lumotlar bazasi integratsiyasi",
      "Admin panel va autentifikatsiya",
    ],
  },
  {
    title: "Mobil Ilovalar (iOS/Android)",
    category: "Mobile",
    price: "300,000 so‘m dan boshlab",
    features: [
      "React Native yordamida",
      "Platformalararo ilovalar",
      "Zakaz bo‘yicha to‘liq yechim",
    ],
  },
  {
    title: "Figma Dizayn Maketlar",
    category: "Frontend",
    price: "120,000 so‘m dan boshlab",
    features: [
      "Prototiplash va dizayn loyihalash",
      "Mobil va web versiyalar",
      "Ishga tayyor Figma fayllar",
    ],
  },
  {
    title: "Java Backend Dasturlash",
    category: "Backend",
    price: "250,000 so‘m dan boshlab",
    features: [
      "Spring Boot & REST API",
      "Ma’lumotlar bazasi integratsiyasi",
      "Admin panel va autentifikatsiya",
    ],
  },
  {
    title: "Mobil Ilovalar (iOS/Android)",
    category: "Mobile",
    price: "300,000 so‘m dan boshlab",
    features: [
      "React Native yordamida",
      "Platformalararo ilovalar",
      "Zakaz bo‘yicha to‘liq yechim",
    ],
  },
  {
    title: "Figma Dizayn Maketlar",
    category: "Frontend",
    price: "120,000 so‘m dan boshlab",
    features: [
      "Prototiplash va dizayn loyihalash",
      "Mobil va web versiyalar",
      "Ishga tayyor Figma fayllar",
    ],
  },
];

const Price = () => {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const filteredData =
    selectedCategory === "Barchasi"
      ? pricingData
      : pricingData.filter((item) => item.category === selectedCategory);

  return (
    <div
      className="containes text-white pt-20"
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
      }}
    >
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row items-start justify-between px-4 gap-6 mb-5">
        <div className="text-left max-w-xl">
          <h1 className="text-[32px] md:text-[38px] text-[rgba(2,224,61,1)] drop-shadow-lg font-bold">
            Siz uchun yaxshi narxlarda eng sifatli xizmatlar!
          </h1>
          <p className="mt-4 text-[16px] text-gray-400">
            Biz bilan ishlash orqali siz nafaqat loyiha yaratib berasiz — balki
            natijaga olib boruvchi real yechimlarga ega bo‘lasiz. Frontend,
            Backend, Mobil ilovalar, Figma dizayn — barcha yo‘nalishlarda
            sifatli va ishonchli xizmatlar sizni kutmoqda. Yo‘nalishni tanlang
            va birinchi qadamingizni hoziroq tashlang!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-end gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 cursor-pointer rounded-full border ${
                selectedCategory === cat
                  ? "bg-[rgba(2,224,61,1)] text-black font-semibold"
                  : "border-[rgba(2,224,61,1)] text-white"
              } transition duration-200`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards - Scrollable container */}
      <div className="overflow-y-auto h-[413px] px-4 no-scrollbar">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="p-4 bg-white/10 border cursor-pointer border-[rgba(2,224,61,0.4)] rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-bold text-[rgba(2,224,61,1)] mb-2">
                {item.title}
              </h3>
              <p className="text-xl font-semibold mb-4">{item.price}</p>
              <ul className="space-y-2 text-sm text-gray-300">
                {item.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
