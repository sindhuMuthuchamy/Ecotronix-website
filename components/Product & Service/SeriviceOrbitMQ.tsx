"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const ServiceOrbitMQ = () => {
  const Products = [
    {
      title: "High Power Amplifiers",
      description:
        "Available in operating frequencies from HF to Ku-band with standard output powers ranging from 2 to 1000 watts.",
      image: "/assets/images/img_main_visual_01.png",
    },
    {
      title: "Phased Array RFFE",
      description:
        "RFcore provides an economical and scalable solution by designing compact TRM modules.",
      image: "/assets/images/img_main_visual_02.png",
    },
    {
      title: "MMIC Solutions",
      description:
        "Innovative MMIC solutions for phased array systems with higher performance and ease of use.",
      image: "/assets/images/img_main_visual_03.png",
    },
    {
      title: "Customized System Solutions",
      description:
        "Quick and reliable customized mixed-signal hardware solutions for global clients.",
      image: "/assets/images/img_main_visual_04.png",
    },
  ];

  const [currentProduct, setCurrentProduct] = useState(Products[0]);

  return (
    <section className="lg:px-10 px-2 py-4 ">
      <div>
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-extrabold mb-2">Products & Services</h1>
        <p className="lg:text-xl text-[14px] text-gray-600 font-semibold">We provide high-quality RF Solutions.</p>
      </div>

      <div className=" md:flex md:flex-col lg:mt-4 md:mt-2">
        
        {/* LEFT – LIST */}
        <ul className="space-y-8 w-full pt-2">
          {Products.map((item, index) => {
            const isActive = currentProduct.title === item.title;

            return (
              <li
                key={index}
                className="pb-4 lg:pt-2 border-b border-gray-300 cursor-pointer group"
                onMouseEnter={() => setCurrentProduct(item)}
                onClick={() => setCurrentProduct(item)}
              >
                <div className="flex items-center gap-2 ">
                  <span
                    className={`lg:text-3xl md:text-2xl text-[14px] ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    •
                  </span>

                  <h2
                    className={`lg:text-2xl md:text-xl text-[15px] font-semibold transition ${
                      isActive ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h2>

                  {isActive && (
                    <FiArrowUpRight className="text-blue-600 lg:text-2xl md:text-xl text-[15px] ml-2" />
                  )}
                </div>

                {isActive && (
                  <p className="text-gray-600 lg:text-md md:text-[14px] text-[12px] mt-3 w-[80%]">
                    {item.description}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        {/* RIGHT – ROTATING IMAGE */}
        <div className="flex justify-center items-center mt-10">
          <div
            key={currentProduct.image} 
            className="lg:w-96 lg:h-96 md:w-75 md:h-75 w-60 h-60 rounded-full bg-gray-100 shadow-lg relative animate-rotateProduct "
          >
            <Image
              src={currentProduct.image}
              alt={currentProduct.title}
              fill
              className="object-contain px-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOrbitMQ;
