"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.css";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [truncateText, setTruncateText] = useState(true);

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
      className="min-h-screen w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 animate-fadeIn mt-14"
      style={{
        background:
          "linear-gradient(59.36deg, #0a0b2a 19.47%, #080937 104.56%)",
        fontFamily: "'Poppins', sans-serif",
        color: "white",
      }}
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
        {/* IMAGES */}
        <div className=" rounded-3xl shadow-2xl">
          <img
            style={{
              borderRadius: "40px",
            }}
            src={selectedImage}
            alt={product.title}
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-contain  cursor-pointer hover:scale-[1.03] transition-transform duration-500 ease-in-out"
            loading="lazy"
          />
          <div className="flex gap-3 sm:gap-4 items-center overflow-x-auto no-scrollbar px-2">
            {Array.isArray(product.img) &&
              product.img.map((thumb, idx) => (
                <img
                  key={idx}
                  src={thumb}
                  alt={`Thumbnail ${idx + 1}`}
                  loading="lazy"
                  onClick={() => setSelectedImage(thumb)}
                  className={`min-w-[80px] h-20 sm:min-w-[100px] sm:h-24 object-cover rounded-xl border-2 cursor-pointer transition-all duration-300 shadow-md hover:scale-105 ${
                    selectedImage === thumb
                      ? "border-[rgba(2,224,61,1)] scale-105"
                      : "border-transparent"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgba(2,224,61,1)] break-words mb-4">
            {product.title}
          </h2>

          <p
            className="leading-relaxed text-white cursor-pointer text-base sm:text-lg mb-6"
            onClick={() => setTruncateText(!truncateText)}
          >
            <span className="text-[rgba(2,224,61,1)] font-semibold mr-2">
              Qisqacha:
            </span>
            {truncateText ? `${product.desc.slice(0, 170)}...` : product.desc}
          </p>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[rgba(2,224,61,1)] mb-3">
              Texnologiyalar
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full cursor-pointer text-sm font-semibold bg-white text-[#006b24] shadow-lg hover:bg-[rgba(2,224,61,1)] hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="flex flex-col gap-7">
              {product.url && (
                <div className="mt-6 flex flex-wrap  gap-6">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-[rgba(2,224,61,1)] text-[#ffffff] font-semibold rounded-xl shadow-lg hover:bg-white hover:text-[#006b24] transition-colors duration-300"
                  >
                    Loyihani ko‘rish
                  </a>
                  {product.repository && (
                    <a
                      href={product.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-600 transition-colors duration-300"
                    >
                      Kod manbasi
                    </a>
                  )}
                </div>
              )}

              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[rgba(2,224,61,1)] mb-3">
                  Loyihaning davomiyligi
                </h4>
                <div className="flex flex-col sm:flex-row gap-6 text-sm sm:text-base">
                  <div>
                    <p className="uppercase text-gray-400 font-medium">
                      Boshlangan sana
                    </p>
                    <p className="text-lg">
                      {product.started?.substring(0, 10) || "Noma'lum"}
                    </p>
                  </div>
                  <div>
                    <p className="uppercase text-gray-400 font-medium">
                      Tugagan sana
                    </p>
                    <p className="text-lg">
                      {product.ended?.substring(0, 10) || "Noma'lum"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[rgba(2,224,61,1)] mb-3">
                Qo‘shimcha ma’lumotlar
              </h4>
              <div className=" flex flex-col gap-3">
                <p>
                  <span className="font-semibold">Client:</span>{" "}
                  {product.client || "Noma'lum"}
                </p>
                <p>
                  <span className="font-semibold">Byudjet:</span>{" "}
                  {product.budget || "Noma'lum"}
                </p>
                <p>
                  <span className="font-semibold">Holat:</span>{" "}
                  {product.status || "Noma'lum"}
                </p>
                <p>
                  <span className="font-semibold">Kategoriya:</span>{" "}
                  {product.category || "Noma'lum"}
                </p>
                <p>
                  <span className="font-semibold">Kategoriya (Tags):</span>{" "}
                  {product.categories?.join(", ") || "Noma'lum"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER / BOTTOM SECTION */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-white text-base border-t border-[rgba(2,224,61,1)] pt-12">
        {/* 1 - Yo‘nalishlar */}
        <div className="space-y-4">
          <h4 className="font-bold text-[rgba(2,224,61,1)] text-xl">
            Yo‘nalishlar
          </h4>
          <ul className="space-y-2">
            <li>⚡ Frontend (React, Next.js)</li>
            <li>⚡ Backend (Node.js, Java, Spring)</li>
            <li>⚡ UI/UX Dizayn (Figma)</li>
            <li>⚡ Mobil ilovalar (React Native)</li>
          </ul>
        </div>

        {/* 2 - Loyiha tafsilotlari */}
        <div className="space-y-4">
          <h4 className="font-bold text-[rgba(2,224,61,1)] text-xl">
            Loyiha tafsilotlari
          </h4>
          <p className="leading-relaxed break-words">
            {product?.desc?.substring(0, 130) ||
              "Loyihamiz haqida hozircha ma’lumot yo‘q."}
          </p>
        </div>

        {/* 3 - Texnik ma'lumotlar */}
        <div className="space-y-4">
          <h4 className="font-bold text-[rgba(2,224,61,1)] text-xl">
            Texnik ma’lumotlar
          </h4>
          <p>
            {product.categories
              ? `Yo‘nalishlar: ${product.categories.join(", ")}`
              : "Yo‘nalishlar mavjud emas"}
          </p>
          <p>
            Boshlangan:{" "}
            <span className="font-semibold">
              {product.started?.substring(0, 10) || "Noma'lum"}
            </span>
          </p>
          <p>
            Tugagan:{" "}
            <span className="font-semibold">
              {product.ended?.substring(0, 10) || "Noma'lum"}
            </span>
          </p>
        </div>

        {/* 4 - Kontaktlar */}
        <div className="space-y-4">
          <h4 className="font-bold text-[rgba(2,224,61,1)] text-xl">
            Kontaktlar
          </h4>
          <a href="https://t.me/freva_manager">
            <p>Teligram: freva_manager</p>
          </a>
          <p>Telefon: +998 77 014 50 47</p>
          <p>Manzil: Toshkent, O‘zbekiston</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
