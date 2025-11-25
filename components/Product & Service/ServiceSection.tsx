"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";


const ServiceSection = () => {
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
    <section className="px-12 py-20">

      <div>
        <h1 className="text-5xl font-extrabold mb-3">Products & Services</h1>
        <p className="text-xl text-gray-600">We provide high-quality RF Solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-start">
        
{/* LEFT SIDE */}

        <ul className="space-y-10 w-full">
          {Products.map((item, i) => {
            const isActive = currentProduct.title === item.title;

            return (
              <li
                key={i}
                className="pb-10 border-b border-gray-300 group"
              >
                <button
                  onClick={() => setCurrentProduct(item)}
                  className="flex items-center gap-3 w-full text-left"
                >

                  <span
                    className={`text-3xl ${
                      isActive ? "text-blue-600" : "text-gray-400"
                    }`}
                  >
                    •
                  </span>

                  <h2
                    className={`text-3xl font-semibold transition ${
                      isActive ? "text-black" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h2>

                  {isActive && (
                    <FiArrowUpRight className="text-blue-600 text-2xl ml-2" />
                  )}
                </button>

                {isActive && (
                  <p className="text-gray-600 text-md mt-3 w-[80%]">
                    {item.description}
                  </p>
                )}
              </li>
            );
          })}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center">
          
          <div className="w-96 h-96 rounded-full shadow-lg relative">     
            <Image
              src={currentProduct.image}
              alt={currentProduct.title}
              fill
              className="object-contain p-1 border-blue-500 rounded-full"
            />
          </div>
         
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
