"use client";

import React, { useEffect } from "react";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Comments from "./comments/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";
import "./globals.css";

function Page() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/68409a39dba854190c16c251/1isu5kteg";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="mt-3 containes">
      <Navbar />
      <Slider />
      <Filter />
      <Comments />
      <Footer />
    </div>
  );
}

export default Page;
