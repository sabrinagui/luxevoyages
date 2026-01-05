import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxe Voyages | Premium Travel Experiences",
  description: "Discover extraordinary destinations with our curated collection of luxury flights, exclusive hotels, and bespoke travel experiences. Your journey to elegance begins here.",
  keywords: "luxury travel, premium flights, exclusive hotels, travel booking, luxury vacations, first class flights, 5 star hotels",
  openGraph: {
    title: "Luxe Voyages | Premium Travel Experiences",
    description: "Discover extraordinary destinations with our curated collection of luxury flights, exclusive hotels, and bespoke travel experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-luxury-dark font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
