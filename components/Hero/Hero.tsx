import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section
      className="flex items-center justify-center px-4 py-16 max-w-7xl mx-auto"
      style={{ minHeight: "calc(100vh - 7rem)" }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-[2rem] md:text-[3rem] leading-snug font-light text-[#1B1F26B8]">
            Great{" "}
            <span className="bg-linear-to-r from-[#17c3cf] to-[#1e6add] bg-clip-text text-transparent font-bold">
              Product
            </span>{" "}
            is <br />
            <span className="font-extrabold text-[#1B1F26B8]">
              built by great
            </span>{" "}
            <span className="text-sky-400 font-bold">teams</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-[#1B1F26B8] leading-relaxed">
            We help build and manage a team of world-class developers to bring
            your vision to life.
          </p>

          <Button variant="primary" className="mt-8 px-6 py-3 rounded-lg">
            Let&apos;s get started!
          </Button>
        </div>

        <div className="mt-10 md:mt-0 md:ml-16">
          <Image
            src="/assets/hero.png"
            alt="Team collaboration"
            className="w-full h-auto"
            width={1550}
            height={1400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
