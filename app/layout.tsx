import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Przetrwać Łączność",
  description: "Poradniki i kursy dla uczniów technikum ZSŁ w Gdańsku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 🔹 Navbar – pojawia się na każdej stronie */}
        <nav className="sticky top-0 z-50 bg-gray-900 text-white p-4 flex justify-center gap-10 text-lg font-medium shadow-md">
          <Link href="/">🏠 Strona główna</Link>
          <Link href="/about">ℹ️ O nas</Link>
          <Link href="/courses">📘 Kursy</Link>
          <Link href="/tutorials"> Poradniki</Link>
          <Link href="/compendium"> Kompendium</Link>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
