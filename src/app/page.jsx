"use client";

import React, { useState } from "react";
import Navbar from "./navbar/page";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Group from "./group/page";
import Communication from "./communication/page";
import Footer from "./footer/page";
import About from "./about/page";

function Page() {
  return (
    <div className="min-h-screen">
      <div className="mt-3 containes">
        <Navbar />
        <Slider />
        <About />
        <Filter />
        <Group />
        <Communication />
        <Footer />
      </div>
    </div>
  );
}

export default Page;
