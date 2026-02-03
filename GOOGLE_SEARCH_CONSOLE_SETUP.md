# Google Search Console - Uputstvo za Podešavanje

## ✅ Šta je već urađeno:

### 1. SEO Metadata
- ✅ Dodati Open Graph tagovi za deljenje na društvenim mrežama
- ✅ Dodati Twitter Card tagovi
- ✅ Dodato `metadataBase` za pravilno generisanje URL-ova
- ✅ Dodati robots meta tagovi
- ✅ Dodati ključne reči (keywords) uključujući "selidbe"
- ✅ Google verifikacioni kod već dodat u metadata

### 2. Strukturirani Podaci (JSON-LD Schema)
- ✅ RealEstateAgent schema
- ✅ LocalBusiness schema
- ✅ Informacije o radnom vremenu
- ✅ Geolokacija
- ✅ Društvene mreže linkovi

### 3. Sitemap i Robots.txt
- ✅ Dinamički sitemap (`app/sitemap.ts`)
- ✅ Robots.txt (`app/robots.ts`)
- ✅ Next-sitemap konfiguracija unapređena
- ✅ Automatsko generisanje sitemap-a pri build-u

### 4. Individualne Stranice Metadata
- ✅ Početna stranica - kompletna metadata
- ✅ Nekretnine stranica - dodato kroz layout
- ✅ Kontakt stranica - dodato kroz layout
- ✅ Pojedinačne nekretnine - dinamička metadata sa slikama

## 📋 Koraci za povezivanje sa Google Search Console:

### Korak 1: Pristup Google Search Console
1. Idi na https://search.google.com/search-console
2. Uloguj se sa Google nalogom
3. Klikni na "Dodaj domen" ili "Add property"

### Korak 2: Verifikacija Domena
Imaš već verifikacioni fajl u `public/google433d4468ee166612.html`

**Opcija 1 - HTML Fajl (Već dodato):**
- Verifikacioni fajl je već u public folderu
- Google kod `433d4468ee166612` je već dodat u metadata
- Samo klikni "Verifikuj" u Google Search Console

**Opcija 2 - HTML Meta Tag (Već dodato):**
- Meta tag je već dodat u `app/layout.tsx`
- Proveri da li Google detektuje tag

### Korak 3: Submituj Sitemap
Nakon verifikacije:
1. U Google Search Console, idi na "Sitemaps"
2. Dodaj sledeće URL-ove:
   - `https://www.nekretninemimma.rs/sitemap.xml`
   - `https://www.nekretninemimma.rs/sitemap-0.xml` (ako postoji više sitemap fajlova)

### Korak 4: Proveri Pokrivenost
1. Sačekaj 24-48h nakon submita
2. Proveri "Coverage" ili "Pokrivenost" sekciju
3. Vidi koje stranice su indeksirane

### Korak 5: Optimizacija
1. **URL Inspection**: Proveri kako Google vidi pojedinačne stranice
2. **Performance**: Prati klikove, impresije i pozicije
3. **Core Web Vitals**: Proveri performanse sajta
4. **Mobile Usability**: Proveri mobilnu upotrebljivost

## 🚀 Build i Deploy

Pre deploy-a, uradi build sajta:

```bash
npm run build
```

Ova komanda će:
1. Build-ovati Next.js aplikaciju
2. Automatski generisati sitemap.xml fajlove (zahvaljujući `postbuild` skripti)
3. Generisati robots.txt

## 📊 Monitoring

Nakon što je sajt indeksiran, redovno prati:
- **Indexing Status**: Koliko stranica je indeksirano
- **Search Performance**: Klikovi, impresije, CTR
- **Keywords**: Za koje ključne reči se sajt rangira
- **Manual Actions**: Da li ima penala od Google-a

## 🔍 Dodatne Preporuke

1. **Google Analytics**: Razmotri dodavanje Google Analytics 4 za detaljnije statistike
2. **Google Business Profile**: Napravi profil za lokalni SEO
3. **Backlinks**: Radi na dobijanju kvalitetnih linkova ka sajtu
4. **Content Updates**: Redovno ažuriraj nekretnine i sadržaj

## ⚠️ Važne Napomene

- Indeksiranje može potrajati 2-7 dana
- Ne očekuj instant rezultate
- Sajt mora biti live i dostupan na `https://www.nekretninemimma.rs`
- SSL sertifikat mora biti validan

## 🆘 Problemi?

Ako Google ne može da indeksira sajt, proveri:
- Da li je sajt live?
- Da li SSL sertifikat radi?
- Da li DNS podešavanja pokazuju na pravi server?
- Da li robots.txt dozvoljava pristup Google bot-u?
- Da li postoje greške u sitemap-u?

## 📞 Kontakt za Podršku

Za tehničku podršku, kontaktiraj developera koji je radio na sajtu.
