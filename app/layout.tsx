import type { Metadata } from "next";
import { Playfair_Display, DM_Serif_Text } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSerifText = DM_Serif_Text({
  variable: "--font-dm-serif-text",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Painted by Cindy",
  description: "Original artwork and commissions for warm, soulful spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=BBH+Hegarty&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`}
        </style>
      </head>
      <body className={`${playfair.variable} ${dmSerifText.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
