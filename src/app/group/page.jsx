"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Group() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://177add8ca22d8b9a.mokky.dev/users")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="p-4 mt-10">
      <h2 className=" text-[25px] pt-[px] font-bold">Jamoamiz azolari</h2>

      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-12 w-max pb-2 mt-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-[160px] flex-shrink-0 flex flex-col items-center"
            >
              {/* Aylana shaklidagi rasm */}
              {item.img ? (
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-[rgba(2,224,61,0.4)]"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white/10 border border-[rgba(2,224,61,0.4)] flex items-center justify-center text-4xl font-bold text-white mb-4">
                  {item.name?.charAt(0).toUpperCase()}
                </div>
              )}

              {/* Ism */}
              <h1 className="font-semibold text-lg text-gray-800 text-center">
                {item.name}
              </h1>
              {/* Kategoriya */}
              <p className="text-gray-500 text-sm text-center mt-1">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Group;
