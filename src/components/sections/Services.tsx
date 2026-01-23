"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/content";

export function Services() {
  const { services } = siteContent;

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium mb-4">{services.tagline}</p>
          <h2 className="heading-2 mb-4">{services.headline}</h2>
          <p className="body-large max-w-2xl mx-auto">{services.description}</p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-accent text-sm font-medium mb-2">
                {service.subtitle}
              </p>
              <h3 className="heading-3 mb-4">{service.title}</h3>
              <p className="body-regular mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
