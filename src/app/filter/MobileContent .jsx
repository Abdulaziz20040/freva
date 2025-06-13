"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LazyBackground from "./LazyBackground";
import Link from "next/link";

function All() {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    axios
      .get("https://177add8ca22d8b9a.mokky.dev/projectss")
      .then((res) => {
        // faqat category === "mobile" bo'lganlarni filtrlaymiz
        const mobileData = res.data.filter((item) =>
          item.categories?.some((cat) => cat.toLowerCase().includes("mobile"))
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {visibleData.map((card, index) => (
          <>
            <Link href={`/details/${card.id}`} passHref>
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="relative group rounded-[10px] cursor-pointer overflow-hidden bg-white/10 border border-white/20 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <LazyBackground
                  src={card.img}
                  className="h-[260px] w-full cursor-pointer bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundPosition: "start" }}
                />

                <div className="absolute bottom-0 w-full px-6 py-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h2
                    className="text-xl text-[#ffffff]"
                    style={{ fontWeight: "bold" }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {card.categories}
                  </p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>
            </Link>
          </>
        ))}
      </motion.div>

      {showMoreAvailable && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className=" cursor-pointer text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow hover:shadow-lg border border-[#9333EA] bg-transparent hover:text-[#9333EA] transition-all"
          >
            Ko‘proq ko‘rsatish
          </button>
        </div>
      )}
    </div>
  );
}

export default All;
