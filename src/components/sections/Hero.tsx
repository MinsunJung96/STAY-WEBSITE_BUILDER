"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";

const heroImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
];

const heroTitles = [
  "머물고 싶은",
  "추억을 만드는",
  "다시 가고 싶은",
];

export function Hero() {
  const { hero } = siteContent;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const isTransitioning = useRef(false);
  const lastWheelTime = useRef(0);
  const accumulatedDelta = useRef(0);

  useEffect(() => {
    // Lenis 스크롤 멈추기 (히어로에서 이미지 전환하는 동안)
    const lenis = (window as any).__lenis;

    if (!isComplete && lenis) {
      lenis.stop();
    }

    const handleWheel = (e: WheelEvent) => {
      if (isComplete) return;

      e.preventDefault();

      // 트랜지션 중이면 무시
      if (isTransitioning.current) return;

      const now = Date.now();

      // 300ms 이내의 스크롤은 누적
      if (now - lastWheelTime.current > 300) {
        accumulatedDelta.current = 0;
      }

      lastWheelTime.current = now;
      accumulatedDelta.current += e.deltaY;

      // 누적된 delta가 임계값을 넘어야 전환
      const threshold = 50;

      if (Math.abs(accumulatedDelta.current) < threshold) return;

      const direction = accumulatedDelta.current > 0 ? 1 : -1;
      accumulatedDelta.current = 0;

      // 아래로 스크롤
      if (direction > 0) {
        if (currentImageIndex < heroImages.length - 1) {
          isTransitioning.current = true;
          setCurrentImageIndex((prev) => prev + 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        } else {
          // 마지막 이미지에서 아래로 스크롤하면 완료
          setIsComplete(true);
          if (lenis) {
            lenis.start();
          }
        }
      }
      // 위로 스크롤
      else if (direction < 0) {
        if (currentImageIndex > 0) {
          isTransitioning.current = true;
          setCurrentImageIndex((prev) => prev - 1);
          setTimeout(() => {
            isTransitioning.current = false;
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentImageIndex, isComplete]);

  // 페이지 상단으로 돌아왔을 때 다시 잠금
  useEffect(() => {
    const handleScroll = () => {
      if (isComplete && window.scrollY === 0) {
        setIsComplete(false);
        setCurrentImageIndex(heroImages.length - 1);
        const lenis = (window as any).__lenis;
        if (lenis) {
          lenis.stop();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isComplete]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Background Images with Scroll Transition */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Image Indicator Dots */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-white h-8"
                : "bg-white/40 h-2"
            }`}
          />
        ))}
      </div>

      {/* Minimal Text Content - Magazine Style */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start pb-20 md:pb-32 px-6 md:px-12">
          {/* Main Headline - Large & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none tracking-tight text-left flex items-baseline">
              <span className="relative inline-block overflow-hidden" style={{ height: "1em" }}>
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={currentImageIndex}
                    initial={currentImageIndex === 0 ? false : { y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      y: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
                      opacity: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                    }}
                    className="inline-block"
                  >
                    {heroTitles[currentImageIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
                          </h1>
          </motion.div>

          {/* Tagline - Small, Understated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 md:mt-8 text-sm md:text-base text-white/80 tracking-widest uppercase"
          >
            {hero.tagline}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 md:mt-16"
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-12 bg-white/50"
              />
              <span className="text-xs text-white/60 tracking-widest uppercase">
                Scroll
              </span>
            </div>
          </motion.div>
      </div>

      {/* Issue Number / Edition - Magazine Style Corner Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-24 md:top-32 right-6 md:right-12 text-right text-white"
      >
        <p className="text-xs tracking-widest uppercase text-white/60">Vol. 01</p>
        <p className="text-xs tracking-widest uppercase text-white/60 mt-1">2024</p>
      </motion.div>
    </section>
  );
}
