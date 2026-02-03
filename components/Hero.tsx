import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative text-white py-24 md:py-32 min-h-[100dvh] flex items-end">
      {/* Background slika */}
      <Image
        src="/hero.jpg"
        alt="Mimma Nekretnine Hero"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* Dark overlay za bolju čitljivost teksta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-10 relative -mb-12">
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Mimma Nekretnine
          </h1>
          <p className="text-xl md:text-3xl mb-6 text-white drop-shadow-xl font-semibold">
            Pronađite Vaš Savršeni Dom
          </p>
          <p className="text-sm md:text-lg mt-40 md:mt-0 mb-6 md:mb-10 text-white/95 max-w-2xl drop-shadow-lg">
            Sa nama je kupovina ili prodaja nekretnine jednostavna. Naš tim
            iskusnih stručnjaka vam pruža podršku u svakom koraku - od izbora
            nekretnine do pomoći u selidbi.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/nekretnine"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              <FaSearch className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Pretraži Nekretnine
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all shadow-lg text-sm md:text-base"
            >
              Kontaktiraj Nas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
