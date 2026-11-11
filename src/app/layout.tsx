import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "void — You Run The Business. We Engineer The Tech.",
  description:
    "We fill the technical void for businesses in Tier 2 & Tier 3 cities. Custom software, AI voice & web agents, WhatsApp automation, and dedicated tech support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`}>
      <body className="bg-[#0a0a0a] text-white font-sans selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
