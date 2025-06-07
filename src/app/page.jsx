"use client";

import React, { useState } from "react";
import Navbar from "./navbar/page";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Group from "./group/page";
import Communication from "./communication/page";
import Footer from "./footer/page";

function Page() {
  const [showMaintenance, setShowMaintenance] = useState(true);

  const handleContinue = () => {
    setShowMaintenance(false);
  };

  const handleExit = () => {
    window.open("", "_self");
    window.close();
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
      }}
    >
      {showMaintenance ? (
        <div className="flex flex-col items-center justify-center h-screen text-center px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-[rgba(2,224,61,1)] mb-4">
            Saytimizda texnik ishlar olib borilmoqda
          </h1>
          <p className="text-white text-lg mb-6">
            Iltimos, bir oz kuting yoki davom etishni tanlang.
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleExit}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow"
            >
              Chiqish
            </button>
            <button
              onClick={handleContinue}
              className="px-6 py-2 bg-[rgba(2,224,61,1)] hover:bg-green-500 text-white rounded-xl shadow"
            >
              Davom etish
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3 containes">
          <Navbar />
          <Slider />
          <Filter />
          <Group />
          <Communication />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Page;
