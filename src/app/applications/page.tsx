import Header from "@/components/Header";
import Applications from "@/components/Applications";

export default function ApplicationsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        <Applications />
      </main>
    </>
  );
}
