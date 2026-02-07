"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Zap, Clock, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  { icon: Zap, text: "Response within 24 hours" },
  { icon: Clock, text: "Personalized demo available" },
  { icon: Shield, text: "No commitment required" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        alert('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#214e5d]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f4a52d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <div ref={contentRef}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-[#f4a52d] font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Contact Us
            </motion.span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#214e5d] mb-6 leading-tight">
              Let's Start a <span className="text-[#f4a52d]">Conversation</span>
            </h2>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We understand that every factory and brand has unique requirements.
              Whether you're exploring options or ready to implement, we're here to help.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#214e5d]/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-[#214e5d]" />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-6 pt-8 border-t border-slate-200">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#214e5d] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#214e5d] text-lg">Email</p>
                  <a href="mailto:ammaran620@gmail.com" className="text-slate-600 hover:text-[#f4a52d] transition-colors">
                    ammaran620@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#f4a52d] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#214e5d] text-lg">Headquarters</p>
                  <p className="text-slate-600 text-sm">Robionix Technologies (Pvt) Ltd</p>
                  <p className="text-slate-600 text-sm">National University of Technology (NUTECH)</p>
                  <p className="text-slate-600 text-sm">Karnal Sher Khan Shaheed Rd, I-12/2, Islamabad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#214e5d]/5 to-transparent rounded-bl-full" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, delay: 0.1 }}
                      className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#214e5d] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-slate-600 text-lg">
                      We've received your message and will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'name' ? 'text-[#214e5d]' : 'text-slate-700'
                            }`}
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-0 focus:border-[#214e5d] transition-all outline-none"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'company' ? 'text-[#214e5d]' : 'text-slate-700'
                            }`}
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-0 focus:border-[#214e5d] transition-all outline-none"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'email' ? 'text-[#214e5d]' : 'text-slate-700'
                          }`}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-0 focus:border-[#214e5d] transition-all outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className={`block text-sm font-medium mb-2 transition-colors ${focusedField === 'message' ? 'text-[#214e5d]' : 'text-slate-700'
                          }`}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-900 placeholder-slate-400 focus:ring-0 focus:border-[#214e5d] transition-all outline-none resize-none"
                        placeholder="Tell us about your measurement needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#214e5d] hover:bg-[#1a3d4a] disabled:bg-[#214e5d]/70 text-white font-semibold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#214e5d]/25 hover:shadow-xl hover:shadow-[#214e5d]/30 hover:scale-[1.02] disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
