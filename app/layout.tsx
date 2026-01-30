import ConditionalLayout from "@/components/ConditionalLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mimma Nekretnine - Agencija za Nekretnine Pančevo",
  description:
    "Profesionalna agencija za nekretnine u Pančevu. Kupovina i prodaja stanova, kuća, poslovnih prostora i placeva. Licencirani agenti i kompletna pravna podrška.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "nekretnine",
    "pančevo",
    "agencija",
    "stanovi",
    "kuće",
    "poslovni prostori",
    "placevi",
    "mimma nekretnine",
    "nekretnine pančevo",
    "kupovina",
    "prodaja",
    "iznajmljivanje",
  ],
  alternates: {
    canonical: "https://www.mimmanekretnine.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${inter.variable} antialiased text-muted-foreground bg-muted text-base md:text-xl`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
