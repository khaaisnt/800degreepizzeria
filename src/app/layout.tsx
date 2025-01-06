import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playwrite_IS } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playwriteIS = Playwrite_IS({
  variable: "--font-playwrite-is",
  weight: ["100", "400"], // Tentukan bobot yang ingin digunakan
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "800degreespizzeria",
  description: "Pizza, Pasta, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playwriteIS.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
