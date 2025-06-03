import Link from "next/link";
import Image from "next/image";
import React from "react";
import Vector from "../navbar/Vector.png";

function Navbar() {
  return (
    <>
      <div className=" ">
        <div className="flex justify-between items-center p-5">
          <div className="">
            {/* Comment */}
            <Link href="/" className="flex justify-center flex-col">
              <h2 className="font-bold text-[35px] ml-2 text-[#F2994A]">
                Freva
              </h2>
              <Image src={Vector} alt="jnvjlk" />
            </Link>
          </div>
          <div className="flex justify-around alig gap-14">
            <Link href="/">
              <h1 className=" text-lg font-bold text-[#F2994A]">Asosiy</h1>
            </Link>
            <Link href="/about">
              <h4 className=" text-lg font-medium">Biz haqimizda</h4>
            </Link>
            <Link href="/pockets">
              <h4 className=" text-lg font-medium">Paketlar</h4>
            </Link>
            <Link href="/costs">
              <h4 className=" text-lg font-medium">Narxlar</h4>
            </Link>
          </div>
          <div>
            <Link href={"/order"}>
              <button
                type="button"
                className="font-bold cursor-pointer text-white bg-gradient-to-r from-[#F2994A] to-[#F6BC88] pr-12 pl-12 pt-3.5 pb-3.5 rounded-[32px]"
              >
                Buyurtma berish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
