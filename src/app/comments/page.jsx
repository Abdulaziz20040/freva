import React from "react";
import Image from "next/image";
import java from "./img/java.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { it } from "node:test";

function Comments() {
  const commentsArr = [
    {
      top: "Course",
      img: "",
      title: "Backend Developer ",
      desc: "TestPrepTraining",
      descs: "Duration: 51 Hours",
      cost: "12999",
      ball: "4.5",
    },
    {
      top: "Course",
      img: "",
      title: "Backend Developer in",
      desc: "TestPrepTraining",
      descs: "Duration: 51 Hours",
      cost: "12999",
      ball: "4.5",
    },
    {
      top: "Course",
      img: "",
      title: "Backend Developer in Node.js",
      desc: "TestPrepTraining",
      descs: "Duration: 51 Hours",
      cost: "12999",
      ball: "4.5",
    },
    {
      top: "Course",
      img: "",
      title: "Backend Developer in Node.js",
      desc: "TestPrepTraining",
      descs: "Duration: 51 Hours",
      cost: "12999",
      ball: "4.5",
    },
    {
      top: "Course",
      img: "",
      title: "Backend Developer in Node ",
      desc: "TestPrepTraining",
      descs: "Duration: 51 Hours",
      cost: "12999",
      ball: "4.5",
    },
  ];
  return (
    <div className="mb-12">
      <div className="text-center font-bold text-[40px]">
        <h2>Ommaviy fikrlar</h2>
      </div>
      <div className="flex justify-start gap-10 items-baseline p-2">
        <button className="cursor-pointer border-4 border-r-0 border-l-0 border-t-0 border-b-indigo-400">
          All
        </button>
        <button className="cursor-pointer">Backend</button>
        <button className="cursor-pointer">Frontend</button>
        <button className="cursor-pointer">Figma</button>
        <button className="cursor-pointer">Mobile</button>
      </div>
      <div className="flex justify-between items-center gap-4 mt-10">
        <div>
          <button>
            <FaArrowLeft />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {commentsArr.map((item) => (
            <div className="bg-white w-[380px] rounded-[2px]">
              <div className="pl-3 pt-3">
                <p>{item.top}</p>
              </div>
              <div className="flex justify-start gap-6 mb-5 p-4">
                <div className="text-center">
                  <Image
                    src={java}
                    alt="nima"
                    className="rounded-full w-[62px]"
                  />
                  <p className="mt-2 text-[14px] font-bold">{item.ball}</p>
                </div>
                <div>
                  <h3 className="font-bold text-[20px]">{item.title}</h3>
                  <div className="text-[13px] font-normal mt-8">
                    <p>{item.desc}</p>
                    <p>{item.descs}</p>
                  </div>
                  <p className="font-bold text-[18px] mt-6">💲{item.cost}</p>
                </div>
              </div>
              <div className="text-center">
                <hr className="w-[350px] ml-[15px]" />
              </div>
              <div className="flex justify-between items-center p-3">
                <h3 className="text-[#F2994A] text-[14px] font-bold">
                  Explore
                </h3>
                <button className="bg-[#F2994A] rounded-[4px] p-2 w-[120px] text-white font-bold text-[12px]">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
