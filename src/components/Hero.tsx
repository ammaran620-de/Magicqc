"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for cinematic entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate the glow first
      tl.fromTo(
        glowRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }
      );

      // Headline reveal with split effect
      tl.fromTo(
        headlineRef.current,
        { y: 80, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
        "-=1"
      );

      // Subline
      tl.fromTo(
        sublineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

      // Description
      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.5"
      );

      // CTA buttons
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      // Image with scale and reveal
      tl.fromTo(
        imageRef.current,
        {
          scale: 0.9,
          opacity: 0,
          y: 60,
          rotateY: -5,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power2.out"
        },
        "-=0.8"
      );



      // Subtle glow pulse
      gsap.to(glowRef.current, {
        scale: 1.1,
        opacity: 0.6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div
          ref={glowRef}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#214e5d]/20 to-[#f4a52d]/20 rounded-full blur-3xl"
        />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-[#f4a52d]/10 to-transparent rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#214e5d 1px, transparent 1px), linear-gradient(90deg, #214e5d 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#214e5d]/5 border border-[#214e5d]/10 text-[#214e5d] px-4 py-2 rounded-full text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f4a52d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f4a52d]"></span>
              </span>
              AI-Powered Quality Control
            </motion.div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#214e5d] leading-[1.1] tracking-tight"
            >
              Automated Garment
              <span className="block text-[#f4a52d]">Size Measurement</span>
              <span className="block">System</span>
            </h1>

            <p
              ref={sublineRef}
              className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl"
            >
              MagicQC brings <span className="text-[#214e5d] font-semibold">speed</span>, <span className="text-[#214e5d] font-semibold">accuracy</span>, and <span className="text-[#214e5d] font-semibold">consistency</span> to garment size verification.
            </p>

            <p
              ref={descRef}
              className="text-lg text-slate-500 leading-relaxed max-w-lg"
            >
              Replace manual tape measurement with intelligent vision technology.
              Reduce human error and improve repeatability across all garment types.
            </p>

            {/* Punchline - Prominent */}
            <div className="pt-4 pb-2">
              <p className="text-2xl md:text-3xl font-bold text-[#214e5d] tracking-tight">
                "FAST ACCURATE RELIABLE"
              </p>
            </div>



            <div ref={ctaRef} className="pt-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#214e5d] hover:bg-[#1a3d4a] text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#214e5d]/25 hover:shadow-xl hover:shadow-[#214e5d]/30 hover:scale-[1.02]"
              >
                Request Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>



          {/* Product Image */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center perspective-1000"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#214e5d]/20 via-[#f4a52d]/10 to-transparent rounded-3xl blur-2xl scale-110" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/50 shadow-2xl shadow-slate-900/10 bg-white">
              {/* Decorative frame */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#214e5d] via-[#f4a52d] to-[#214e5d] rounded-2xl opacity-20" />

              <Image
                src="/magic_image.jpg"
                alt="MagicQC Automated Measurement System"
                width={680}
                height={520}
                className="relative w-full h-auto object-cover rounded-2xl"
                style={{ maxHeight: '520px' }}
                priority
              />

              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 rounded-2xl" />
            </div>


          </div>
        </div>
      </div>


    </section>
  );
}
