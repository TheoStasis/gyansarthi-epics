import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "भारत शिक्षा पोर्टल | India Education Portal",
  description: "भारत सरकार का शिक्षा पोर्टल - छात्रों और शिक्षकों के लिए डिजिटल शिक्षा का माध्यम। AI सहायक, प्रश्नोत्तरी, वीडियो व्याख्यान, PDF पुस्तकें और शैक्षिक खेल।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
