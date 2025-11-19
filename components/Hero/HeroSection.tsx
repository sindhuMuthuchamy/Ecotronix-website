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
    <section className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500">
        <Image
          src={currentProduct.bgimg}
          alt="Background"
          fill
          className=" w-{100%} h-{100%} opacity-60"
        />
      </div>

      <div className="relative z-5 text-center pt-32">
        <h1 className="absolute mx-80 text-center mb-10 font-bold text-4xl">
          {currentProduct.text}
        </h1>

        <div className="flex justify-center gap-12 mt-20">
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
              <p className="mt-2 mb-10 text-2xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
