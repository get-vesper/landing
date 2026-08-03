import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vesper | The Operating System for Aerospace Compliance",
  description: "Vesper creates a continuous operational layer connecting mission data, engineering, business workflows, and regulatory requirements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-vesper-base text-vesper-text font-sans selection:bg-vesper-accent/10 selection:text-vesper-accent">
        {children}
      </body>
    </html>
  );
}
