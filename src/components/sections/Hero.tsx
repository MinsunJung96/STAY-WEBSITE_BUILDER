"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent font-medium mb-4"
          >
            {hero.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-1 whitespace-pre-line mb-6"
          >
            {hero.headline}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-large mb-8"
          >
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button size="lg">{hero.cta.primary}</Button>
            <Button variant="outline" size="lg">
              {hero.cta.secondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-8 md:gap-12"
          >
            {hero.stats.map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
