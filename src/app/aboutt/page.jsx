import Link from "next/link";
import React from "react";
import { FaBriefcase, FaCheckCircle, FaUserTie, FaSmile } from "react-icons/fa";
function AboutPage() {
  const features = [
    {
      icon: <FaBriefcase className="text-purple-500 text-4xl" />, // Yillik tajriba
      title: "1+",
      desc: "Yillik tajriba",
    },
    {
      icon: <FaCheckCircle className="text-purple-500 text-4xl" />, // Loyihalar
      title: "140+",
      desc: "Muvaffaqiyatli loyihalar",
    },
    {
      icon: <FaUserTie className="text-purple-500 text-4xl" />, // Mutaxassislar
      title: "12+",
      desc: "Professional mutaxassislar",
    },
    {
      icon: <FaSmile className="text-purple-500 text-4xl" />, // Mamnun mijozlar
      title: "99%",
      desc: "Mijozlar mamnuniyati",
    },
  ];

  return (
    <div className=" text-white px-6 md:px-20 py-16 space-y-20 pt-20">
      {/* Hero Section */}
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

      {/* Statistika */}
      <div className=" text-white  pt-10 mt-5">
        <div className=" text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#0A0B2A] flex items-center justify-center flex-col rounded-xl p-6 text-left hover:border  hover:border-[#aa33ea]  cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4 bg-[#9233ea5f] p-3 rounded-full">
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontWeight: "900",
                  }}
                  className="text-xl mb-2"
                >
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-xs bg-[#9233ea56] border border-[#9333EA] text-purple-300 px-3 py-[5] rounded-full inline-block mb-4">
            Boshlanishdan bugungacha
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#9333EA]">Freva</span> muvaffaqiyat yo‘li
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Freva kompaniyasi 2024-yilda bizneslarni raqamli dunyoda
            rivojlantirish va ularni yangi bosqichga olib chiqishga yordam
            beruvchi innovatsion IT-yechimlar yaratish maqsadida tashkil
            etilgan.
            <br />
            <br />
            Kompaniyamiz asoschilari — texnologiyaga mehr qo‘ygan, maqsadi aniq
            va kelajakka qat’iy qaragan bir guruh yosh mutaxassislardir. Qisqa
            vaqt ichida Freva kichik dasturchilar jamoasidan turli sohalarda
            faoliyat yurituvchi mijozlarga 30 dan ortiq muvaffaqiyatli
            loyihalarni taqdim etgan, O‘zbekistondagi eng istiqbolli
            IT-kompaniyalardan biriga aylandi.
            <br />
            <br />
            Bugungi kunda Freva — bu dasturchilar, dizaynerlar, loyiha
            menejerlari va marketologlardan iborat 8 dan ortiq professional
            mutaxassislar jamoasi bo‘lib, mijozlarimizga yuqori sifatli va
            samarali raqamli yechimlar taqdim etishda davom etmoqda.
          </p>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/50/0b/5e/500b5e5dbb9d0fe914df467547bd9500.jpg"
            alt="Success"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
      <section>
        <div class=" flex flex-col md:flex-row items-center justify-between gap-10">
          <div class="flex-1 space-y-6">
            <button class="bg-[#3d2063] text-white py-1 px-4 rounded-full text-sm">
              Nima uchun bizni tanlashadi
            </button>
            <h2 class="text-4xl md:text-5xl font-bold leading-snug">
              Freva bilan <span class="text-[#ae84f6]">hamkorlik</span>{" "}
              afzalliklari
            </h2>
            <p class="text-gray-300 max-w-xl">
              Biz shunchaki ijrochi emas, balki mijozlarimizga zamonaviy
              IT-yechimlar yordamida biznes maqsadlariga erishishda yordam
              beradigan ishonchli hamkor bo‘lishga intilamiz.
            </p>

            <div class="space-y-4 max-w-[600px]">
              <div class="flex items-start gap-3">
                <span class="text-[#ae84f6] mt-1">✔</span>
                <div>
                  <h4 class="font-semibold text-lg">Individual yondashuv</h4>
                  <p class="text-gray-400">
                    Biz har bir mijozning biznes xususiyatlari va ehtiyojlarini
                    hisobga olgan holda yechimlar ishlab chiqamiz.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-[#ae84f6] mt-1">✔</span>
                <div>
                  <h4 class="font-semibold text-lg">Jarayonlar shaffofligi</h4>
                  <p class="text-gray-400">
                    Biz loyiha ustida ishlashning barcha bosqichlarida to‘liq
                    shaffoflikni ta'minlaymiz.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-[#ae84f6] mt-1">✔</span>
                <div>
                  <h4 class="font-semibold text-lg">
                    Muddatlarga rioya qilish
                  </h4>
                  <p class="text-gray-400">
                    Biz mijozlarimizning vaqtini qadrlaymiz va har doim
                    loyihalarni belgilangan muddatlarda yakunlashga intilamiz.
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-[#ae84f6] mt-1">✔</span>
                <div>
                  <h4 class="font-semibold text-lg">
                    Doimiy qo‘llab-quvvatlash
                  </h4>
                  <p class="text-gray-400">
                    Biz loyiha ishga tushirilgandan keyin barcha masalalar
                    bo‘yicha texnik yordam va maslahatlar beramiz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://i.pinimg.com/736x/5c/09/78/5c09785b0db777096eadbf4e354d9a5e.jpg"
              alt="Hamkorlik"
              class="rounded-xl shadow-lg w-[600px] h-[500px] object-cover"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
