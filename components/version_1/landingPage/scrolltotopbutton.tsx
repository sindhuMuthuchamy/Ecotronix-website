"use client";

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        h-12 w-12
        rounded-full
        bg-purple-400 text-white
        shadow-lg
        flex items-center justify-center
        hover:bg-purple-600
        transition-all duration-300
      "
      aria-label="Scroll to top"
    >
      TOP
    </button>
  );
};

export default ScrollToTopButton;
