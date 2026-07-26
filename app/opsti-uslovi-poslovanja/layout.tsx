import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opšti uslovi poslovanja - Mimma Nekretnine",
  description:
    "Opšti uslovi poslovanja posrednika u prometu i zakupu nepokretnosti agencije Mimma Nekretnine, sa cenovnikom posredničkih usluga.",
  openGraph: {
    title: "Opšti uslovi poslovanja - Mimma Nekretnine",
    description:
      "Opšti uslovi poslovanja posrednika u prometu i zakupu nepokretnosti agencije Mimma Nekretnine, sa cenovnikom posredničkih usluga.",
    url: "https://www.nekretninemimma.rs/opsti-uslovi-poslovanja",
  },
};

export default function OpstiUsloviLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
