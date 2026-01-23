"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";

export function Portfolio() {
  const { portfolio } = siteContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAfter, setShowAfter] = useState<{ [key: number]: boolean }>({});

  const toggleBeforeAfter = (id: number) => {
    setShowAfter((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-4">{portfolio.tagline}</p>
          <h2 className="heading-2 mb-4">{portfolio.headline}</h2>
          <p className="body-large max-w-2xl mx-auto">{portfolio.description}</p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Container with Before/After */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => toggleBeforeAfter(item.id)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showAfter[item.id] ? "after" : "before"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={showAfter[item.id] ? item.afterImage : item.beforeImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Before/After Label */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium">
                    {showAfter[item.id] ? "After" : "Before"}
                  </span>
                </div>

                {/* Click hint */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium">
                    클릭하여 전환
                  </span>
                </div>

                {/* Improvement Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-medium">
                    {item.improvement}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-accent">
                    {item.category}
                  </span>
                  <span className="text-xs text-secondary">•</span>
                  <span className="text-xs text-secondary">{item.location}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
