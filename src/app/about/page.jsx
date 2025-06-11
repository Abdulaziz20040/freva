import React from "react";
import { FaCalendarAlt, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="w-full px-4 md:px-10  text-white pt-30">
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Left: Jamoamiz Haqida */}
        <div className="w-full lg:w-1/2 bg-transparent border border-[#aa33ea] bg-opacity-10 backdrop-blur-md rounded-3xl p-10 shadow-lg text-left">
          <h2
            style={{
              fontWeight: "800",
            }}
            className="text-3xl  mb-5 tracking-tight"
          >
            Jamoamiz Haqida
          </h2>
          <p className=" text-[17.5px] leading-5.5 mb-4  text-gray-200">
            <strong className="text-[#aa33ea]">Freva</strong> — bu tajribali
            frontend dasturchilar, dizaynerlar va mobil UI mutaxassislaridan
            iborat ijodiy agentlik. Biz har bir loyihani chin dildan, mas’uliyat
            bilan bajarishga yondashamiz.
          </p>
          <p className="text-[17.5px] leading-5.5 mb-4  text-gray-300">
            Bizning asosiy qadriyatlarimiz —{" "}
            <strong
              style={{
                fontWeight: "bold",
              }}
              className="text-[#aa33ea]"
            >
              sifat
            </strong>
            ,{" "}
            <strong
              style={{
                fontWeight: "bold",
              }}
              className="text-[#aa33ea]"
            >
              tezkorlik
            </strong>{" "}
            va{" "}
            <strong
              style={{
                fontWeight: "bold",
              }}
              className="text-[#aa33ea]"
            >
              innovatsion yondashuv
            </strong>
            . Har bir mijozning ehtiyojini chuqur tahlil qilamiz va ularga
            individual yechimlar taklif etamiz.
          </p>
          <p className="text-[17.5px] leading-5.5 mb-6  text-gray-300">
            Jamoamiz o‘z sohasining mutaxassislari bo‘lib, zamonaviy
            texnologiyalar va kreativ dizayn orqali raqobatchilardan ajralib
            turadi.
          </p>
          <h3 className="text-[22px] leading-7 font-semibold mt-6 text-[#aa33ea]">
            Zamonaviy Texnologiyalar & Kreativ Dizayn Yondashuvi
          </h3>
        </div>

        {/* Right: Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Top Card */}
          <div className="bg-[#0A0B2A] hover:border hover:border-[#aa33ea] duration-600  cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <FaCheckCircle size={28} className="text-[#aa33ea]" />
              <h3 className="text-2xl font-semibold">140+</h3>
            </div>
            <p className="text-lg font-medium mb-1">Yakunlangan loyihalar</p>
            <p className="text-gray-300 text-sm">
              Muvaffaqiyatli loyihalarimiz soni ko‘p va ular bizning ishonchimiz
              belgisi
            </p>
          </div>

          {/* Bottom Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#0A0B2A] hover:border hover:border-[#aa33ea] duration-600  cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform hover:scale-105">
              <div className="flex items-center gap-3 mb-3">
                <FaCalendarAlt size={28} className="text-[#aa33ea]" />
                <h3 className="text-2xl font-semibold">2024</h3>
              </div>
              <p className="text-lg font-medium mb-1">Yildan beri faoliyatda</p>
              <p className="text-gray-300 text-sm">
                2024-yildan buyon doimiy ravishda ishonchli xizmat bilan
                mijozlarimizning ishonchini qozonmoqdamiz.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A0B2A] hover:border hover:border-[#aa33ea]  cursor-pointer p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-transform hover:scale-105 duration-600">
              <div className="flex items-center gap-3 mb-3">
                <FaChartLine size={28} className="text-[#aa33ea]" />
                <h3 className="text-2xl font-semibold">100%</h3>
              </div>
              <p className="text-lg font-medium mb-1">O‘zgarish va natijalar</p>
              <p className="text-gray-300 text-sm">
                Innovatsion yechimlar orqali raqobatdoshligingizni oshiramiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
