"use client";

import { motion } from "framer-motion";
import { Monitor, Lightbulb, Layout } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Measurement Station",
    description:
      "Rigid planar platform designed for flat placement of garments during inspection.",
  },
  {
    icon: Lightbulb,
    title: "Shadow-Free Illumination",
    description:
      "Uniform diffused lighting system that illuminates the platform without casting shadows.",
  },
  {
    icon: Monitor,
    title: "Dual Display Interface",
    description:
      "Touchscreen operator display for input and control, plus a second monitoring display for remote viewing.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#214e5d]" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold text-[#214e5d] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#1E293B] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
