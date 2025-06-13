"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyBackground from "../filter/LazyBackground";
import Link from "next/link";

function Cards() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    axios
      .get("https://177add8ca22d8b9a.mokky.dev/projectss")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const visibleData = data.slice(0, visibleCount);
  const showMoreAvailable = visibleCount < data.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 9);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {visibleData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative group rounded-[20px] overflow-hidden border border-white/10 shadow-xl backdrop-blur-[6px] transition-all duration-500 hover:scale-[1.03]"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
              borderRadius: "20px",
            }}
          >
            <Link href={`/details/${card.id}`}>
              <LazyBackground
                src={card.img}
                className="h-[260px] w-full bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundPosition: "center" }}
              />
            </Link>

            {/* Pastki yozuvlar joyi */}
            <div className="absolute bottom-0 w-full px-6 py-4 bg-gradient-to-t from-[#171a39]/90 to-transparent text-white z-10">
              <h2 className="text-xl font-bold text-purple-500 drop-shadow-sm">
                {card.title}
              </h2>
              <p className="text-sm text-gray-300 mt-1">{card.categories}</p>
            </div>

            {/* Gradient border effekt */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-[1px] rounded-[18px] border border-transparent bg-gradient-to-br from-purple-500/40 to-purple-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Glow effekt */}
            <div className="absolute -inset-1 bg-purple-500/20 rounded-[22px] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-700 pointer-events-none z-0" />
          </motion.div>
        ))}
      </motion.div>

      {showMoreAvailable && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Ko‘proq ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
}

export default Cards;
