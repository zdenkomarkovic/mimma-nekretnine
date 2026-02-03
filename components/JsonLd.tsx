export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Mimma Nekretnine",
    description:
      "Profesionalna agencija za nekretnine u Pančevu. Kupovina i prodaja stanova, kuća, poslovnih prostora i placeva.",
    url: "https://www.nekretninemimma.rs",
    telephone: "+381604880885",
    email: "mimmanekretnine@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nemanjina 8 (ulaz iz Oslobođenja)",
      addressLocality: "Pančevo",
      postalCode: "26000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.8697",
      longitude: "20.6414",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/share/177TgNePxv/",
      "https://www.instagram.com/mimmanekretnine",
      "https://www.tiktok.com/@mimmanekretnine",
    ],
    areaServed: {
      "@type": "City",
      name: "Pančevo",
    },
    priceRange: "$$",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Mimma Nekretnine",
    image: "https://www.nekretninemimma.rs/logo.png",
    "@id": "https://www.nekretninemimma.rs",
    url: "https://www.nekretninemimma.rs",
    telephone: "+381604880885",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Nemanjina 8",
      addressLocality: "Pančevo",
      postalCode: "26000",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8697,
      longitude: 20.6414,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
