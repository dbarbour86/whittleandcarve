import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://whittleandcarve.com"),
  title: {
    default: "Whittle & Carve | Learn Wood Carving One Simple Project at a Time",
    template: "%s | Whittle & Carve",
  },
  description:
    "A practical, beginner-friendly guide to wood whittling and carving. Learn basic knife skills, choose safe starter tools, and carve your first simple projects.",
  keywords: [
    "whittling for beginners",
    "how to start whittling",
    "beginner wood carving kit",
    "whittling knife",
    "whittle a mushroom",
    "comfort bird carving",
    "wood carving basics",
  ],
  authors: [{ name: "Whittle & Carve Editorial Team" }],
  creator: "Whittle & Carve",
  publisher: "Whittle & Carve",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://whittleandcarve.com",
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon.png", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Whittle & Carve | Learn Wood Carving One Simple Project at a Time",
    description:
      "A practical, beginner-friendly guide to wood whittling and carving. Learn basic knife skills, choose safe tools, and carve your first project.",
    url: "https://whittleandcarve.com",
    siteName: "Whittle & Carve",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 600,
        alt: "Whittle & Carve - Simple Tools. Simple Projects. Learn by Making Something.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whittle & Carve | Learn Wood Carving One Simple Project at a Time",
    description:
      "A practical, beginner-friendly guide to wood whittling and carving. Learn safe knife skills and carve your first project.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#22201d] antialiased selection:bg-[#e8decb] selection:text-[#22201d]">
        {/* Skip to Content for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#22201d] focus:text-[#fbf9f5] focus:rounded focus:shadow-md text-sm font-medium"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
