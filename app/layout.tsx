import ConditionalLayout from "@/components/ConditionalLayout";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nekretninemimma.rs"),
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
    "selidbe",
    "usluge selidbe",
  ],
  alternates: {
    canonical: "https://www.nekretninemimma.rs/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.nekretninemimma.rs/",
    siteName: "Mimma Nekretnine",
    title: "Mimma Nekretnine - Agencija za Nekretnine Pančevo",
    description:
      "Profesionalna agencija za nekretnine u Pančevu. Kupovina i prodaja stanova, kuća, poslovnih prostora i placeva. Licencirani agenti i kompletna pravna podrška.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mimma Nekretnine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimma Nekretnine - Agencija za Nekretnine Pančevo",
    description:
      "Profesionalna agencija za nekretnine u Pančevu. Kupovina i prodaja stanova, kuća, poslovnih prostora i placeva.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "433d4468ee166612",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} antialiased text-muted-foreground bg-muted text-base md:text-xl`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
