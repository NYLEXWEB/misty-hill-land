import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Misty Hill Land Villa Stays | Luxury Homestay in Wayanad, Kerala",
  description:
    "Experience world-class luxury, privacy, and scenic mountain views at Misty Hill Land. Our exclusive villas in Wayanad offer premium homely meals, private bonfire nights, and tranquil mountain escapes.",
  keywords: [
    "Wayanad luxury homestay",
    "Misty Hill Land Wayanad",
    "Kerala luxury villa stays",
    "private resort Wayanad",
    "premium villa Kerala",
    "Wayanad homestay with views",
    "Aman resorts style Kerala",
  ],
  authors: [{ name: "Misty Hill Land" }],
  openGraph: {
    title: "Misty Hill Land Villa Stays | Luxury Homestay in Wayanad",
    description:
      "Unwind in comfort. A premium private villa escape surrounded by lush nature and rolling hills in Wayanad, Kerala.",
    url: "https://mistyhillland.com",
    siteName: "Misty Hill Land Villa Stays",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-luxury-bg text-luxury-charcoal font-inter selection:bg-luxury-forest selection:text-luxury-bg">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
