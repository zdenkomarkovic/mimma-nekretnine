import Image from "next/image";
import Link from "next/link";
import { Home, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Home,
    value: "500+",
    label: "Prodatih Nekretnina",
  },
  {
    id: 2,
    icon: Users,
    value: "1200+",
    label: "Zadovoljnih Klijenata",
  },
  {
    id: 3,
    icon: Award,
    value: "15+",
    label: "Godina Iskustva",
  },
  {
    id: 4,
    icon: TrendingUp,
    value: "98%",
    label: "Stopa Uspeha",
  },
];

export default function Statistics() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          <div className="flex flex-col items-center lg:col-span-1">
            <Link
              href="/kontakt"
              className="relative w-40 md:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary-foreground/20 block group"
            >
              <Image
                src="/20260708_115245.jpg"
                alt="Menadžer agencije"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                quality={90}
              />
            </Link>
            <p className="mt-4 text-lg font-semibold text-center">
              Marija Pavlović
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 opacity-90" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
