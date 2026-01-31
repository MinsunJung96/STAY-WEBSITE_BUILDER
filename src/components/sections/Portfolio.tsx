"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/content";

export function Portfolio() {
  const { portfolio } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeItem = portfolio.items[activeIndex];

  return (
    <section id="portfolio" className="bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-full lg:h-screen">
        {/* Left Side - Info Panel */}
        <div className="col-span-1 flex flex-col justify-center pt-[72px] px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
          {/* Title & Description */}
          <div className="overflow-hidden flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                className="h-full flex flex-col"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 line-clamp-2">
                  {activeItem.title}
                </h2>
                <p className="text-neutral-600 leading-relaxed line-clamp-4 lg:line-clamp-none">
                  {activeItem.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Link */}
          <div className="mt-6 lg:mt-0 flex-shrink-0">
            <Link
              href="#"
              className="inline-flex items-center gap-3 text-sm tracking-wide hover:gap-5 transition-all duration-300 group"
            >
              <span>{portfolio.ctaText}</span>
              <span className="w-8 h-[1px] bg-neutral-900 group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Side - Image Grid (2x2) */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 grid-rows-2 h-[50vh] lg:h-screen">
          {portfolio.items.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="relative overflow-hidden bg-neutral-900"
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onClick={(e) => {
                if (isMobile && activeIndex !== index) {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    activeIndex === index ? "scale-100" : "scale-100 grayscale-[30%]"
                  }`}
                />
                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
