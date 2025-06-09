"use client";

import React, { useState } from "react";
import Navbar from "./navbar/page";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Group from "./group/page";
import Communication from "./communication/page";
import Footer from "./footer/page";

function Page() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
      }}
    >
      <div className="mt-3 containes">
        <Navbar />
        <Slider />
        <Filter />
        <Group />
        <Communication />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
