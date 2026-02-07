"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, Gauge, Database, Settings, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const valuePoints = [
  {
    icon: Eye,
    title: "Intelligent Vision Technology",
    description:
      "Replaces manual tape measurement with automated vision-based measurement. The system captures garment dimensions without physical contact, reducing handling time and operator fatigue.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Gauge,
    title: "Automated Size Verification",
    description:
      "Instantly determines PASS or FAIL status based on predefined tolerances. Each garment is evaluated against specifications, providing consistent and objective results.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconGradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Database,
    title: "Centralized Data Storage",
    description:
      "All measurement results and inspection decisions are stored digitally. Records from different operators, shifts, or batches can be reviewed and compared using a unified system.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconGradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Settings,
    title: "Configurable Measurements",
    description:
      "Measurement definitions are configured per article and applied consistently to every inspected piece. The system adapts to different garment styles and specification requirements.",
    gradient: "from-orange-500/20 to-amber-500/20",
    iconGradient: "from-orange-500 to-amber-500",
  },
];

export default function Value() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with text reveal
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

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll(".value-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            y: 100,
            opacity: 0,
            rotateX: 10,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #214e5d 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f4a52d]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#214e5d]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#f4a52d] font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Core Technology
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#214e5d] leading-tight">
            How MagicQC <span className="text-[#f4a52d]">Works</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A complete measurement solution combining specialized hardware
            with intelligent software for automated garment size verification.
          </p>
        </div>

        {/* Value Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {valuePoints.map((point, index) => (
            <div
              key={point.title}
              className="value-card group relative"
              style={{ perspective: '1000px' }}
            >
              <div className={`h-full bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-slate-100/50 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 relative overflow-hidden`}>
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${point.iconGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <point.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-[#214e5d] group-hover:text-[#1a3d4a] transition-colors">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {point.description}
                  </p>
                </div>

                {/* Index number */}
                <span className="absolute top-6 right-6 text-7xl font-bold text-slate-100 select-none transition-colors group-hover:text-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Bottom border effect */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${point.iconGradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white rounded-2xl p-8 lg:p-10 border-2 border-slate-200">
            <div className="text-left">
              <p className="text-xl lg:text-2xl text-[#214e5d] font-semibold mb-2">
                "Ready to automate your QC process?"
              </p>
              <p className="text-slate-600">
                "See how MagicQC can transform your garment measurement workflow."
              </p>
            </div>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#f4a52d] hover:bg-[#e09420] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
