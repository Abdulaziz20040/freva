import React from "react";
import { FaFolder } from "react-icons/fa";

function About() {
  return (
    <div className="mb-10">
      <div className="text-center text-[50px] font-bold mb-10">
        <h4>Biz Haqimizda</h4>
      </div>
      <div className="flex justify-between gap-3 p-4">
        <div>
          <h3 className="font-bold text-[40px]">Biz kimmiz?</h3>
          <p className="text-[30px] leading-12 font-medium">
            Freva.uz — bu frontend, dizayn va mobil yo‘nalishlarda xizmat
            ko‘rsatadigan zamonaviy jamoa. Biz sifatli va tez xizmat
            ko‘rsatamiz.
          </p>
        </div>
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQGpqOaZoekFfQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1730246819363?e=2147483647&v=beta&t=yO2HPPm304uZCCL5pABVwPmt9AN2DKY4ZHMqoEdUjms"
          alt=""
          className="w-[800px] rounded-[13px] h-[350px]"
        />
      </div>

      <div className="flex justify-between gap-5 mt-14">
        <div>
          <div className="w-[300px] bg-blue-100 p-5 rounded-3xl">
            <h4 className="font-semibold text-[30px]">Frontend</h4>
            <p className="text-[15px] font-normal leading-6">
              React, Next.js, Tailwind bilan zamonaviy web saytlar tayyorlaymiz.
            </p>
          </div>
          <div className="w-[300px] bg-blue-100 p-5 rounded-3xl mt-5 mb-5">
            <h3 className="font-semibold text-[30px]">Figma</h3>
            <p className="text-[15px] font-normal leading-6">
              UI/UX dizayn, prototiplash va foydalanuvchi uchun qulay
              interfeyslar.
            </p>
          </div>
          <div className="w-[300px] bg-blue-100 p-5 rounded-3xl">
            <h3 className="font-semibold text-[30px]">Mobil dizayn</h3>
            <p className="text-[15px] font-normal leading-6">
              Android va iOS ilovalar uchun interfeys dizayni.
            </p>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="bg-blue-100 backdrop-blur-md text-cyan-900 p-7 rounded-2xl shadow-md">
          <h2 className="font-semibold text-[28px] leading-snug mb-4">
            Jamoamiz haqida
          </h2>
          <p className="text-[22px] font-normal leading-9">
            Biz front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz. Biz
            front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz. Biz
            front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz. Biz
            front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
            Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz. Biz
            front-end dasturchilar, dizaynerlar va mobil interfeys
            mutaxassislaridan iborat jamoamiz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
