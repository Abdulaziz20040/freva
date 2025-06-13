"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const categories = ["Barchasi", "frontend", "backend", "mobile", "figma"];

const Price = () => {
  const [pricingData, setPricingData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // API'dan malumot olish
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://177add8ca22d8b9a.mokky.dev/price"); // ← API endpoint
        const data = await res.json();
        setPricingData(data);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData =
    selectedCategory === "Barchasi"
      ? pricingData
      : pricingData.filter((item) => item.category === selectedCategory);

  return (
    <div className="containes text-white pt-25">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row items-start justify-between px-4 gap-6 mb-5">
        <div className="text-left max-w-xl">
          <h1 className="text-[32px] md:text-[38px] text-[#ffffff] drop-shadow-lg font-bold">
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
                  ? "bg-[#aa33ea] border-none font-semibold"
                  : "border-[#aa33ea] text-white"
              } transition duration-200`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className=" px-4  pb-5">
        <div className=" flex flex-col items-start gap-10">
          {filteredData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="p-4 h-[400px] w-[1200px] bg-white/10 hover:border-[#aa33ea] hover:border  cursor-pointer  rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-[#ffffff] mb-2">
                  {item.title}
                </h3>
                <p className="text-xl font-semibold mb-4 text-gray-300">
                  {item.price}
                </p>

                <ul className={`text-sm text-gray-300 space-y-2 `}>
                  {item.features?.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Price;
