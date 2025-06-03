import React from "react";

function About() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 md:px-20">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Biz kimmiz?</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Freva.uz — bu frontend, dizayn va mobil yo‘nalishlarda xizmat
          ko‘rsatadigan zamonaviy jamoa. Biz sifatli va tez xizmat ko‘rsatamiz.
        </p>
      </section>

      {/* Jamoa haqida */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Jamoamiz haqida</h2>
        <p className="text-base md:text-lg max-w-3xl">
          Biz front-end dasturchilar, dizaynerlar va mobil interfeys
          mutaxassislaridan iborat jamoamiz. Har bir loyiha biz uchun muhim.
          Sifat, tezlik va mijoz ehtiyojini tushunish — ustuvor vazifamiz.
        </p>
      </section>

      {/* Xizmatlar */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Yo‘nalishlarimiz</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend",
              desc: "React, Next.js, Tailwind bilan zamonaviy web saytlar tayyorlaymiz.",
            },
            {
              title: "Figma",
              desc: "UI/UX dizayn, prototiplash va foydalanuvchi uchun qulay interfeyslar.",
            },
            {
              title: "Mobil dizayn",
              desc: "Android va iOS ilovalar uchun interfeys dizayni.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nega biz? */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Nega bizni tanlashadi?</h2>
        <ul className="list-disc ml-5 text-base md:text-lg space-y-2">
          <li>✅ Tez va sifatli bajariladigan ishlar</li>
          <li>✅ Har bir buyurtmaga individual yondashuv</li>
          <li>✅ Muntazam aloqa va fikr almashish</li>
          <li>✅ Tajribali va mas’uliyatli jamoa</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-semibold mb-4">
          Loyihangizni bizga ishonib topshiring!
        </h3>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
          Zakaz berish
        </button>
      </section>
    </div>
  );
}

export default About;
