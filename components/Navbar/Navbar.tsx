"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const lastScrollY = useRef(0);

  const navLinks = [
    { href: "#about", label: "회사소개" },
    { href: "#business", label: "사업분야" },
    { href: "#research", label: "연구개발" },
    { href: "#contact", label: "고객지원" },
    { href: "#news", label: "뉴스/공지" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        if (currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when section is in the middle of viewport
    );

    const sections = document.querySelectorAll("div[id], section[id]");
    sections.forEach((section) => {
      if (navLinks.some((link) => link.href === `#${section.id}`)) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []); // Only run once on mount

  return (
    <nav
      className={`bg-white shadow-md py-6 sticky top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex justify-between items-center px-4 max-w-7xl">
        <Link href="/" className="text-lg font-bold shrink-0">
          <Image
            src="/assets/images/logo.svg"
            alt="BusinessName"
            width={175}
            height={175}
            className="h-auto w-[100px] md:w-[140px] lg:w-[175px]"
          />
        </Link>

        <ul className="hidden md:flex space-x-7 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors font-medium ${
                  activeSection === link.href
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-500"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(link.href);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
        <div className="hidden md:flex">
          <Link href="#contact">
            <Button variant="gradient">문의하기</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 right-0 z-50">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 font-medium ${
                    activeSection === link.href
                      ? "text-blue-600"
                      : "text-slate-600"
                  }`}
                  onClick={(e) => {
                     e.preventDefault();
                     setMenuOpen(false);
                     document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                     setActiveSection(link.href);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
