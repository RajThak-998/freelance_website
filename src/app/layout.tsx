import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NIRVYA — Business Tech & Automation Agency",
  description:
    "We are the full-service tech and automation agency for high-growth enterprises and industry leaders. Custom software, AI voice & web agents, WhatsApp automation, and dedicated tech support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased dark`}>
      <body className="bg-[#050507] text-white font-sans selection:bg-white/20 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
