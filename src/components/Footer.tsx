"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#1C1C1E] text-white py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* Left Column - Logo & Description */}
          <div className="lg:max-w-md">
            <button
              onClick={() => scrollToSection("overview")}
              className="relative h-16 w-52 block mb-6"
            >
              <Image
                src="/MagicQC Logo Transparent BG (1).png"
                alt="MagicQC"
                fill
                className="object-contain object-left brightness-0 invert rounded-lg"
              />
            </button>
            <p className="text-slate-300 leading-relaxed">
              MagicQC - Developed by Robionix Technologies (Pvt) Ltd, a NUTECH-based
              industrial automation company. Professional garment measurement solution
              helping factories and brands maintain consistent sizing standards with
              reliable, structured processes.
            </p>
          </div>

          {/* Right Column - Navigation & Contact Stacked */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-white mb-5">Navigation</h4>
              <div className="space-y-3">
                <button onClick={() => scrollToSection("overview")} className="block text-slate-300 hover:text-white transition-colors">Overview</button>
                <button onClick={() => scrollToSection("how-it-helps")} className="block text-slate-300 hover:text-white transition-colors">How It Helps</button>
                <button onClick={() => scrollToSection("applications")} className="block text-slate-300 hover:text-white transition-colors">Applications</button>
                <button onClick={() => scrollToSection("value")} className="block text-slate-300 hover:text-white transition-colors">Value</button>
                <button onClick={() => scrollToSection("contact")} className="block text-slate-300 hover:text-white transition-colors">Contact</button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-5">Contact</h4>
              <div className="space-y-3 text-slate-300">
                <p>ammaran620@gmail.com</p>
                <p className="text-sm">Robionix Technologies (Pvt) Ltd</p>
                <p className="text-sm">National University of Technology (NUTECH)</p>
                <p className="text-sm">Karnal Sher Khan Shaheed Rd, I-12/2, Islamabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Robionix Technologies (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
