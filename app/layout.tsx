import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "../public/fonts/ClashDisplay-Medium.otf",
  variable: "--font-clashDisplay",
  display: "swap",
});

const satoshiMedium = localFont({
  src: "../public/fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi",
  display: "swap",
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
      <body
        className={`${clashDisplay.variable} ${satoshiMedium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
