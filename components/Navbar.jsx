"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#953949]/85 backdrop-blur-md border-b border-white/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-[#953949] font-black font-mono flex items-center justify-center text-sm shadow">
            R
          </div>
          <span className="font-bold text-white tracking-wider text-base">
            ROHITH
          </span>
        </button>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-2 bg-black/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              {link.title}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-1.5 rounded-xl bg-white text-[#953949] font-bold text-xs uppercase tracking-wider hover:bg-rose-100 transition-colors cursor-pointer shadow"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 rounded-lg bg-white/20 text-white flex items-center justify-center"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#953949] border-b border-white/20 px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left py-2 text-white font-medium text-sm"
            >
              {link.title}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="w-full py-2.5 rounded-lg bg-white text-[#953949] font-bold text-xs uppercase text-center mt-2"
          >
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
