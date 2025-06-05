"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Communication() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    // faqat browserda ishlaydi
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

  return (
    <div
      ref={vantaRef}
      className="relative overflow-hidden rounded-3xl p-6 md:p-10 text-white shadow-xl mt-20"
      style={{ width: "100%", height: "40vh" }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 h-full">
        <div className="flex flex-col justify-center gap-2 w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-[900]">
            Bizga aloqaga chiqing va bepul konsultatsiya oling!
          </h2>
          <p className="text-sm md:text-base">
            Ma'lumotlaringizni qoldiring va menejerlarimiz sizga aloqaga
            chiqishadi
          </p>
          <div className="flex items-center bg-white  rounded-full p-1 mt-4 w-full max-w-md shadow-md">
            <input
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: "black",
              }}
              type="text"
              placeholder="Telefon raqamingiz"
              className="flex-1 rounded-full px-4 py-2 bg-white  placeholder:text-gray-500 focus:outline-none"
            />

            <button className="rounded-full px-6 py-[14px] cursor-pointer bg-[#3b4cd5] text-white hover:bg-[#4c5ee9] font-semibold flex items-center gap-2">
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
          <div className="text-white font-semibold text-lg">+998 770145047</div>
        </div>
      </div>
    </div>
  );
}
