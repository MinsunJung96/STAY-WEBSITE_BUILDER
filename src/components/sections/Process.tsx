"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function Process() {
  const { process } = siteContent;

  return (
    <section id="process" className="section-padding bg-primary text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-4">{process.tagline}</p>
          <h2 className="heading-2 mb-4">{process.headline}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {process.description}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < process.steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/20 -translate-x-1/2" />
              )}

              {/* Step Number */}
              <div className="text-5xl font-bold text-white/10 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70 mb-4">{step.description}</p>

              {/* Duration Badge */}
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
