import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "@/components/layout/LayoutWrapper";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-luxury-dark font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
