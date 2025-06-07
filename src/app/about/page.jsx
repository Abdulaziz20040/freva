import Link from "next/link";
import React from "react";
import { FaTelegramPlane, FaEye } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="w-full min-h-screen py-16 px-4 md:px-24 mt-15 text-white"
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0c1a3f] to-[#4e80ff] rounded-3xl p-6 md:p-10 mb-20 shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug  text-left">
              Sizni Ilhomlantiruvchi <br /> Professional Dizayn Agentligi
            </h1>
            <p className="mt-4 text-base sm:text-lg opacity-90 text-center md:text-left">
              <span className="text-white/90 font-medium">
                "Freva.uz" — Frontend, mobil va dizayn yo‘nalishidagi
                loyihalarni sifatlilik bilan bajaruvchi zamonaviy agentlik.
              </span>
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="https://t.me/freva_manager">
                <button className="px-6 py-3 text-[16px] font-semibold bg-gradient-to-r from-[#0c8932] to-[#29CA59] cursor-pointer rounded-full shadow-md hover:bg-blue-700 hover:text-white transition-all flex items-center gap-2">
                  <FaTelegramPlane /> Biz bilan bog‘lanish
                </button>
              </a>
              <Link href={"/"}>
                <button className="px-6 py-3 text-[16px] font-semibold bg-gradient-to-r from-[#0c8932] to-[#29CA59] cursor-pointer rounded-full shadow-md hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                  <FaEye /> Loyihalarni ko‘rish
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block flex-1">
            <img
              src="https://i.ibb.co/chVWRyn3/Cover-17.png"
              alt="Dizayn rasmi"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-20">
        {[
          { number: "500+", label: "Yakunlangan loyihalar" },
          { number: "2023", label: "Yildan beri faoliyatda" },
          { number: "100%", label: "Mijozlarimiz roziligi" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-4xl font-bold text-white">{item.number}</h3>
            <p className="mt-3 text-xl font-medium text-white/90">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Xizmatlar */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Xizmatlarimiz</h2>
        <p className="text-white/90 text-base sm:text-lg">
          Biz mijozlarimiz uchun quyidagi yo‘nalishlarda xizmatlar taklif
          qilamiz
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: "Zamonaviy Vebsaytlar",
            desc: "Biz yaratgan frontend saytlar — nafaqat chiroyli, balki foydalanuvchi uchun qulay, tezkor va mobilga moslashtirilgan. Brendingizni onlaynda porlating.",
          },
          {
            title: "Mobil Interfeys Dizayni",
            desc: "Figma hamda React Native asosida yaratilgan UI dizaynlar — ilovangizni professional ko‘rinishda, zamonaviy texnologiyalar bilan taqdim etamiz.",
          },
          {
            title: "Buyurtmalarni Tez Qabul Qilamiz",
            desc: "Telegram orqali birgina xabaringiz — biz uchun ish boshlash signali! Har bir buyurtmani shaxsiy yondashuv bilan, siz kutgan darajada yuqori sifatda bajaramiz.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-6 rounded-2xl shadow-lg border border-blue-400 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-lg text-white/90 leading-7">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Jamoamiz Haqida */}
      <div className="mt-20 bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-start">
          Jamoamiz Haqida
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          <div className="w-full lg:w-2/3">
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 text-start">
              <span className="font-semibold text-white">Freva.uz</span> — bu
              tajribali frontend dasturchilar, dizaynerlar va mobil UI
              mutaxassislaridan iborat ijodiy agentlik. Biz har bir loyihani
              chin dildan, mas’uliyat bilan bajarishga yondashamiz.
            </p>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed text-start">
              Bizning asosiy qadriyatlarimiz —{" "}
              <span className="text-white font-medium">sifat</span>,{" "}
              <span className="text-white font-medium">tezkorlik</span> va{" "}
              <span className="text-white font-medium">
                innovatsion yondashuv
              </span>
              . Har bir mijozning ehtiyojini chuqur tahlil qilamiz va ularga
              individual yechimlar taklif etamiz. Jamoamiz o‘z sohasining
              mutaxassislari bo‘lib, zamonaviy texnologiyalar va kreativ dizayn
              orqali raqobatchilardan ajralib turadi.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src="https://i.ibb.co/jZ9nS0yr/photo-2025-06-05-14-18-51-removebg-preview.png"
              alt="Freva.uz Logo"
              className="w-44 sm:w-52 md:w-60 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
