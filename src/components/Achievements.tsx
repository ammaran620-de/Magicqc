"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = [
  "Vision-based measurement replaces manual tape measurement",
  "Automated PASS/FAIL determination based on defined tolerances",
  "Digital storage of all measurement results and inspection decisions",
  "Real-time production monitoring and status tracking",
  "Multi-facility data aggregation and comparison",
  "Automated report generation in PDF and CSV formats",
];

export default function Achievements() {
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#214e5d] mb-2">
              System Capabilities
            </h2>
            <p className="text-lg text-[#334155] mb-5">
              MagicQC combines hardware and software to provide a complete
              garment measurement solution. Key capabilities include:
            </p>

            {/* Punchline - Prominent */}
            <div className="py-4">
              <p className="text-2xl md:text-3xl font-bold text-[#f4a52d] tracking-tight">
                "CONFIDENCE IN EVERY SHIPMENT"
              </p>
            </div>

            <ul className="space-y-2">
              {capabilities.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-5 h-5 bg-[#214e5d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#334155] text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm"
          >
            <div className="space-y-4">
              {/* Stats */}
              <div className="space-y-3">
                {/* Top Row - 3 boxes */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center border-2 border-[#f4a52d]">
                    <p className="text-2xl font-bold text-[#214e5d] mb-0.5">±0.1mm</p>
                    <p className="text-sm text-[#334155]">Accuracy</p>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center border-2 border-[#f4a52d]">
                    <p className="text-2xl font-bold text-[#214e5d] mb-0.5">5 Sec</p>
                    <p className="text-sm text-[#334155]">Speed</p>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center border-2 border-[#f4a52d]">
                    <p className="text-2xl font-bold text-[#214e5d] mb-0.5">PASS/FAIL</p>
                    <p className="text-sm text-[#334155]">Results</p>
                  </div>
                </div>
                {/* Bottom Row - 2 boxes centered */}
                <div className="grid grid-cols-2 gap-3 max-w-[66%] mx-auto">
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center border-2 border-[#f4a52d]">
                    <p className="text-2xl font-bold text-[#214e5d] mb-0.5">PDF/CSV</p>
                    <p className="text-sm text-[#334155]">Export</p>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 text-center border-2 border-[#f4a52d]">
                    <p className="text-2xl font-bold text-[#214e5d] mb-0.5">Real-Time</p>
                    <p className="text-sm text-[#334155]">Monitoring</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-4 border-t border-[#E2E8F0] text-center">
                <p className="text-lg text-[#214e5d] italic font-medium">
                  "Measure once, measure right."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
