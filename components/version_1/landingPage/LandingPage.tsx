"use client"
import { useState } from "react";
import { HeroCarousel, HeroSlide } from "../components/HeroCarousel";
import { FullScreenMenu } from "../components/Navbar";
import { IndustrySection } from "./SecondSection";
import { BusinessSection } from "./ThirdSection";
import { ContactSection } from "./FourthSection";
import { NavigationMenu } from "@/components/Navbar/NavigationMenu";
import ScrollToTopButton from "./scrolltotopbutton";
import Navbar from "@/components/Navbar/Navbar";
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Marine",
    description: "Discover the future of maritime innovation, where advanced engineering meets the vast power of the ocean to drive global connectivity.",
    video: "https://www.pexels.com/download/video/4825305/",
    mediaType: "video",
  },
  {
    id: 2,
    title: "Based on AI",
    description: "Experience the power of AI as it transforms industries, drives innovation, and shapes the future of technology.",
    video: "https://www.pexels.com/download/video/14209120/",
    mediaType: "video",
  },
  {
    id: 3,
    title: "Smart Factory",
    description: "Experience the future of manufacturing where automation and AI work together to create a more efficient and sustainable production process.",
    video: "https://www.pexels.com/download/video/30900354/",
    mediaType: "video",
  }
  // {
  //   id: 4,
  //   title: "Urban Innovation",
  //   description: "Experience the pulse of modern living where architecture meets ambition and dreams touch the skyline of tomorrow.",
  //   image: "https://images.unsplash.com/photo-1529854140025-25995121f16f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5ub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  //   mediaType: "image",
  // },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* <NavigationMenu /> */}
      <Navbar />
      <div className="">
          <HeroCarousel
            slides={heroSlides}
            currentSlide={currentSlide}
            onSlideChange={setCurrentSlide}
            autoPlayInterval={5000}
            onMenuClick={() => setIsMenuOpen(true)}
          />
        
      <IndustrySection />
      <BusinessSection />
      <ContactSection />
      {/* <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
      <ScrollToTopButton />
      </div>
    </div>
  );
}