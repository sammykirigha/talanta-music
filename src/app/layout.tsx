import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TalantaHeader from "@/components/talanta-header";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talanta Music and Art Space",
  description: "Empower aspiring musicians through comprehensive music learning. We provide personalized instruction in various musical instruments and genres, nurturing talents and passion to foster creativity and skill development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TalantaHeader />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/254794943791"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="h-12 w-12" />
        </a>
      </body>
    </html>
  );
}
