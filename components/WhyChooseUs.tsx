import { FaAward, FaUsers, FaGavel, FaHandshake, FaTruck } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    icon: FaAward,
    title: "Stručnost i Iskustvo",
    description:
      "Naš tim čine profesionalni agenti sa višegodišnjim iskustvom na tržištu nekretnina u Pančevu i okolini",
  },
  {
    icon: FaUsers,
    title: "Posvećenost Klijentima",
    description:
      "Svaki klijent je važan - pružamo personalizovanu uslugu i podršku u svakom koraku kupovine ili prodaje",
  },
  {
    icon: FaGavel,
    title: "Pravna Sigurnost",
    description:
      "Garantujemo bezbednost svih transakcija uz stručnu pravnu podršku i kompletnu dokumentaciju",
  },
  {
    icon: FaHandshake,
    title: "Poverenje i Transparentnost",
    description:
      "Zvanično registrovani posrednici - vaša garancija profesionalnosti i pouzdanosti",
  },
  {
    icon: FaTruck,
    title: "Usluge Selidbe",
    description:
      "Nudimo profesionalne usluge selidbe sa sopstvenim vozilom - kompletan servis za vaš bezbrižan preseljenje",
  },
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Zašto Mimma Nekretnine?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Profesionalnost, posvećenost i poverenje koje gradimo zajedno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-primary/10 p-6 rounded-full mb-4">
                  <feature.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naš Tim Sekcija */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Leva strana - Tekst */}
              <div>
                <h2 className="text-4xl font-bold mb-6">Naš Tim</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Jer naš tim raste! Sa ponosom predstavljamo našu posvećenu
                  ekipu stručnjaka koji svakodnevno rade na tome da vaše snove o
                  savršenom domu pretvore u stvarnost.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Svaki član našeg tima donosi jedinstveno iskustvo i stručnost,
                  a zajedno delimo istu strast - pomoći vam da pronađete ili
                  prodate nekretninu koja će ispuniti sve vaše potrebe.
                </p>
                <p className="text-lg font-semibold text-primary">
                  Vaš uspeh je naš uspeh. Vaš dom je naša misija.
                </p>
              </div>

              {/* Desna strana - Slika */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/1.jpg"
                    alt="Mimma Nekretnine Tim"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usluge Selidbe Sekcija */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Leva strana - Slika */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/2.jpg"
                    alt="Usluge Selidbe - Mimma Nekretnine"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>

              {/* Desna strana - Tekst */}
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  Usluge Selidbe
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Pored naših usluga posredovanja u prometu nekretnina, nudimo i profesionalne usluge selidbe sa sopstvenim vozilom.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Razumemo da selidba može biti stresna, zato smo tu da vam olakšamo ceo proces. Naša ekipa brižljivo rukuje vašim stvarima i garantuje siguran transport.
                </p>
                <p className="text-lg font-semibold text-primary">
                  Kompletan servis za vaše bezbrižno preseljenje!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
