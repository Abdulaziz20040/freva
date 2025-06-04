import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
      }}
      className="w-full min-h-screen py-10 px-4 md:px-20 mt-20 text-white"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#dbeafe] to-[#eff6ff] rounded-3xl p-10 mb-20 overflow-hidden shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 max-w-[600px]">
          Sizni Ilhomlantiruvchi <br /> Professional Dizayn Agentligi
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-[480px]">
          "Freva.uz" — Frontend, mobil va dizayn yo'nalishidagi loyihalarni
          sifatlilik bilan bajaruvchi zamonaviy agentlik.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700">
            Biz bilan bog'lanish
          </button>
          <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-gray-100">
            Loyihalarni ko‘rish
          </button>
        </div>
        <img
          src="https://i.ibb.co/chVWRyn3/Cover-17.png"
          alt="Plane"
          className="absolute right-4 top-4 w-[300px] md:w-[400px]"
        />
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20 text-center">
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold">45+</h3>
          <p className="mt-2 text-lg">Yakunlangan loyihalar</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold">2023</h3>
          <p className="mt-2 text-lg">Yildan beri faoliyatda</p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md">
          <h3 className="text-3xl font-bold">100%</h3>
          <p className="mt-2 text-lg">Mijozlarimiz roziligi</p>
        </div>
      </div>

      {/* Xizmatlar */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Xizmatlarimiz
        </h2>
        <p className="text-gray-300 text-lg">
          Biz mijozlarimiz uchun quyidagi yo'nalishlarda xizmatlar taklif
          qilamiz
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Frontend Saytlar
          </h3>
          <p>
            Zamonaviy dizayn, foydalanuvchi uchun qulay interfeys va mobil
            moslashuv.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Mobil Ilovalar UI
          </h3>
          <p>
            Figma va React Native asosidagi interfeyslar, mijoz ehtiyojiga mos.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Zakaz Qabul Qilish
          </h3>
          <p>
            Telegram orqali buyurtma yuboring va biz siz bilan aloqaga chiqamiz.
          </p>
        </div>
      </div>

      {/* Jamoa haqida */}
      <div className="mt-20 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl p-10 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Jamoamiz Haqida</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          Freva.uz — Frontend dasturchilar, dizaynerlar va mobil UI
          mutaxassislaridan iborat agentlik. Har bir loyiha biz uchun alohida
          ahamiyatga ega. Mijoz ehtiyojini chuqur tushunib, eng yaxshi
          yechimlarni taklif etamiz. Ishlarimizda sifat, tezlik va yangiliklar
          ustuvor hisoblanadi.
        </p>
      </div>
    </section>
  );
}
