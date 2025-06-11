import React from "react";
import { FaAward, FaUsers, FaChartLine, FaClock } from "react-icons/fa";

function Why() {
  const features = [
    {
      icon: <FaAward className="text-purple-500 text-2xl" />,
      title: "Yuqori sifat",
      desc: "Har bir loyihaga alohida e'tibor beramiz. Sifatli kod, zamonaviy dizayn va yuqori darajadagi xavfsizlik bilan xizmat ko'rsatamiz.",
    },
    {
      icon: <FaUsers className="text-purple-500 text-2xl" />,
      title: "Professional jamoa",
      desc: "12+ professional dasturchilar, dizaynerlar va loyiha menejerlari jamoasi. Har bir mutaxassis o'z sohasida tajribaga ega.",
    },
    {
      icon: <FaChartLine className="text-purple-500 text-2xl" />,
      title: "Natijaga yo'naltirilgan",
      desc: "Bizning asosiy maqsadimiz – mijozlarimiz biznesini rivojlantirish. Har bir loyiha aniq biznes maqsadlarga yo'naltirilgan.",
    },
    {
      icon: <FaClock className="text-purple-500 text-2xl" />,
      title: "24/7 qo'llab-quvvatlash",
      desc: "Loyihangiz ishga tushgandan so'ng ham, biz doimo yoningizda. Texnik qo'llab-quvvatlash xizmatimiz 24/7 rejimida ishlaydi.",
    },
  ];

  return (
    <div className=" text-white  px-4 pt-20 mt-5">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          style={{
            fontWeight: "800",
          }}
          className="text-[30px] mb-4"
        >
          Nima uchun <span className="text-purple-500">Freva</span>?
        </h2>
        <p className="text-gray-400 mb-12">
          Biz mijozlarimizga quyidagi afzalliklarni taqdim etamiz:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0B2A] rounded-xl p-6 text-left hover:border  hover:border-[#aa33ea]  cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
