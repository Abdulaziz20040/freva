"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import * as THREE from "three";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Communication() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [phone, setPhone] = useState("");

  const botToken = "7743808180:AAE51pwYyhVuT3XHUlmsheEWZ0XqhK06sSA";
  const chatId = "5941617229";

  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      import("vanta/dist/vanta.clouds.min").then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x1488cc,
          cloudColor: 0x6dd5fa,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

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
    <div
      ref={vantaRef}
      className="relative overflow-hidden rounded-3xl p-6 md:p-10 text-white shadow-xl mt-20"
      style={{ width: "100%", height: "40vh" }}
    >
      {/* 🔔 Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Qolgan kontent */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 h-full">
        <div className="flex flex-col justify-center gap-2 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-[900]">
            Bizga aloqaga chiqing va bepul konsultatsiya oling!
          </h2>
          <p className="text-sm md:text-base">
            Ma'lumotlaringizni qoldiring va menejerlarimiz sizga aloqaga
            chiqishadi
          </p>
          <div className="flex items-center bg-white rounded-full p-1 mt-4 w-full max-w-md shadow-md">
            <input
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "black",
              }}
              type="text"
              placeholder="Telefon raqamingiz"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 rounded-full px-4 py-2 bg-white placeholder:text-gray-500 focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="rounded-full px-6 py-[14px] cursor-pointer bg-[#3b4cd5] text-white hover:bg-[#4c5ee9] font-semibold flex items-center gap-2"
            >
              Ariza qoldirish <span>📞</span>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end md:w-1/2 text-right justify-end">
          <img
            src="https://i.ibb.co/jZ9nS0yr/photo-2025-06-05-14-18-51-removebg-preview.png"
            alt="Mazmoon Group"
            className="w-32 mb-2"
          />
          <div className="flex gap-4 text-3xl">
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
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTelegram />
            </a>
          </div>
          <div className="text-white font-semibold text-lg mt-2">
            +998 770145047
          </div>
        </div>
      </div>
    </div>
  );
}
