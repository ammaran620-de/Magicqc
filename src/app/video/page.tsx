"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, 
  Pause, 
  Zap, 
  Target, 
  RefreshCw, 
  Clock,
  AlertTriangle,
  TrendingUp,
  Shield,
  Hand, 
  ArrowLeft,
  ArrowRight,
  Volume2,
  VolumeX,
  XCircle
} from "lucide-react";

const manualProblems = [
  { icon: AlertTriangle, text: "Human error in readings", delay: 0 },
  { icon: Clock, text: "Time-consuming process", delay: 0.1 },
  { icon: XCircle, text: "Inconsistent measurements", delay: 0.2 },
  { icon: XCircle, text: "Operator dependency", delay: 0.3 },
];

const magicQCBenefits = [
  { icon: Zap, text: "Results in 5 seconds", delay: 0 },
  { icon: Target, text: "±0.1mm precision", delay: 0.1 },
  { icon: RefreshCw, text: "100% repeatability", delay: 0.2 },
  { icon: Shield, text: "Zero human bias", delay: 0.3 },
];

const comparisonStats = [
  { label: "Measurement Time", manual: "2-3 min", automated: "5 sec", icon: Clock },
  { label: "Accuracy", manual: "±2-5mm", automated: "±0.1mm", icon: Target },
  { label: "Repeatability", manual: "~70%", automated: "100%", icon: RefreshCw },
  { label: "Operator Training", manual: "Weeks", automated: "Hours", icon: TrendingUp },
];

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState({ manual: false, automated: false });
  const [isMuted, setIsMuted] = useState({ manual: true, automated: true });
  const [progress, setProgress] = useState({ manual: 0, automated: 0 });
  const manualVideoRef = useRef<HTMLVideoElement>(null);
  const automatedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      if (manualVideoRef.current) {
        const manualProgress = (manualVideoRef.current.currentTime / manualVideoRef.current.duration) * 100;
        setProgress(prev => ({ ...prev, manual: manualProgress || 0 }));
      }
      if (automatedVideoRef.current) {
        const autoProgress = (automatedVideoRef.current.currentTime / automatedVideoRef.current.duration) * 100;
        setProgress(prev => ({ ...prev, automated: autoProgress || 0 }));
      }
    };

    const interval = setInterval(updateProgress, 100);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = (video: "manual" | "automated") => {
    const videoRef = video === "manual" ? manualVideoRef : automatedVideoRef;
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(prev => ({ ...prev, [video]: true }));
      } else {
        videoRef.current.pause();
        setIsPlaying(prev => ({ ...prev, [video]: false }));
      }
    }
  };

  const toggleMute = (video: "manual" | "automated") => {
    const videoRef = video === "manual" ? manualVideoRef : automatedVideoRef;
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(prev => ({ ...prev, [video]: videoRef.current!.muted }));
    }
  };

  const playBoth = () => {
    if (manualVideoRef.current && automatedVideoRef.current) {
      manualVideoRef.current.currentTime = 0;
      automatedVideoRef.current.currentTime = 0;
      manualVideoRef.current.play();
      automatedVideoRef.current.play();
      setIsPlaying({ manual: true, automated: true });
    }
  };

  return (
    <main className="min-h-screen bg-[#fafbfc]">
      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-3 text-[#214e5d] hover:text-[#f4a52d] transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-[#214e5d]/10 flex items-center justify-center group-hover:bg-[#f4a52d]/10 transition-colors">
                <ArrowLeft size={18} />
              </div>
              <span className="font-medium hidden sm:block">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-40">
                <Image
                  src="/MagicQC Logo Transparent BG (1).png"
                  alt="MagicQC"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <Link 
              href="/#contact"
              className="bg-[#f4a52d] hover:bg-[#e09420] text-[#214e5d] font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-[#f4a52d]/25"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Gradient */}
      <section className="relative pt-16 pb-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#214e5d]/5 via-transparent to-[#f4a52d]/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#214e5d]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#f4a52d]/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#214e5d] mb-6 leading-tight">
              See the <span className="text-[#f4a52d]">Difference</span> in Seconds
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Watch how MagicQC transforms garment measurement from a slow, error-prone manual process 
              into a fast, precise, and fully automated operation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Video Comparison Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Play Both Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <button
              onClick={playBoth}
              className="group flex items-center gap-3 bg-gradient-to-r from-[#214e5d] to-[#2a6275] hover:from-[#1a3d4a] hover:to-[#214e5d] text-white font-semibold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-[#214e5d]/25 hover:shadow-2xl hover:shadow-[#214e5d]/30 hover:scale-105"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play size={24} className="ml-1" />
              </div>
              <div className="text-left">
                <div className="text-lg">Play Side-by-Side Comparison</div>
                <div className="text-white/70 text-sm">Watch both videos simultaneously</div>
              </div>
            </button>
          </motion.div>

          {/* Video Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Manual Video Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200/50 hover:shadow-2xl transition-all duration-500">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Hand size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">Manual Measurement</h3>
                        <p className="text-white/70 text-sm">Traditional tape method</p>
                      </div>
                    </div>
                    <div className="bg-white/20 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-medium">Before</span>
                    </div>
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video bg-slate-900">
                  <video
                    ref={manualVideoRef}
                    className="w-full h-full object-contain"
                    preload="auto"
                    playsInline
                    muted
                    onEnded={() => setIsPlaying(prev => ({ ...prev, manual: false }))}
                    onPlay={() => setIsPlaying(prev => ({ ...prev, manual: true }))}
                    onPause={() => setIsPlaying(prev => ({ ...prev, manual: false }))}
                  >
                    <source src="/manual.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay */}
                  <AnimatePresence>
                    {!isPlaying.manual && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => togglePlay("manual")}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <Play className="w-8 h-8 text-red-600 ml-1" />
                        </motion.div>
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div className="h-1 bg-white/30 rounded-full mb-3 overflow-hidden">
                      <motion.div 
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${progress.manual}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePlay("manual")}
                          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                        >
                          {isPlaying.manual ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          )}
                        </button>
                        <button
                          onClick={() => toggleMute("manual")}
                          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                        >
                          {isMuted.manual ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problems List */}
                <div className="p-6 bg-red-50/50">
                  <div className="grid grid-cols-2 gap-3">
                    {manualProblems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + item.delay }}
                        className="flex items-center gap-2 text-red-700"
                      >
                        <item.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Automated Video Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border-2 border-[#214e5d]/20 hover:shadow-2xl hover:border-[#f4a52d]/50 transition-all duration-500">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#214e5d] to-[#2a6275] px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        <Zap size={20} className="text-[#f4a52d]" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">MagicQC Automated</h3>
                        <p className="text-white/70 text-sm">AI-powered measurement</p>
                      </div>
                    </div>
                    <div className="bg-[#f4a52d] px-3 py-1 rounded-full">
                      <span className="text-[#214e5d] text-sm font-bold">After</span>
                    </div>
                  </div>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video bg-slate-900">
                  <video
                    ref={automatedVideoRef}
                    className="w-full h-full object-contain"
                    preload="auto"
                    playsInline
                    muted
                    onEnded={() => setIsPlaying(prev => ({ ...prev, automated: false }))}
                    onPlay={() => setIsPlaying(prev => ({ ...prev, automated: true }))}
                    onPause={() => setIsPlaying(prev => ({ ...prev, automated: false }))}
                  >
                    <source src="/auto.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Play Button Overlay */}
                  <AnimatePresence>
                    {!isPlaying.automated && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => togglePlay("automated")}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                      >
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                        >
                          <Play className="w-8 h-8 text-[#214e5d] ml-1" />
                        </motion.div>
                      </motion.button>
                    )}
                  </AnimatePresence>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    {/* Progress Bar */}
                    <div className="h-1 bg-white/30 rounded-full mb-3 overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#f4a52d] rounded-full"
                        style={{ width: `${progress.automated}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => togglePlay("automated")}
                          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                        >
                          {isPlaying.automated ? (
                            <Pause className="w-5 h-5 text-white" />
                          ) : (
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          )}
                        </button>
                        <button
                          onClick={() => toggleMute("automated")}
                          className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                        >
                          {isMuted.automated ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="p-6 bg-emerald-50/50">
                  <div className="grid grid-cols-2 gap-3">
                    {magicQCBenefits.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + item.delay }}
                        className="flex items-center gap-2 text-emerald-700"
                      >
                        <item.icon className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Comparison Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#214e5d]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#214e5d] mb-4">
              The Numbers Speak for Themselves
            </h2>
            <p className="text-lg text-slate-600">
              A direct comparison of manual vs automated measurement
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#214e5d] to-[#2a6275]">
              <div className="p-5 md:p-6">
                <span className="text-white/70 font-medium text-sm md:text-base">Metric</span>
              </div>
              <div className="p-5 md:p-6 text-center border-l border-white/10">
                <span className="text-white/70 font-medium text-sm md:text-base">Manual</span>
              </div>
              <div className="p-5 md:p-6 text-center border-l border-white/10 bg-[#f4a52d]/20">
                <span className="text-[#f4a52d] font-bold text-sm md:text-base">MagicQC</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className={`grid grid-cols-3 ${index !== comparisonStats.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-slate-50/50 transition-colors`}
              >
                {/* Metric Name */}
                <div className="p-5 md:p-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#214e5d]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-[#214e5d]" />
                  </div>
                  <span className="text-[#214e5d] font-semibold text-sm md:text-base">{stat.label}</span>
                </div>
                
                {/* Manual Value */}
                <div className="p-5 md:p-6 flex items-center justify-center border-l border-slate-100 bg-red-50/30">
                  <span className="text-red-400 font-bold text-lg md:text-xl line-through decoration-2">{stat.manual}</span>
                </div>
                
                {/* MagicQC Value */}
                <div className="p-5 md:p-6 flex items-center justify-center border-l border-slate-100 bg-emerald-50/50">
                  <span className="text-[#214e5d] font-bold text-xl md:text-2xl">{stat.automated}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Measurements verified across multiple garment types
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#214e5d] to-[#1a3d4a]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4a52d]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your QC Process?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join leading garment manufacturers who have already upgraded to automated measurement with MagicQC.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-[#f4a52d] hover:bg-[#e09420] text-[#214e5d] font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-[#f4a52d]/25 hover:scale-105"
              >
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1C1C1E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative h-10 w-32">
              <Image
                src="/MagicQC Logo Transparent BG (1).png"
                alt="MagicQC"
                fill
                className="object-contain brightness-0 invert opacity-50"
              />
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} MagicQC. All rights reserved.
            </p>
            <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
