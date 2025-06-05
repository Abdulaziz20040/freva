"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "../../globals.css"; // global uslublar

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`https://177add8ca22d8b9a.mokky.dev/card/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setSelectedImage(data.img?.[0] || "");
        })
        .catch((err) => console.error("API xatosi:", err));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="p-8 text-center text-gray-400 text-lg font-semibold">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div
      className="  pt-25 text-white animate-fadeIn containes"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Chap taraf - Rasm */}
        <div className="space-y-6">
          <div
            className=" p-5 rounded-3xl shadow-lg
              transition-transform duration-500 hover:scale-[1.03] ease-in-out"
          >
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full h-[400px] object-contain  rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="flex gap-4 items-center justify-between overflow-x-auto no-scrollbar py-2 px-10">
            {Array.isArray(product.img) &&
              product.img.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(thumb)}
                  className={`w-28 h-24 object-cover rounded-lg cursor-pointer transition-transform duration-300
                    ${selectedImage === thumb ? " scale-110" : "ring-0"}
                    hover:scale-110 
                  `}
                />
              ))}
          </div>
        </div>

        {/* O‘ng taraf - Ma’lumotlar */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-md">
            {product.title}
          </h2>

          <div>
            <h4 className="text-2xl font-semibold mb-3 border-b border-[#50ff50] pb-2 text-[#50ff50]">
              Tavsif
            </h4>
            <p className="text-lg leading-relaxed text-white">
              <span className="font-semibold text-[#50ff50]">Qisqacha: </span>
              {product.desc}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#50ff50]">
              Foydalanilgan texnologiyalar
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 cursor-pointer bg-gradient-to-r from-[#0c8932] to-[#29CA59] bg-opacity-20 text-[#ffffff] rounded-xl shadow-md
                    transition-transform duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 border-b border-[#50ff50] pb-2 text-[#50ff50]">
              Loyihaning davomiyligi
            </h4>
            <div className="flex gap-20 text-white">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-wide font-semibold">
                  Boshlangan sana
                </p>
                <p className="text-lg">{product.started || "Noma’lum"}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-wide font-semibold">
                  Tugagan sana
                </p>
                <p className="text-lg">{product.ended || "Noma’lum"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pastki qism - Qo'shimcha ma'lumotlar */}
      <div className=" mt-16 border-t border-[#50ff50] pt-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-white text-sm">
        <div className="space-y-2">
          <h4 className="font-bold text-[#50ff50] text-lg">Tavsif</h4>
          <p>{product.desc}</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-[#50ff50] text-lg">
            O‘lcham va moslik
          </h4>
          <p>
            {product.sizes
              ? `O‘lchamlar: ${product.sizes.join(", ")}`
              : "O‘lcham ma’lumoti mavjud emas"}
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-[#50ff50] text-lg">Yetkazib berish</h4>
          <p>
            30 kunlik qaytarish siyosati. $100 dan ortiq buyurtmalarga bepul
            yetkazib berish.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold text-[#50ff50] text-lg">
            Aksiya va chegirmalar
          </h4>
          <p>
            Cheklangan vaqtli takliflar va talabalar uchun chegirmalar mavjud.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
