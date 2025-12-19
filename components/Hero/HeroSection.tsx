"use client";

import { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const products = [
    {
      title: "High power amplifier",
      image: "/assets/images/img_main_visual_01.png",
      text: "Leading SSPA Technology and Products",
      bgimg: "/assets/images/img_main_visual_01.png",
    },
    {
      title: "Phased Array RFFE",
      image: "/assets/images/img_main_visual_02.png",
      text: "Active Electronically Scanned Array Front End",
      bgimg: "/assets/images/img_main_visual_02.png",
    },
    {
      title: "MMIC Solutions",
      image: "/assets/images/img_main_visual_03.png",
      text: "Cutting Edge MMIC Technology and Products",
      bgimg: "/assets/images/img_main_visual_03.png",
    },
    {
      title: "Coustomized Solutions",
      image: "/assets/images/img_main_visual_04.png",
      text: "Advanced RF Technology Opens up New Future",
      bgimg: "/assets/images/img_main_visual_04.png",
    },
  ];

  const [currentProduct, setCurrentProduct] = useState(products[0]);

  return (
    <section className="bg-black text-white relative overflow-hidden p-5 md:p-2 lg:p-1">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500">
        <Image
          src={currentProduct.bgimg}
          alt="Background"
          fill
          className=" w-{100%} h-{100%} opacity-60 "
        />
      </div>

      <div className="relative z-5 text-center sm:px-8 lg:pt-20 md:px-10 ">
        <h1 className=" text-center mb-10 font-bold text-[15px] sm:text-xl md:text-2xl pt-10 lg:text-3xl">
          {currentProduct.text}
        </h1>

        <div className="flex justify-center gap-12 md:mt-15 mt-8 ">
          {products.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setCurrentProduct(item)}
              className="cursor-pointer flex flex-col items-center"
            >
              <Image
                src={item.image}
                width={250}
                height={250}
                alt={item.title}
                className={`rounded-full border-2 transition-colors bg-gray
                  ${
                    currentProduct.title === item.title
                      ? "border-blue-500 shadow-[0_0_35px_rgba(43,127,255,0.8)]"
                      : "border-gray-500 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(43,127,255,0.8)] active:shadow-[0_0_35px_rgba(43,127,255,0.8)]"
                  }`}
              />
              <p className="mt-2 mb-10 text-[10px] sm:text-[15px] lg:text-2xl md:text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
