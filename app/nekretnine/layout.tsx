import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nekretnine - Mimma Nekretnine Pančevo",
  description:
    "Pregledajte sve dostupne nekretnine u Pančevu - stanovi, kuće, poslovni prostori i placevi. Licencirani agenti i kompletna pravna podrška.",
  openGraph: {
    title: "Nekretnine - Mimma Nekretnine Pančevo",
    description:
      "Pregledajte sve dostupne nekretnine u Pančevu - stanovi, kuće, poslovni prostori i placevi.",
    url: "https://www.nekretninemimma.rs/nekretnine",
  },
  keywords: [
    "nekretnine pančevo",
    "stanovi pančevo",
    "kuće pančevo",
    "poslovni prostori pančevo",
    "placevi pančevo",
    "prodaja nekretnina",
    "kupovina nekretnina",
  ],
};

export default function NekretninLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
