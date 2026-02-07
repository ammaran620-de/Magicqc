"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Activity, ClipboardList, TrendingUp, FileDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Activity,
    title: "Article & Measurement Configuration",
    description:
      "The software enables creation, selection, and management of garment article definitions, including reference images, predefined measurement regions, measurement points, and associated tolerance criteria used during inspection.",
    cardBg: "bg-gradient-to-br from-[#214e5d]/10 to-[#214e5d]/5",
    borderColor: "border-[#214e5d]/30",
    iconBg: "bg-[#214e5d]",
    iconColor: "text-white",
    number: "01",
  },
  {
    icon: ClipboardList,
    title: "Automated Inspection Execution",
    description:
      "For each garment, the software applies the selected article definition, processes measurement data, evaluates results against stored tolerances, and assigns an inspection status using a standardized workflow.",
    cardBg: "bg-gradient-to-br from-[#f4a52d]/15 to-[#f4a52d]/5",
    borderColor: "border-[#f4a52d]/40",
    iconBg: "bg-[#f4a52d]",
    iconColor: "text-white",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Digital Records & Traceability",
    description:
      "Inspection results are stored digitally by the system, allowing records to be reviewed and grouped across articles, batches, production lines, shifts, and multiple users within a centralized data structure.",
    cardBg: "bg-gradient-to-br from-[#214e5d]/10 to-[#214e5d]/5",
    borderColor: "border-[#214e5d]/30",
    iconBg: "bg-[#214e5d]",
    iconColor: "text-white",
    number: "03",
  },
  {
    icon: FileDown,
    title: "Visualization & Data Output",
    description:
      "The software provides a real-time visual interface for inspection monitoring and supports structured export of inspection data for reporting, archiving, or integration with external systems.",
    cardBg: "bg-gradient-to-br from-[#f4a52d]/15 to-[#f4a52d]/5",
    borderColor: "border-[#f4a52d]/40",
    iconBg: "bg-[#f4a52d]",
    iconColor: "text-white",
    number: "04",
  },
];

export default function HowItHelps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger cards animation
      const cards = cardsRef.current?.querySelectorAll(".feature-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-64 h-64 bg-[#214e5d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[#f4a52d]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#f4a52d] font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Software Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#214e5d] mb-6 leading-tight">
            Software <span className="text-[#f4a52d]">Features</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Comprehensive software suite for measurement tracking, analysis, and reporting.
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="feature-card group relative"
            >
              <div className={`h-full rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1 ${benefit.cardBg} ${benefit.borderColor} relative overflow-hidden`}>
                {/* Number indicator */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-slate-900/5 select-none">
                  {benefit.number}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${benefit.iconBg} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#214e5d] mb-4 group-hover:text-[#1a3d4a] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                {/* Hover line effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#214e5d] to-[#f4a52d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
