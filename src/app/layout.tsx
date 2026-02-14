import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Connect 360 Advisory | Corporate Services & Commercial Brokerage",
  description: "Leading corporate services firm in Dubai offering commercial brokerage, market entry, and consultancy for business growth in the GCC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cairo.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
