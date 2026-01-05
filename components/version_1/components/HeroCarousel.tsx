import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import Image from "next/image";

export interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  mediaType: "image" | "video";
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
  autoPlayInterval?: number;
  onMenuClick?: () => void;
}

export function HeroCarousel({
  slides,
  currentSlide,
  onSlideChange,
  autoPlayInterval = 5000,
  onMenuClick,
}: HeroCarouselProps) {
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlayInterval]);

  const handleNext = () => {
    setDirection(1);
    onSlideChange((currentSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    onSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    onSlideChange(index);
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const textVariants = {
    enter: {
      y: 50,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -50,
      opacity: 0,
    },
  };

  return (
    <div
      className="relative w-full h-[calc(100vh-150px)] overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >




      {/* Image carousel */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-10" />
          {slides[currentSlide].mediaType === "image" && (
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          )}
          {slides[currentSlide].mediaType === "video" && (
            <video
              ref={(el) => {
                videoRefs.current[currentSlide] = el;
              }}
              src={slides[currentSlide].video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          )}
        </motion.div>
      </AnimatePresence>
      {/* Menu button in top right corner */}
      {/* {onMenuClick && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          onClick={onMenuClick}
          className="absolute top-8 right-8 z-40 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors group"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      )} */}
{/* 
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute top-8 left-8 z-40"
      >
        <Image 
          src="/assets/images/logo.svg"
          alt="Logo"
          width={175}
          height={175}
          className="h-10 md:h-12 lg:h-14 w-auto object-contain"
        />
      </motion.div> */}

      {/* Content overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-5xl bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Title with shimmer effect */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="relative inline-block">
                {slides[currentSlide].title}
                <motion.span
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "linear",
                  }}
                  style={{ mixBlendMode: "overlay" }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 justify-center flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-linear-to-r from-violet-600 to-purple-600 text-white rounded-full relative overflow-hidden group"
              >
                <span className="relative z-10">Explore More</span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 hover:bg-white/20 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-6 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrev}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-12"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
            {index === currentSlide && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 rounded-full border-2 border-white/50"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <motion.div
          key={currentSlide}
          className="h-full bg-linear-to-r from-violet-500 via-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
        />
      </div>
    </div>
  );
}