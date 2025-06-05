"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyBackground from "./LazyBackground";
import Link from "next/link";

function BackendContent() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    axios
      .get("https://177add8ca22d8b9a.mokky.dev/card")
      .then((res) => {
        // faqat category === "mobile" bo'lganlarni filtrlaymiz
        const mobileData = res.data.filter(
          (item) => item.category === "backend"
        );
        setData(mobileData);
      })
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
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {visibleData.map((card, index) => (
          <motion.div
            key={index}
            className="h-[260px] w-full cursor-pointer rounded-lg overflow-hidden shadow-lg relative group"
            variants={cardVariants}
          >
            <Link href={`/details/${card.id}`}>
              <LazyBackground
                src={card.img}
                className="h-full w-full bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundPosition: "left top" }}
              />
            </Link>

            <div
              style={{
                borderRadius: "200px 0 0 0",
                padding: "40px 0px 0px 70px",
              }}
              className="absolute bottom-0 right-0 bg-black/60 backdrop-blur-md h-[140px] w-[270px] text-left"
            >
              <h2 className="font-bold text-xl text-orange-400">
                {card.title}
              </h2>
              <p className="text-sm text-gray-300 mt-1 mb-1">Web UI</p>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {showMoreAvailable && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="px-6 py-3 bg-gradient-to-r from-[#0c8932] to-[#29CA59] text-white rounded-md hover:bg-orange-600 transition"
          >
            Ko'proq ko'rsatish
          </button>
        </div>
      )}
    </div>
  );
}

export default BackendContent;
