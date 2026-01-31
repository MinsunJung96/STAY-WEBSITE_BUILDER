"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigation } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "top-4 left-4 right-4 md:left-6 md:right-6"
          : "top-0 left-0 right-0"
      }`}
    >
      <motion.div
        initial={false}
        animate={{
          borderRadius: isScrolled ? 16 : 0,
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0)",
          boxShadow: isScrolled
            ? "0 10px 15px -3px rgba(0, 0, 0, 0.05)"
            : "0 0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderWidth: 1, borderStyle: "solid" }}
        className="backdrop-blur-xl"
      >
        <div className={`${isScrolled ? "px-6" : "container-custom"}`}>
          <nav className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-14" : "h-20"
          }`}>
            {/* Logo */}
            <a
              href="#"
              className={`font-bold tracking-tight transition-all duration-500 ${
                isScrolled
                  ? "text-xl text-neutral-900"
                  : "text-2xl text-white"
              }`}
            >
              {navigation.logo}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-neutral-600 hover:text-neutral-900"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className={`transition-all duration-300 ${
                  isScrolled
                    ? ""
                    : "bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                }`}
              >
                상담 신청
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-neutral-900" : "bg-white"
                  } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-neutral-900" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 ${
                    isScrolled ? "bg-neutral-900" : "bg-white"
                  } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden overflow-hidden ${
                isScrolled ? "" : "bg-black/20 backdrop-blur-xl"
              }`}
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navigation.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium py-2 ${
                      isScrolled ? "text-neutral-900" : "text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="mt-4">상담 신청</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
