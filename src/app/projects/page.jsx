import Link from "next/link";
import React from "react";
import Filter from "../filter/page";

function page() {
  return (
    <div className="containes mt-10 pt-10">
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <span className="text-xs bg-[#9233ea56] border border-[#9333EA] text-purple-300 px-3 py-[5] rounded-full inline-block mb-4">
            Bizning loyihalarimiz{" "}
          </span>
          <h1
            style={{
              fontWeight: "900",
            }}
            className="text-4xl md:text-5xl leading-tight mb-4"
          >
            Freva amalga oshirgan
            <span className="text-[#9333EA]">loyihalar</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Freva tomonidan yaratilgan eng muvaffaqiyatli loyihalar bilan
            tanishing. Biz har bir loyihada yuqori sifat va zamonaviy
            texnologiyalarni qo'llaymiz.
          </p>
        </div>
        <div>
          <img
            src="https://www.innosoft.uz/_next/image?url=%2Fportfolio-image.webp&w=1280&q=75"
            alt="Innosoft jamoasi"
            className="rounded-xl shadow-lg w-[700px] h-[500px] object-cover"
          />
        </div>
      </div>

      <Filter />
    </div>
  );
}

export default page;
