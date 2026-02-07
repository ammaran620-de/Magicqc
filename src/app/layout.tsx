import "./globals.css";

export const metadata = {
  title: "MagicQC - AI-Powered Garment Measurement System",
  description: "Enterprise-grade AI-based automated garment size measurement system. Precision, speed, and reliability for industrial quality control.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
