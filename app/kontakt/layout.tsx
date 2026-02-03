import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Mimma Nekretnine",
  description:
    "Kontaktirajte nas za sva pitanja o nekretninama. Radno vreme: Pon-Pet 09-17h, Sub 10-14h. Telefon: 060 488 0885. Adresa: Nemanjina 8, Pančevo.",
  openGraph: {
    title: "Kontakt - Mimma Nekretnine",
    description:
      "Kontaktirajte nas za sva pitanja o nekretninama. Telefon: 060 488 0885",
    url: "https://www.nekretninemimma.rs/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
