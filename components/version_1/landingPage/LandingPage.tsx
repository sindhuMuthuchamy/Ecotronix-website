"use client"
import { useState } from "react";
import { HeroCarousel, HeroSlide } from "../components/HeroCarousel";
import { FullScreenMenu } from "../components/Navbar";
import { IndustrySection } from "./SecondSection";
import { NavigationMenu } from "@/components/Navbar/NavigationMenu";
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Digital Connectivity",
    description: "Experience the pulse of modern technology as data flows seamlessly through neural networks, connecting the world in real-time.",
    video: "https://www.pexels.com/download/video/29780774/",
    mediaType: "video",
  },
  {
    id: 2,
    title: "Intelligent Texture",
    description: "Explore the intricate pathways of modern electronics where billions of transistors work in harmony to power tomorrow's innovations.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFpfGVufDB8fDB8fHwy",
    mediaType: "image",
  },
  {
    id: 3,
    title: "Infinite AI Power",
    description: "Witness the backbone of the digital age where massive server farms process petabytes of data, enabling the cloud computing revolution.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mediaType: "image",
  },
  {
    id: 4,
    title: "Urban Innovation",
    description: "Experience the pulse of modern living where architecture meets ambition and dreams touch the skyline of tomorrow.",
    image: "https://images.unsplash.com/photo-1529854140025-25995121f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    mediaType: "image",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <NavigationMenu />
      <div className="">
          <HeroCarousel
            slides={heroSlides}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
            autoPlayInterval={5000}
            onMenuClick={() => setIsMenuOpen(true)}
          />
        
      <IndustrySection />
      {/* <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
      </div>
    </div>
  );
}