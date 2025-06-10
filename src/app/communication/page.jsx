"use client";
import React, { useState } from "react";
import {
  FaTelegramPlane,
  FaUserShield,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [phone, setPhone] = useState("");

  const botToken = "7743808180:AAE51pwYyhVuT3XHUlmsheEWZ0XqhK06sSA";
  const chatId = "5941617229";

  const handleSend = async () => {
    if (!phone) {
      toast.error("Iltimos, telefon raqamingizni kiriting.");
      return;
    }
    const text =
      `\uD83D\uDD1A *Yangi ariza*%0A` +
      `\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014%0A` +
      `\uD83D\uDCDE *Telefon raqami:* +${phone}%0A` +
      `\uD83D\uDD52 *Yuborilgan vaqt:* ${new Date().toLocaleString(
        "uz-UZ"
      )}%0A` +
      `\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014`;

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=Markdown`
      );

      toast.success("Arizangiz muvaffaqiyatli yuborildi");
      setPhone("");
    } catch (error) {
      toast.error("Xatolik yuz berdi, qayta urinib ko‘ring.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #581C87 0%, #312E81 100%)",
      }}
      className="to-indigo-900 text-white mt-15"
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="containes px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Chap qism */}
        <div className="flex-1 max-w-2xl space-y-6">
          <h1
            style={{
              fontWeight: "700",
            }}
            className="text-3xl sm:text-4xl  leading-tight"
          >
            Biznesingizni yangi bosqichga olib chiqishga tayyormisiz? Raqamli
            yechimlar bilan raqobatchilardan ilgarilab boring!
          </h1>
          <p className="text-base sm:text-lg text-gray-300">
            Biz bilan bog'laning va biznesingiz uchun eng optimal IT yechimlarni
            birgalikda yarataylik. Bepul konsultatsiya va loyiha bahosi.
          </p>

          <div className="flex items-center bg-white rounded-full p-1 mt-6 max-w-md w-full shadow-md">
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                const onlyNumbers = e.target.value.replace(/[^\d+]/g, "");
                setPhone(onlyNumbers);
              }}
              placeholder="+998901234567"
              inputMode="tel"
              pattern="^\\+?\\d*$"
              style={{ fontFamily: "'Poppins', sans-serif", color: "black" }}
              className="flex-1 rounded-full px-4 py-2 bg-white placeholder-gray-500 focus:outline-none"
            />

            <button
              onClick={handleSend}
              style={{
                color: "#aa33ea",
              }}
              className="rounded-full px-6 py-3 bg-transparent border border-[#aa33ea] cursor-pointer font-semibold flex items-center gap-2 transition"
            >
              Ariza qoldirish <span>\uD83D\uDCDE</span>
            </button>
          </div>
        </div>

        {/* O'ng qism */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(4px)",
          }}
          className="flex-1 w-full max-w-md bg-opacity-5 backdrop-blur-md rounded-2xl p-8 space-y-6 border border-white border-opacity-10"
        >
          <div className="flex items-start gap-4 hover:shadow-indigo-500/50 transition-transform hover:scale-105 duration-500 cursor-pointer">
            <div className="text-2xl text-white bg-[#ffffff52] p-3 rounded-full">
              <FaUserShield />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Yuqori sifat kafolati</h3>
              <p className="text-gray-300 text-sm">
                1+ yillik tajriba, 140+ loyihalar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 hover:shadow-indigo-500/50 transition-transform hover:scale-105 duration-500 cursor-pointer">
            <div className="text-2xl text-white bg-[#ffffff52] p-3 rounded-full">
              <FaUsers />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Jamoamiz</h3>
              <p className="text-gray-300 text-sm">12+ mutaxassislar</p>
            </div>
          </div>

          <div className="flex items-start gap-4 hover:shadow-indigo-500/50 transition-transform hover:scale-105 duration-500 cursor-pointer">
            <div className="text-2xl text-white bg-[#ffffff52] p-3 rounded-full">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Sifat kafolati</h3>
              <p className="text-gray-300 text-sm">100% mijoz mamnuniyati</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
