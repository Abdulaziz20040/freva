import React from "react";
// import foodApp from "./imgs/foodApp.png";
import foodApp from "../imgs/foodApp.png";
import ecommerce from "../imgs/ecommerce.png";
import dashboard from "../imgs/dashboard.png";
import lawFirm from "../imgs/lawFirm.png";
import Image from "next/image";
import { FaRegCommentDots, FaRegHeart } from "react-icons/fa";

function Cards() {
  const cardArr = [
    {
      image: foodApp,
      title: "Mobile App UI Kit Food App",
      desc: "Ajoyib dizaynga ega zamonaviy Food App Foydalanuvchilarga tez va qulay ovqat buyurtma qilish imkonini beradi.",
    },
    {
      image: ecommerce,
      title: "E-Commerce Dashboard",
      desc: "Zamonaviy va foydalanuvchi uchun qulay e-commerce boshqaruv paneli dizayni.",
    },
    {
      image: dashboard,
      title: "Admin Dashboard UI Kit",
      desc: "Interaktiv boshqaruv paneli dizayni, foydalanuvchilarga qulay interfeys taklif etadi.",
    },
    {
      image: lawFirm,
      title: "Law Firm UI Kit",
      desc: "Yuridik firmalar uchun maxsus mo'ljallangan UI Kit.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-5 mb-36">
      {cardArr.map((card, index) => (
        <div key={index} className="bg-white p-3 rounded-3xl">
          <div className="">
            <Image
              src={card.image}
              alt={card.title}
              className="w-full mb-6"
              width={500}
              height={600}
            />
            <div className="">
              <h3 className="text-xl mb-2 text-[#F2994A] font-semibold">
                {card.title}
              </h3>
              <p className="text-sm font-normal text-[#B5B5B5]">{card.desc}</p>
            </div>
            <div className="flex justify-start gap-6 text-[24px] mt-5 mb-5">
              <button className="">
                <FaRegHeart />
              </button>
              <button>
                <FaRegCommentDots />
              </button>
            </div>
            <div className="p-1 text-center w-full">
              <button className="p-3 w-full rounded-[7px] text-white font-semibold text-[15px] bg-linear-to-t from-[#FFB777] to-[#F2994A]">
                Ko’rish
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
