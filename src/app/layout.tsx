import type { Metadata, Viewport } from "next";
import { doctor } from "@/data";
import { fraunces, ptSans } from "@/lib/fonts";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBottomNav from "@/components/StickyBottomNav";
import FloatingButtons from "@/components/FloatingButtons";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dr-gustavo-alvarez.com"),
  title: {
    default: `${doctor.title} ${doctor.name} — ${doctor.specialistTitle} en ${doctor.city}`,
    template: `%s | ${doctor.title} ${doctor.name}`,
  },
  description: `${doctor.title} ${doctor.name}, ${doctor.specialistTitle} con ${doctor.subspecialty} en ${doctor.city}, ${doctor.state}. Diagnóstico y tratamiento de padecimientos urológicos.`,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0072d8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${ptSans.variable}`}>
      <body className="pb-16 md:pb-0">
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
        <StickyBottomNav />
      </body>
    </html>
  );
}
