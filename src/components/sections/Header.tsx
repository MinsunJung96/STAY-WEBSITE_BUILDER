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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tight">
            {navigation.logo}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">상담 신청</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-primary transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
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
            className="md:hidden bg-white border-t"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navigation.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium py-2"
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
    </header>
  );
}
