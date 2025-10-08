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
  title: "Talanta Music and Art Space | Music Education & Art Training in Nairobi",
  description: "Empower aspiring musicians through comprehensive music learning. We provide personalized instruction in various musical instruments and genres, nurturing talents and passion to foster creativity and skill development.",
  keywords: "music school Nairobi, art classes Kenya, guitar lessons, piano training, vocal coaching, music instruments store, Talanta Music Academy",
  authors: [{ name: "Talanta Music and Art Space" }],
  creator: "McDorcis Solutions",
  publisher: "Talanta Music and Art Space",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://talantamusic.com'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Talanta Music and Art Space | Music Education & Art Training",
    description: "Comprehensive music and art education in Nairobi, Kenya. Learn instruments, vocals, and visual arts with expert instructors.",
    url: "https://talantamusic.com",
    siteName: "Talanta Music and Art Space",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Talanta Music and Art Space Logo",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talanta Music and Art Space | Music Education & Art Training",
    description: "Comprehensive music and art education in Nairobi, Kenya. Learn instruments, vocals, and visual arts with expert instructors.",
    images: ["/logo.png"],
    creator: "@talantamusic", // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              "name": "Talanta Music and Art Space",
              "description": "Comprehensive music and art education center in Nairobi, Kenya offering courses in various musical instruments, vocals, and visual arts.",
              "url": "https://talantamusic.com",
              "logo": "https://talantamusic.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Twiga Plaza 1st floor",
                "addressLocality": "Utawala",
                "addressRegion": "Nairobi",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-794-943-791",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/share/1FBSjF42pz/",
                "https://www.youtube.com/@TalantaMusicSpace",
                "https://www.tiktok.com/@talanta_music"
              ]
            })
          }}
        />
      </head>
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
