import React, { useEffect, useRef, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Services() {
  const [services, setServices] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://177add8ca22d8b9a.mokky.dev/services") // <-- API URL
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Xatolik:", err));
  }, []);

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    let scrolled = 0;
    const step = 10; // har bir qadamda 10px
    const distance = 300; // umumiy 300px suriladi
    const interval = setInterval(() => {
      scrollContainer.scrollBy({ left: step, behavior: "auto" }); // `smooth` emas, manual bo'ladi
      scrolled += step;
      if (scrolled >= distance) clearInterval(interval);
    }, 10); // har 10ms da bir qadam
  };

  return (
    <div className="text-white px-4 pt-20 mt-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2
            style={{
              fontWeight: "800",
            }}
            className="text-[30px]"
          >
            Bizning <span className="text-purple-500">xizmatlar</span>
          </h2>
          <button
            onClick={handleScroll}
            className="text-purple-500 cursor-pointer hover:text-purple-700 transition text-xl"
          >
            <FaArrowRight />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar p-4 cursor-grab"
        >
          {services.map((item) => {
            const IconComponent = FaIcons[item.icon];
            return (
              <div
                key={item.id}
                className="min-w-[250px] bg-[#0A0B2A] rounded-xl p-6 hover:border hover:border-purple-500 transition-all duration-300 transform hover:-translate-y-1"
              >
                {IconComponent && (
                  <IconComponent className="text-purple-500 text-3xl mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
