"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PackageCheck, ClipboardCheck, Factory, Truck, Shield, BarChart3 } from "lucide-react";

const applications = [
  {
    icon: PackageCheck,
    title: "End-of-Line Inspection",
    description:
      "Final measurement verification before garments are packed and shipped. Verify sizing compliance at the last production stage.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
  {
    icon: ClipboardCheck,
    title: "In-Process Verification",
    description:
      "Integrate into production workflow for ongoing size checks. Identify sizing variations before they affect larger batches.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
  {
    icon: Factory,
    title: "Multi-Facility Deployment",
    description:
      "Standardized measurement system across multiple production locations. Aggregated reporting enables cross-facility comparison.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
  {
    icon: Truck,
    title: "Incoming Goods Inspection",
    description:
      "Verify measurements of incoming materials and semi-finished goods from suppliers before accepting into inventory.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
  {
    icon: Shield,
    title: "Audit Documentation",
    description:
      "Generate measurement records for brand audits and compliance verification. PDF and CSV export for documentation needs.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
  {
    icon: BarChart3,
    title: "Trend Monitoring",
    description:
      "Track measurement data over time to observe sizing patterns. Defect trend analysis supports process evaluation.",
    cardBg: "bg-slate-50",
    borderColor: "border-slate-200",
    iconBg: "bg-[#214e5d]",
  },
];

export default function Applications() {
  return (
    <section className="py-12 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#214e5d] mb-4">
            Application Areas
          </h2>
          <p className="text-lg text-slate-700">
            MagicQC can be deployed at various stages of garment production 
            and supply chain verification.
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-full rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg ${app.cardBg} ${app.borderColor}`}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${app.iconBg}`}>
                  <app.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#214e5d] mb-2">
                  {app.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hardware Components Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#214e5d]/5 to-[#214e5d]/10 rounded-2xl p-8 lg:p-12 border-2 border-[#214e5d]/20"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image First on Desktop */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-[#f4a52d] shadow-lg order-2 lg:order-1">
              <Image
                src="/magic_image.jpg"
                alt="MagicQC Measurement Station"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-[#214e5d] mb-6">
                Hardware Components
              </h3>
              
              {/* Hardware Features */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#214e5d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#214e5d] mb-1">Measurement Station</h4>
                    <p className="text-slate-600">Rigid planar platform designed for flat placement of garments during inspection.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f4a52d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#214e5d] mb-1">Shadow-Free Illumination</h4>
                    <p className="text-slate-600">Uniform diffused lighting system that illuminates the platform without casting shadows.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#214e5d] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#214e5d] mb-1">Dual Display Interface</h4>
                    <p className="text-slate-600">Touchscreen operator display for input and control, plus a second monitoring display for remote viewing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
