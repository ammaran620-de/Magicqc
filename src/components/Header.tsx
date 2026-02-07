"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Overview", href: "#overview", isPage: false },
  { name: "How It Helps", href: "#how-it-helps", isPage: false },
  { name: "Applications", href: "#applications", isPage: false },
  { name: "Value", href: "#value", isPage: false },
  { name: "Video", href: "/video", isPage: true },
  { name: "Contact", href: "#contact", isPage: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.filter(link => !link.isPage).map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button 
            onClick={() => scrollToSection("#overview")} 
            className="relative h-20 w-72 -ml-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/MagicQC Logo Transparent BG (1).png"
              alt="MagicQC"
              fill
              className="object-contain object-left rounded-lg"
              priority
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-12">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative font-semibold transition-all px-4 py-2 bg-gradient-to-r from-[#214e5d] to-[#2a6275] text-white rounded-full hover:shadow-lg hover:shadow-[#214e5d]/25 hover:scale-105 flex items-center gap-2 group"
                >
                  {/* Pulsing indicator dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4a52d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4a52d]"></span>
                  </span>
                  {link.name}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-medium transition-colors py-1 ${
                    activeSection === link.href.substring(1)
                      ? "text-[#214e5d]"
                      : "text-[#1E293B] hover:text-[#214e5d]"
                  }`}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#f4a52d] transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "w-full"
                        : "w-0"
                    }`}
                  />
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-center gap-2 w-full py-3 font-semibold bg-gradient-to-r from-[#214e5d] to-[#2a6275] text-white rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {/* Pulsing indicator dot */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4a52d] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4a52d]"></span>
                    </span>
                    {link.name}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left py-2 font-medium ${
                      activeSection === link.href.substring(1)
                        ? "text-[#1E3A5F]"
                        : "text-[#1E293B] hover:text-[#1E3A5F]"
                    }`}
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
