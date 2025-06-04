import React from "react";
import "../../app/globals.css";

function About() {
  return (
    <div className="mb-16 container mx-auto px-6 bg-white rounded-3xl shadow-lg py-12">
      <div className="text-center mb-14">
        <h1 className="text-[#0c8932] font-extrabold text-5xl md:text-6xl tracking-wide">
          Biz Haqimizda
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-[#0c8932] font-bold text-4xl mb-6">
            Biz kimmiz?
          </h2>
          <p className="text-[#0c8932] text-lg md:text-xl leading-relaxed font-medium">
            Freva.uz — Bizning dizayn agentligimiz o'zingizning
            proyektlaringizni o'z ichiga olgan yaratuvchilar jamoasidir. Bizning
            vazifamiz - sizning fikrlaringizni, brandingingizni va
            innovatsiyalaringizni rivojlantirishda yordam beramiz. Bizning
            mijozlarimizga unikal, ko'rib chiqaruvchi va turli sohalar uchun
            yaratilgan dizaynlarni taqdim qilish orqali ularning muvaffaqiyatini
            ta'minlashdir.
          </p>
        </div>

        <div className="lg:w-1/2">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQGpqOaZoekFfQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1730246819363?e=2147483647&v=beta&t=yO2HPPm304uZCCL5pABVwPmt9AN2DKY4ZHMqoEdUjms"
            alt="Biz Haqimizda"
            className="w-full h-[350px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 mt-20">
        <div className="flex flex-col gap-8 md:w-1/2">
          <div className="bg-[#e6f4ea] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-[#0c8932] font-semibold text-3xl mb-3">
              Sotuv saytlarni ishlab chiqish
            </h3>
            <p className="text-[#0c8932] text-base leading-relaxed font-normal">
              Biz har doim dizayndagi tendentsiyalarga amal qilamiz. Yakuniy
              natija mijozlarning qiziqishi va brendga ishonchini uyg'otadigan
              sezgir va tematik dizayn bo'ladi.
            </p>
          </div>

          <div className="bg-[#e6f4ea] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-[#0c8932] font-semibold text-3xl mb-3">
              Qabul qilinadigan narxlar
            </h3>
            <p className="text-[#0c8932] text-base leading-relaxed font-normal">
              “Freva” agentligimizda dizayn bo'yicha ishlar tizimlashtirilgan va
              optimallashtirilgan bo'lib, bu arzon narxni ta'minlaydi.
            </p>
          </div>

          <div className="bg-[#e6f4ea] p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-[#0c8932] font-semibold text-3xl mb-3">
              Sifat nazorati
            </h3>
            <p className="text-[#0c8932] text-base leading-relaxed font-normal">
              Biz sizning mijozingizga sifatli ish taqdim etish uchun sizning
              obro'ingizni qadrlaymiz. Biz sizning dizayningiz uchun
              javobgarmiz.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 bg-[#e6f4ea] rounded-3xl p-10 shadow-lg backdrop-blur-sm">
          <h2 className="text-[#0c8932] font-semibold text-3xl mb-6 leading-snug">
            Jamoamiz haqida
          </h2>
          <p className="text-[#0c8932] text-lg leading-relaxed font-normal max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0c8932]/40 scrollbar-track-transparent">
            Biz front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz. Biz
            front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
