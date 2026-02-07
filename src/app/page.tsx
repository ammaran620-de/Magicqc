import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItHelps from "@/components/HowItHelps";
import Achievements from "@/components/Achievements";
import Applications from "@/components/Applications";
import Value from "@/components/Value";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section id="overview">
          <Hero />
        </section>
        <section id="how-it-helps">
          <HowItHelps />
          <Achievements />
        </section>
        <section id="applications">
          <Applications />
        </section>
        <section id="value">
          <Value />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
