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
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data.map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] lg:w-[22%] bg-transparent rounded-b-2xl overflow-hidden shadow-lg"
        >
          {/* Top Image Section */}
          <div className="w-full h-52 bg-pink-500">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Body Section */}
          <div className="bg-white rounded-b-2xl p-4">
            <p className="text-sm text-pink-600 font-semibold">Frontend</p>
            <p className="text-sm text-gray-600 mb-2">Web UI</p>
            <h2 className="font-bold text-orange-500 text-md mb-2">
              {card.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{card.desc}</p>

            <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
              <span className="flex items-center gap-1">
                <AiOutlineHeart /> {card.like}
              </span>
              <span className="flex items-center gap-1">
                <BsBookmark /> {card.comment}
              </span>
              <span className="flex items-center gap-1">
                <FiEye /> {card.eye}
              </span>
            </div>

            <button className="w-full bg-orange-200 text-orange-700 font-semibold py-2 rounded-md hover:bg-orange-300 transition">
              Ko‘rish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
