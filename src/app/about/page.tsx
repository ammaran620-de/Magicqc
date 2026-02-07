import Header from "@/components/Header";
import HowItHelps from "@/components/HowItHelps";
import Challenges from "@/components/Challenges";
import Achievements from "@/components/Achievements";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <HowItHelps />
        <Challenges />
        <Achievements />
      </main>
    </>
  );
}
