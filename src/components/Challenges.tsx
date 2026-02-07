"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, FileQuestion, TrendingDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Time-Consuming Manual Processes",
    description:
      "Measuring each garment by hand takes valuable time. As production volumes increase, teams often struggle to keep up, leading to sampling compromises or rushed inspections that miss sizing issues.",
  },
  {
    icon: AlertTriangle,
    title: "Inconsistent Results Between Operators",
    description:
      "Different operators may measure the same garment differently, depending on technique, experience, or fatigue. This variability makes it difficult to establish a reliable baseline for sizing decisions.",
  },
  {
    icon: FileQuestion,
    title: "Lack of Structured Documentation",
    description:
      "Paper-based records or scattered spreadsheets make it hard to track trends, retrieve historical data, or demonstrate compliance during audits. Without organized documentation, valuable insights are lost.",
  },
  {
    icon: TrendingDown,
    title: "Delayed Detection of Sizing Issues",
    description:
      "When measurement data is not captured or analyzed efficiently, sizing problems may go unnoticed until later stages—or worse, until products reach customers. Early detection is essential for minimizing rework and protecting brand reputation.",
  },
];

export default function Challenges() {
  return (
    <section className="py-14 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#214e5d] mb-2">
            Common Challenges in Garment Measurement
          </h2>
          <p className="text-lg text-slate-700">
            Factories and brands face real obstacles when trying to maintain sizing 
            consistency. Understanding these challenges is the first step toward 
            finding better ways to measure.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 border-2 border-[#f4a52d] hover:shadow-md hover:border-[#e5941f] transition-all"
            >
              <div className="w-10 h-10 bg-[#f4a52d] rounded-lg flex items-center justify-center mb-3">
                <challenge.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#214e5d] mb-2">
                {challenge.title}
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
