"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://177add8ca22d8b9a.mokky.dev/card")
      .then((response) => {
        const frontendCards = response.data.filter(
          (item) => item.categories === "frontend"
        );
        setData(frontendCards);
      })
      .catch((error) => {
        console.error("Error fetching card data:", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((card, index) => (
        <div
          key={index}
          className="w-full bg-pink-500 sm:w-[45%] lg:w-[22%] rounded-b-[8px] rounded-t-[5px]  overflow-hidden shadow-lg"
        >
          {/* Top Image Section */}
          <div className="w-full h-52 ">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Body Section */}
          <div className="bg-white rounded-b-2xl h-full p-4 rounded-l-[50px]">
            <div className="p-2">
              <h2 className="font-bold text-[22px] text-orange-500 text-md ">
                {card.title}
              </h2>
              <p className="text-sm text-gray-600 mt-3 mb-2">Web UI</p>

              <p className="text-gray-500 text-sm mb-3">{card.desc}</p>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
              <span className="flex items-center gap-1 cursor-pointer">
                <AiOutlineHeart /> {card.like}
              </span>
              <span className="flex items-center gap-1 cursor-pointer">
                <BsBookmark /> {card.comment}
              </span>
              <span className="flex items-center gap-1 cursor-pointer">
                <FiEye /> {card.eye}
              </span>
            </div>

            <button className="w-full cursor-pointer bg-orange-200 text-orange-700 font-semibold py-2 rounded-md hover:bg-orange-300 transition">
              Ko‘rish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
