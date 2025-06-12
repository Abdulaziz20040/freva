"use client";

import React, { useState } from "react";
import Navbar from "./navbar/page";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Group from "./group/page";
import Communication from "./communication/page";
import Footer from "./footer/page";
import About from "./about/page";
import Why from "../why/page";
import Colobrators from "../colobrators/page";
import Services from "../services/page";

function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Slider />
      <Colobrators />
      <div className="mt-3 containes">
        <Why />
        <About />
        <Services />
        <Filter />
        <Group />
      </div>
      <Communication />
      {/* <Footer /> */}
    </div>
  );
}

export default Page;
