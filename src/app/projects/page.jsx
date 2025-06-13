import React from "react";

function page() {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-10 items-center mt-20">
        <div>
          <span className="text-xs bg-[#9233ea56] border border-[#9333EA] text-purple-300 px-3 py-[5] rounded-full inline-block mb-4">
            Freva kompaniyasi haqida
          </span>
          <h1
            style={{
              fontWeight: "900",
            }}
            className="text-4xl md:text-5xl leading-tight mb-4"
          >
            O'zbekistondagi yetakchi{" "}
            <span className="text-[#9333EA]">IT-kompaniya</span>
          </h1>
          <p className="text-gray-300 mb-6">
            Biz biznesni rivojlantirish, jarayonlarni optimallashtirish va
            daromadni oshirishga yordam beradigan innovatsion IT yechimlarni
            yaratamiz.
          </p>
          <div className="flex gap-4">
            <Link href={"/cards"}>
              <button className="bg-[#9333EA] cursor-pointer px-5 py-2 rounded-lg hover:bg-[#9233eac0]">
                Loyihalarimiz
              </button>
            </Link>
            <button className="border border-[#9333EA] cursor-pointer px-5 py-2 rounded-lg transition-transform duration-300 hover:-translate-y-1">
              Biz bilan bog'lanish →
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/84/14/d4/8414d47ad1248373134f02bdc0050f48.jpg"
            alt="Innosoft jamoasi"
            className="rounded-xl shadow-lg w-[700px] h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
