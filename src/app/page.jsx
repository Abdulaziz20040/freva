import React from "react";
import Slider from "./slider/page";
import Filter from "./filter/page";
import Cards from "./cards/page";
import Comments from "./comments/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

function page() {
  return (
    <div className=" mt-3">
      <Navbar />
      <Slider />
      <Filter />
      <Comments />
      <Footer />
    </div>
  );
}

export default page;
