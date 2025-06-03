import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { FiEye } from "react-icons/fi";

const cardData = [
  {
    id: 1,
    title: "Mobile App UI Kit Food App",
    description:
      "Ajayib dizaynga ega zamonaviy Food App foydalanuvchilarga tez va qulay ovqat buyurtma qilish imkonini beradi.",
    image:
      "https://i.pinimg.com/736x/a5/56/6e/a5566ea7fda762a96be8c6bec88ed4a3.jpg",
    likes: 13,
    bookmarks: 34,
  },
  {
    id: 2,
    title: "Mobile App UI Kit Food App",
    description:
      "Ajayib dizaynga ega zamonaviy Food App foydalanuvchilarga tez va qulay ovqat buyurtma qilish imkonini beradi.",
    image:
      "https://i.pinimg.com/736x/a5/56/6e/a5566ea7fda762a96be8c6bec88ed4a3.jpg",
    likes: 13,
    bookmarks: 34,
  },
  {
    id: 3,
    title: "Mobile App UI Kit Food App",
    description:
      "Ajayib dizaynga ega zamonaviy Food App foydalanuvchilarga tez va qulay ovqat buyurtma qilish imkonini beradi.",
    image:
      "https://i.pinimg.com/736x/a5/56/6e/a5566ea7fda762a96be8c6bec88ed4a3.jpg",
    likes: 13,
    bookmarks: 34,
  },
  {
    id: 4,
    title: "Mobile App UI Kit Food App",
    description:
      "Ajayib dizaynga ega zamonaviy Food App foydalanuvchilarga tez va qulay ovqat buyurtma qilish imkonini beradi.",
    image:
      "https://i.pinimg.com/736x/a5/56/6e/a5566ea7fda762a96be8c6bec88ed4a3.jpg",
    likes: 13,
    bookmarks: 34,
  },
];

function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-[45%] lg:w-[22%] bg-transparent rounded-b-2xl overflow-hidden shadow-lg"
        >
          {/* Top Image Section */}
          <div className="w-full h-52 bg-pink-500">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Body Section */}
          <div className="bg-white rounded-b-2xl p-4">
            <p className="text-sm text-pink-600 font-semibold">Food App</p>
            <p className="text-sm text-gray-600 mb-2">Mobile Design</p>
            <h2 className="font-bold text-orange-500 text-md mb-2">
              {card.title}
            </h2>
            <p className="text-gray-500 text-sm mb-3">{card.description}</p>

            <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
              <span className="flex items-center gap-1">
                <AiOutlineHeart /> {card.likes}
              </span>
              <span className="flex items-center gap-1">
                <BsBookmark /> {card.bookmarks}
              </span>
              <span className="flex items-center gap-1">
                <FiEye /> 0
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
