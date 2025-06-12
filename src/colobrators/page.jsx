import React, { useEffect, useState } from "react";

export default function Page() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://177add8ca22d8b9a.mokky.dev/sponsor")
      .then((res) => res.json())
      .then((data) => {
        setLogos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#0A0B2A] pb-10 px-4 mt-18 pt-6">
      <h2
        style={{
          fontWeight: "700",
        }}
        className="text-white text-center text-2xl md:text-[27px]"
      >
        Bizga ishon gan
        <span className="text-purple-500"> kompaniyalar</span>
      </h2>

      {loading ? (
        <p className="text-white text-center">Yuklanmoqda...</p>
      ) : (
        <div className="overflow-x-auto mt-14">
          <div className="flex md:flex-wrap md:justify-center items-center gap-14 min-w-[600px]">
            {logos.map((logo) => (
              <a
                key={logo.id}
                href={logo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="h-16 md:h-16 w-auto object-contain transition-all duration-300 transform hover:-translate-y-2"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
