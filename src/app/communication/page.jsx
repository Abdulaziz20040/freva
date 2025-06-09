"use client";
import React, { useState } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Communication() {
  const [phone, setPhone] = useState("");

  const botToken = "7743808180:AAE51pwYyhVuT3XHUlmsheEWZ0XqhK06sSA";
  const chatId = "5941617229";

  const handleSend = async () => {
    if (!phone) {
      toast.error("Iltimos, telefon raqamingizni kiriting.");
      return;
    }

    const text = `Yangi ariza:%0A📞 Telefon raqami: ${phone}`;

    try {
      await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`
      );
      toast.success("Arizangiz muvaffaqiyatli yuborildi ✅");
      setPhone("");
    } catch (error) {
      toast.error("Xatolik yuz berdi, qayta urinib ko‘ring.");
      console.error(error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-transparent border border-[#3a86ff] p-6 md:p-10  text-white shadow-xl mt-20">
      {/* 🔔 Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Qolgan kontent */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8 h-full">
        <div className="flex flex-col justify-center gap-3 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Bizga aloqaga chiqing va bepul konsultatsiya oling!
          </h2>
          <p className="text-sm md:text-base max-w-md">
            Ma'lumotlaringizni qoldiring va menejerlarimiz sizga aloqaga
            chiqishadi
          </p>
          <div className="flex items-center bg-white rounded-full p-1 mt-6 max-w-md shadow-md w-full">
            <input
              type="text"
              placeholder="Telefon raqamingiz"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ fontFamily: "'Poppins', sans-serif", color: "black" }}
              className="flex-1 rounded-full px-4 py-2 bg-white placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="rounded-full px-6 py-3 cursor-pointer bg-[#3a86ff] text-white hover:bg-[#3a85ffd3] font-semibold flex items-center gap-2 transition"
            >
              Ariza qoldirish <span>📞</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end md:w-1/2 text-right justify-end">
          <img
            src="https://i.ibb.co/JWHNV4Gq/Chat-GPT-Image-10-2025-01-53-04-removebg-preview.png"
            alt="freva Group"
            className="w-42"
          />
          <div className="flex gap-6 text-3xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://t.me/freva_manager"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTelegram />
            </a>
          </div>
          <div className="text-white font-semibold text-lg mt-3">
            +998 77 014 50 47
          </div>
        </div>
      </div>
    </div>
  );
}
