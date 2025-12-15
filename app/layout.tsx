import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Medium.otf",
  variable: "--font-clashDisplay",
  display: "swap",
  preload: true,
});

const satoshiMedium = localFont({
  src: "../public/fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Marketing Reforms",
  description: "Marketing Reforms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero images for faster LCP */}
        <link
          rel="preload"
          href="/images/herocircle2.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/herocircle1.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/herocircle3.png"
          as="image"
        />
      </head>
      <body
        className={`${clashDisplay.variable} ${satoshiMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
