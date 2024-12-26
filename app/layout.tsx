import type { Metadata } from "next";
import localFont from "next/font/local";
import { Alumni_Sans_Pinstripe } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const alumniSans = Alumni_Sans_Pinstripe({
  weight: '400',
  variable: '--font-alumni-sans',
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: "Nigel's Birthday & Michael's Barbeque / Karaoke Party",
  description: "You are invited to Nigel's Birthday & Michael's Barbeque / Karaoke Party",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${alumniSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
