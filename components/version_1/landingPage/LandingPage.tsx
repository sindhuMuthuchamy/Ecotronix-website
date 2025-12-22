"use client"
import { useState } from "react";
import { HeroCarousel, HeroSlide } from "../components/HeroCarousel";
import { FullScreenMenu } from "../components/Navbar";
const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Digital Connectivity",
    description: "Experience the pulse of modern technology as data flows seamlessly through neural networks, connecting the world in real-time.",
    video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
    mediaType: "video",
  },
  {
    id: 2,
    title: "Intelligent Architecture",
    description: "Explore the intricate pathways of modern electronics where billions of transistors work in harmony to power tomorrow's innovations.",
    image: "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjE0ODk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    mediaType: "image",
  },
  {
    id: 3,
    title: "Infinite Processing Power",
    description: "Witness the backbone of the digital age where massive server farms process petabytes of data, enabling the cloud computing revolution.",
    image: "https://images.unsplash.com/photo-1527409335569-f0e5c91fa707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjYwNDk5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mediaType: "image",
  },
  {
    id: 4,
    title: "Urban Innovation",
    description: "Experience the pulse of modern living where architecture meets ambition and dreams touch the skyline of tomorrow.",
    image: "https://images.unsplash.com/photo-1727942019403-cf4aecfc3276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGR1c2t8ZW58MXx8fHwxNzY2MTM1MDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    mediaType: "image",
  },
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen">
      <HeroCarousel
        slides={heroSlides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
        autoPlayInterval={5000}
        onMenuClick={() => setIsMenuOpen(true)}
      />
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}