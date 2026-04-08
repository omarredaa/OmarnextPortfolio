import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Providers } from "../components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OmarReda - Developer Portfolio",
  description:
    "Professional portfolio of Omar Reda. Specializing in Full Stack, Frontend, and Backend development.",
  keywords: "Developer, Portfolio, Node.js, React, TypeScript",
  authors: [{ name: "Omar Reda" }],
  icons: {
    icon: "/do.png",
  },
  openGraph: {
    title: "OmarReda - Developer Portfolio",
    description:
      "Professional portfolio showcasing web development projects and skills",
    type: "website",

    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Omar Reda - Developer Portfolio",
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
