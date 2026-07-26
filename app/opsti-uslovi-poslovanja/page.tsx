export default function OpstiUsloviPage() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/60 text-white py-24 md:py-28">
        <div className="container mx-auto px-2 md:px-10 max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Opšti uslovi poslovanja
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Posrednika u prometu i zakupu nepokretnosti
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-2 md:px-10 max-w-5xl -mt-10 pb-16">
        <div className="bg-card rounded-2xl p-6 md:p-12 shadow-xl border border-primary/10 space-y-10 text-muted-foreground leading-relaxed">
          {/* OPŠTE ODREDBE */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Opšte odredbe
            </h2>
            <p>
              Opštim uslovima poslovanja agencija MIMMAnekretnine, Pančevo, Nemanjina 8, PIB 115493135,
              MB 68408393, u skladu sa članom 28. Zakona o posredovanju u prometu i zakupu nepokretnosti, uređuje
              poslovni odnos između Posrednika u prometu i zakupu nepokretnosti i Nalogodavca (fizičkog ili pravog
              lica). Zaključenjem Ugovora o posredovanju, Nalogodavac potvrđuje da prihvata, odnosno da je upoznat i
              saglasan sa odredbama Opštih uslova poslovanja posrednika u prometu nepokretnosti.
            </p>
            <p>
              Posredovanje se vrši na osnovu Ugovora o posredovanju o prometu, odnosno zakupu neokretnosti, koji
              zaključuju Nalogodavac i Posrednik.
            </p>
            <p>
              Nalogodavac može imati zaključene Ugovore o posredovanju sa više Posrednika istovremeno (osim u
              slučaju ekskluzivnog posredovanja). Ekskluzivno posredovanje, ipak Nalogodavcu daje bolje pozicije za
              uspešnost kupoprodaje/zakupa.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">
              Prodavac/zakupodavac, u svojstvu Nalogodavca (u daljem tekstu Nalogodavac)
            </h3>
            <p>
              Nalogodavca je obavezan da posredničku naknadu (u koliko je ista uogovorena) isplati Posredniku,
              koji ga je prvi doveo u vezu sa potencijalnim kupcem/zakupcem. U slučaju da Posrednik dovede u vezu sa
              Nalogodavcem lice, koje je već razgledalo predmetnu nepokretnost, obavezan je da o tome upozna
              Posrednika. Ovo je važno, da bi se izbegli potencijalni sporovi između Nalogodavca i Posredika, ali I
              posrednika međusobno. U slučaju da navedeno propusti da uradi, smatraće se da je Nalogodavac sa
              potencijalnim kupcem/zakupcem prvi put u vezu doveden posredstvom agencije MIMMAnekretnine.
            </p>

            <h3 className="text-lg font-semibold text-foreground pt-2">
              Kupac/zakupac, u svojstvu Nalogodavca (u daljem tekstu Nalogodavac)
            </h3>
            <p>
              Nalogodavca je obavezan da posredničku naknadu isplati Posredniku, koji mu je prvi omogućio
              razgledanje predmetne nepokretnosti, odnosno, koji ga je prvi upoznao sa predmetnom nepokretnošću. U
              slučaju da je Nalogodavac razgledao predmetnu nepokretnost posredstvom drugog posrednika ili sam, pre
              nego što mu je Posrednik agencije MIMMAnekretnine istu pokazao, obavezan je da o tome upozna
              Posrednika. Ovo je neophodno, kako se ne bi ponovilo razgledanje i kako bi se izbegi potencijalni
              sporovi između Nalogodavca i Posrednika, ali i posrednika međusobno. U slučaju da izostavi ovu
              informaciju smatraće se da je nepokretnost prvi put razgledao posredstvom Posrednika agencije
              MIMMAnekretnine.
            </p>
            <p>
              Nalogodavac je obavezan da neposredno pre razgledanja nepokretnosti potpiše posredniku Potvrdu o
              gledanju nepokretnosti, u kojoj potvrđuje da je predmetnu nepokretnost prvi put gledao posredstvom
              Posrednika. U slučaju da Nalogodavac ne popiše Potvrdu iz prethodnog stave, Posrednik nije obavezan da
              mu predmetnu nepokretnost pokaže. Ukoliko se radnja prezentovanja nepokretnosti ipak učini, pa
              kupac/zakupac ili sa njim povezana lica zaključe Ugovor o kupoprodaji/zakupu predmetne nepokretnosti,
              u obavezan je da ispalti posredničku nadoknadu. Činjenica da je do zaključenja navedenog Ugovora došlo
              posredstvom agencije MIMMAnekretnine će se dokazivati drugim dokaznim sredstvima: svedocima,
              pisanom ili elektronskom dokumentacijom i sl.
            </p>
          </section>

          {/* NASLOVNI BLOK */}
          <section className="space-y-2 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Opis poslova, prava i obaveze
            </h2>
            <p className="font-medium text-foreground">
              Opis poslova koje je Posrednik dužan da obavi; prava Posrednika prilikom posredovanja; ekskluzivno
              posredovanje; obaveze Nalogodavca.
            </p>
          </section>

          {/* OBAVEZE I PRAVA POSREDNIKA */}
          <section className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Obaveze i prava posrednika</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>
                da zaključi Ugovor o posredovanju sa nalogodavcem u pisanoj formi ili elektronskom obliku u skladu
                sa zakonom kojim se uređuje elektronska trgovina,
              </li>
              <li>da nastoji da nađe i dovede u vezu sa nalogodavcem lice radi zaključenja pravnog posla,</li>
              <li>
                da Nalogodavcu pruži objektivno mišljenje o ceni nepokretnosti ili iznosu zakupnine nepokretnosti u
                skladu sa njenim karakteristikama, prilikom na tržištu, kao i drugim relevantnim okolnostima,
              </li>
              <li>
                da izvrši uvid u isprave kojima se dokazuju pravo svojine ili drugo stvarno pravo na nepokretnosti
                čiji promet/zakup je predmet posredovanja. Da Nalogodavcu naročito predoči mogućnosti i rizike u
                vezi sa upisom predmetne nepokretnosti u registar nepokretnosti; upisana prava odnosno terete na
                predmetnoj nepokretnosti, postojanje prava preče kupovine i ograničenje u pravnom prometu u skladu
                sa posebnim propisima,
              </li>
              <li>
                da obavi potrebne radnje u cilju predstavljanja (prezentacije) nepokretnosti na tržištu, da postavi
                oglas u vezi sa prometom/zakupom nepokretnosti na odgovarajući način i da izvrši sve druge radnje
                dogovorene ugovorom o posredovanju koje prelaze uobičajenu prezentaciju, a za šta ima pravo na
                posebne, unapred iskazane troškove,
              </li>
              <li>da omogući razgledanje nepokretnosti,</li>
              <li>
                da čuva podatke o ličnosti Nalogodavca, a po pisanom nalogu Nalogodavca i da čuva kao poslovnu
                tajnu podatke o nepokretnosti, u vezi sa čijim prometom/zakupom posreduje, ili u vezi sa tom
                nepokretnosti, ili o poslu za koji posreduje,
              </li>
              <li>
                da obavesti Nalogodavca o svim okolnostima značajnim za predmetni posao koje su mu poznate,
              </li>
              <li>da posreduje u pregovorima i nastoji da dođe do zaključenja Ugovora,</li>
              <li>da prisustvuje kod zaključenja pravnog posla (Predugovora i Ugovora),</li>
              <li>da prisustvuje primopredaji nepokretnosti,</li>
              <li>
                da o svom trošku obezbedi stručnu pomoć (advokat) vezanu za izradu Predugovora, Ugovora i ostale
                potrebne dokumentacije i da vodi evidenciju o posredovanju i o potposredovanju.
              </li>
            </ul>

            <p>
              Smatra se da je Posrednik omogućio Nlaogodavcu vezu sa drugim licem (fizičkim ili pravnim) o
              pregovaranju za zaključenje pravnog posla, ako je Nalogodavcu omogućeno stupanje u vezu sa drugim
              licem sa kojim je pregovarao za zaključenje pravnog posla, a posebno ako je:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>neposredno odveo, ili uputio Nalogodavca, ili treće lice na razgledanje predmetne nepokretnosti</li>
              <li>
                organizovao susret između Nalogodavca i trećeg lica (ili njegovog predstavnika – punomoćnika,
                srodnika i sl.) radi pregovaranja za zaključenje pravnog posla
              </li>
              <li>
                Nalogodavcu saopšti ime, broj telefona, telefaksa, ili e-drese trećeg lica zainteresovanog za
                zaključenje pravnog posla, ili ako mu je saopštio tačnu lokaciju tražene nepokretnosti.
              </li>
            </ul>

            <p>
              Posrednik, uz saglasnost Nalogodavca (prodavac/zakupodavac) vrši fotografisanje ili pravljenje video
              zapisa nepokretnosti čiji promet je ugovoren Ugovorom o posredovanju. Sačinjene fotografije i video
              zapise Posrednik može koristiti isključivo u svrhu prezentacije predmetne nepokretnosti potencijalnom
              kupcu/zakupcu, odnosno oglašavanje iste postavljanjem na svoj sajt ili putem oglasnika/sajtova za
              oglašavanje, plakatima, panoima i sl.
            </p>
            <p>
              Posrednik ima pravo da, u pisanoj odnosno elektronskoj formi, zaključi Ugovor o potposredovanju,
              kojim će, u celini ili delimično, preneti svoja prava i obaveze iz Ugovora o posredovanju na drugog
              posrednika, ako se Nalogodavac sa ovim izričito saglasio u Ugovoru o posredovanju. Posrednik je dužan
              da kopiju Ugovora o potposredovanju preda Nalogodavcu u roku od tri dana od dana zaključenja tog
              ugovora.
            </p>
            <p>
              Posrednik ima pravo da za izvrsene usluge ispostavi račun Nalogodavcu, u skladu sa zaključenim
              Ugovorom o posredovanju i ovim Opštim uslovima poslovanja.
            </p>
          </section>

          {/* EKSKLUZIVNO POSREDOVANJE */}
          <section className="space-y-4 border-t border-border pt-8">
            <h3 className="text-xl font-bold text-foreground">Ekskluzivno posredovanje</h3>
            <p>
              jeste posredovanje u kome se Nalogodavac obavezeju izričitim ugovaranjem klauzule o ekskluzivnom
              posredovanju, da u ugovorenom roku neće lično otuđiti nepokretnost koja je predmet Ugovora o
              posredovanju, niti će angažovati drugog posrednika za posredovanje u vezi njenog prometa.
            </p>
            <p>
              Ako za vreme važenja klauzule o ekskluzivnom posredovanju Nalogodavac zaključi pravni posao u vezi
              sa predmetnom nepokretnosti, za koji je posredovao drugi posrednik, ili lično, dužan je da Posredniku
              sa kojim je ugovorio ekskluzivno posredovanje na ima naknade štete plati iznos posredničke naknade.
            </p>
            <p>
              Posrednik je dužan da o znacenju i pravnim posledicama klauzule o ekskluzivnom posredovanju, posebno
              upozori Nalogodavca.
            </p>
          </section>

          {/* OBAVEZE NALOGODAVCA */}
          <section className="space-y-4 border-t border-border pt-8">
            <h3 className="text-xl font-bold text-foreground">Obaveze Nalogodavca</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-primary">
              <li>da obavesti Posrednika o svim okolnostima koje su od značaja za obavljanje posredovanja,</li>
              <li>
                da Posredniku da na uvid originale isprava koje dokazuju njegovo pravo na nepokretnost, koja je
                predmet prometa, odnosno da upozori Posrednika na sve upisane i neupisane terete koji postoje na
                nepokretnosti,
              </li>
              <li>
                da osigura Posredniku i licu zainteresovanom za zaključenje pravnog posla razgledanje nepokretnosti,
              </li>
              <li>
                da obavesti Posrednika o svim bitnim podacima o nepokretnosti, naročito podatke o ceni, lokaciji,
                strukturi i dr.,
              </li>
              <li>
                da isplati Posredniku ugovorenu posredničku naknadu, u slučaju realizacije ugovorenog prometa, ali
                I u drugim slučajevima navedenim u ovom pravilniku. I ukoliko je posebno ugovoreno, da nadoknadi
                Posredniku i druge dodatne troskove nastale tokom posredovanja,
              </li>
              <li>
                da obavesti Posrednika pisanim putem ili u elektronskoj formi o svim primenama u vezi sa
                posredovanim poslom, a posebno o promenama u vezi sa pravima na nepokretnosti, rokovima i cenom, a
                sve u roku od tri dana od nastale promene,
              </li>
              <li>
                da odmah obavesti Posrednika da je lice koje je preko Posrednika gledalo nepokretnosti (ili sa njim
                povezano lice) pokazalo interesovanje da bez Posrednika zaključi Ugovor/Predugovor o kupoprodaji
                nepokretnosti, Zakupu nepokretnosti, ili obavi neki drugi pravni posao koji je posledica rada
                posrednika.
              </li>
            </ul>
          </section>

          {/* OSTVARIVANJE PRAVA NA POSREDNIČKU NAKNADU */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Ostvarivanje prava na posredničku naknadu
            </h2>
            <p>
              Posrednik stiče pravo na posredničku naknadu u trenutku zaključenja Ugovora za koji je posredovao,
              osim ako Posrednik i Nalogodavac nisu ugovorili da se pravo na posrednicku naknadu stiče u momentu
              zaključenja Predugovora za koji je posrednik posredovao.
            </p>
            <p>
              Iznosi posredničke naknade, utvrđeni su Cenovnikom posredničkih usluga koji je sastavni deo ovih
              Opštih uslova poslovanja.
            </p>
            <p>
              Troškove pribavljanja potrebne dokumentacije kojom se dokazuje svojina na predmetnoj nepokretnosti
              (izvod iz Katastra i sl.), a koja je potrebna za promet predmetne nepokretnosti snosi NALOGODAVAC,
              ako nije drugacije ugovoreno u Ugovoru o posredovanju.
            </p>
            <p>
              Ukoliko posrednik za izvršenje naloga Nalogodavca ima dodatnih troškova, a koji proizilaze iz
              izvršenja/dodatnog angažovanja/ i nužni su za izvršenje tog naloga, bez obzira na uspeh posredovanja,
              Nalogodavac je u obavezi da odmah isplati te troškove posredniku.
            </p>
            <p>
              Posrednik ima pravo na posredničku naknadu ako bračni/ vanbracni drug, potomak, roditelj, pravno lice
              koje je u vlasništvu (suvlasništvu) potencijalnog kupca ili njegovog srodnika; kao i lica koja su
              sa njim/a prisustvovala prezentaciji nepokretnosti kao i druga lica povezana sa licem sa kojom je
              posrednik doveo u vezu Nalogodavca, zaključi posredni pravni posao.
            </p>
            <p>
              Ako nakon prestanka važenja Ugovora o posredovanju, a u roku kraćem od 12 meseci od dana prestanka
              važenja ugovora, Nalogodavac zaključi pravni posao koji je u značajnoj meri rezultat posrednikovog
              posredovanja pre prestanka važenja Ugovora o posredovanju, dužan je da plati Posredniku srazmernu
              naknadu, osim ako Ugovorom o posredovanju nije drugačije ugovoreno.
            </p>
            <p>
              Posrednik nije obavezan da vrati isplaćenu posredničku naknadu u slučaju raskida Ugovora,
              Predugovora, odnosno odustajanja jedne od ugovornih strana i sl.
            </p>
          </section>

          {/* ODGOVORNOST ZA ŠTETU */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Odgovornost za štetu
            </h2>
            <p>
              Posrednik u obavljanju posredovanja, odnosno drugih radnji u vezi sa poslom koji je predmet
              posredovanja, mora postupati sa paŽnjom dobrog privrednika.
            </p>
            <p>
              Posrednik odgovara Nalogodavcu u skladu sa Zakonom, za štetu koja je nastala usled neispunjenja
              ugovornih obaveza preuzetih Ugovorom o posredovanju i navedenim u ovim Opštim uslovima poslovanja od
              strane Posrednika.
            </p>
            <p>
              Posrednik ne snosi odgovornost za izavršenje obaveza bilo koje od ugovornih strana u prometu, koje su
              međusobno preuzele u zaključnom Ugovoru (Predugovoru).
            </p>
            <p>
              Posrednik ne odgovara za kvalitet nepokretnosti koja je predmet prometa, niti za skrivene mane (osim
              u slučaju da mu je prodavac u pisanoj formi saopštio da nepokretnost ima skrivenu manu, a on tu
              informaciju prikrio od kupca).
            </p>
          </section>

          {/* PRESTANAK VAŽENJA UGOVORA O POSREDOVANJU */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Prestanak važenja ugovora o posredovanju
            </h2>
            <p>Ugovorom o posredovanju se utvrđuje period na koji se Ugovor zaključuje.</p>
            <p>
              Ugovor o posredovanju prestaje da proizvodi pravna dejstva zaključenjem pravnog posla za koji je
              posredovano, protekom roka na koji je zaključen, ili otkazom Nalogodavca koji se daje u pisanoj ili
              elektronskoj formi.
            </p>
            <p>
              Otkaz Ugovora o posredovanju ne mora biti obrazložen, moze biti dat u svako doba i ima pravno dejstvo
              od momenta dostavljanja istog drugoj strani. Nalogodavac raskidom ugovora je dužan da nadoknadi
              troškove koje je posrednika imao do raskida ugovora.
            </p>
          </section>

          {/* OPSTE ODREDBE - zavrsne */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Opšte odredbe
            </h2>
            <p>
              Potpisivanjem Ugovora o posredovanju, Nalogodavac izričito pristaje da Posrednik obrađuje njegove
              lične podatke prikupljene na osnovu tog ugovora, kao i da ih, kada je to potrebno prosledi povezanom
              pravnom licu ili drugom licu angažovanom radi izvršenja poslova koji proističu iz predmetnog ugovora
              o posredovanju.
            </p>
            <p>
              Na odnose između Nalogodavca i Posrednika koji nisu regulisani Ugovorom o posredovanju, niti su
              uređeni ovim Opštim uslovima poslovanja, primenjivaće se neposredno odredbe Zakona o posredovanju u
              prometu i zakupu nepokretnosti, drugih propisa koji regulišu ovu oblast, Zakona o zaštiti potrošača i
              Zakona o obligacionim odnosima.
            </p>
            <p>
              Ovi Opšti uslovi poslovanja su sastavni deo Ugovora o posredovanju, istaknuti su na vidnom mestu u
              prostorijama Posrednika i objavljeni na sajtu Posrednika.
            </p>
          </section>

          {/* NASE POSLOVANJE / NAS CILJ */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Naše poslovanje
            </h2>
            <p>
              Mimma nekretnine posvećena je pružanju najkvalitetnije usluge u posredovanju pri kupovini, prodaji i
              iznajmljivanju nekretnina. Sa posebom pažnjom naš konsalting tim vam pruža sve značajne informacije u
              postupku kupoprodaje i zakupa. Tim logističke podrške je našim klikjentima uvek na raspolaganju za
              transport stvari i nameštaja.
            </p>

            <h3 className="text-xl font-bold text-foreground pt-2">Naš cilj</h3>
            <p>
              Mimma nekretnine teži da svojim kvalitetom usluge i ulaganjem u najbolje načine poslovanja izgradi
              dugoročno poverenje i odnose koji govore o izvrsnosti saradnje sa našim timom.
            </p>
          </section>

          {/* CENOVNIK */}
          <section className="space-y-6 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Cenovnik
            </h2>
            <p>
              Posredničkih provizija za obavljeno posredovanje prilikom kupoprodaje, zamene i iznajmljivanja
              nekretnina.
            </p>
            <p className="font-medium text-foreground">
              Kupovina – prodaja – Provizija se naplaćuje u procentima od ukupnog postignutog iznosa kupoprodajne
              cene.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="py-2 pr-4 text-foreground">Usluga</th>
                    <th className="py-2 text-foreground">Provizija</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 font-semibold text-foreground" colSpan={2}>
                      Prodaja
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">Provizija za posredovanje prilikom prodaje stambenih nepokretnosti</td>
                    <td className="py-2 font-semibold text-primary">1%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">Provizija za posredovanje prilikom prodaje ostalih nepokretnosti</td>
                    <td className="py-2 font-semibold text-primary">1%</td>
                  </tr>

                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 pt-4 font-semibold text-foreground" colSpan={2}>
                      Kupovina
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">Provizija za posredovanje prilikom kupovine stambenih nepokretnosti</td>
                    <td className="py-2 font-semibold text-primary">2%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">
                      Provizija za posredovanje prilikom kupovine ostalih nepokretnosti (u dinarskoj protivvrednosti)
                    </td>
                    <td className="py-2 font-semibold text-primary">3%</td>
                  </tr>

                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 pt-4 font-semibold text-foreground" colSpan={2}>
                      Zamena
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4" colSpan={2}>
                      Prilikom zamene nekretnine provizija se naplaćuje od svake strane u zameni, a procenat se
                      računa od <span className="font-semibold text-primary">2%</span> vrednosti nekretnine koju je
                      strana stekla zamenom.
                    </td>
                  </tr>

                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 pt-4 font-semibold text-foreground" colSpan={2}>
                      Zakup — Zakupodavac (provizija od zakupodavca)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">
                      Standardni procenat od mesečne zakupnine za stambene objekte, poslovne objekte (poslovne
                      prostore, lokale, hale, garaže i parking mesta)
                    </td>
                    <td className="py-2 font-semibold text-primary">50%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">Za zemljište</td>
                    <td className="py-2 font-semibold text-primary"></td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 italic" colSpan={2}>
                      Sa zakupodavcima, mogu biti ugovorena i drugačija provizija od gore navedenih.
                    </td>
                  </tr>

                  <tr className="border-b border-border">
                    <td className="py-2 pr-4 pt-4 font-semibold text-foreground" colSpan={2}>
                      Zakup — Zakupac (provizija od zakupca)
                    </td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 pr-4">
                      Standardni procenat od mesečne zakupnine za stambene objekte, poslovne objekte (poslovne
                      prostore, lokale, hale, garaže i parking mesta), zemljišta
                    </td>
                    <td className="py-2 font-semibold text-primary">50%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 italic" colSpan={2}>
                      Sa zakupodavcima, mogu biti ugovorena i drugačija provizija od gore navedenih.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Ovaj cenovnik je sastavni deo Opštih uslova poslovanja Posrednika u prometu i zakupu nepokretnosti, i
              zasniva se na odredbama Zakona o posredovanju u prometu i zakupu nepokretnosti, kao i drugih važećih
              propisa. Ovim Cenovniom precizira se visina posredničkih naknada i dodatnih troškova za različite
              vrste poslova i usluga koje Posrednik pruža Nalogodavcu, u skladu sa zaključenim Ugovorom o
              posredovanju.
            </p>
            <p>
              <span className="font-semibold text-foreground">Napomena (kupoprodaja):</span> Ukoliko Posrednik
              istovremeno posreduje i za kupca i za prodavca (dvojno posredovanje), maksimalna ukupna posrednička
              naknada može biti dogovorena u posebnom aneksu ili Ugovoru o posredovanju, ali zbirno najčešće ne
              prelazi 4% od ugovorene kupoprodajne cene, osim ako se strane izričito drugačije ne sporazumeju.
            </p>
            <p>
              <span className="font-semibold text-foreground">Napomena (zakup):</span> Ugovorom o posredovanju
              moze se predvideti drugačiji procenat naknade za dugoročne ugovore o zakupu (preko 12 meseci) ili
              posebne uslove u slučaju većih i složenijih zakupnih aranžmana, uzimajući u obzir ukupnu vrednost i
              trajanje zakupa, kao i specifične potrebe Nalogodavca.
            </p>
          </section>

          {/* NACIN OBRACUNA */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Način obračuna, dospeća i plaćanja naknade
            </h2>
            <ol className="list-decimal pl-5 space-y-3 marker:text-primary marker:font-semibold">
              <li>
                <span className="font-semibold text-foreground">Dospeće naknade:</span>
                <ul className="list-disc pl-5 mt-2 space-y-1 marker:text-primary">
                  <li>
                    Kod kupoprodaje: Posrednička naknada se naplaćuje u trenutku zaključenja predugovora ili glavnog
                    ugovora, u skladu s Ugovorom o posredovanju
                  </li>
                  <li>
                    Kod zakupa: Posrednička naknada dospeva na naplatu zaključenjem ugovora o zakupu nepokretnosti.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-foreground">Valuta plaćanja:</span> Sve naknade iskazuju se u
                evrima (EUR), a plaćanje se vrši u dinarskoj protivvrednosti po srednjem kursu NBS na dan
                obračuna, ukoliko Ugovorom nije drugačije ugovoreno.
              </li>
              <li>
                <span className="font-semibold text-foreground">Rok plaćanja:</span> Nalogodavac je dužan da iznos
                naknade uplati na račun Posrednika u roku definisanom Ugovorom o posredovanju, a najkasnije u roku
                od tri dana od dana nastanka uslova za naplatu.
              </li>
              <li>
                <span className="font-semibold text-foreground">Dodatni troškovi:</span> Dodatne usluge i troškovi
                ugovoreni Ugovorom o posredovanju ili ovim Cenovnikom naplaćuju se prema dogovoru, najčešce
                istovremeno sa posredničkom naknadom ili u posebnom roku definisanim za svaku dodatnu uslugu.
              </li>
            </ol>
          </section>

          {/* IZMENE I DOPUNE CENOVNIKA */}
          <section className="space-y-4 border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
              <span className="h-1 w-8 bg-primary rounded-full inline-block" />
              Izmene i dopune cenovnika
            </h2>
            <ol className="list-decimal pl-5 space-y-3 marker:text-primary marker:font-semibold">
              <li>
                <span className="font-semibold text-foreground">Izmene Cenovnika:</span> Posrednik zadržava pravo
                da menja i dopunjuje ovaj Cenovnik u skladu sa trzišnim okolnostima, svojom poslovnom politikom ili
                izmenom važećih propisa. Izmene stupaju na snagu danom objavljivanja na zvaničnoj internet
                stranici Posrednika ili isticanjem u njegovim poslovnim prostorijama.
              </li>
              <li>
                <span className="font-semibold text-foreground">Primena izmena:</span> Izmenjen Cenovnik ne
                primenjuje se retroaktivno na poslove za koje je Ugovor o posredovanju već zaključen, a koji su u
                toku realizacije. U tom slučaju važe naknade i uslovi iz Cenovnika koji je bio na snazi u trenutku
                zaključenja Ugovora, osim ako se Nalogodavac i Posrednik drugačije ne dogovore.
              </li>
            </ol>
            <p>
              Ovaj Cenovnik, zajedno sa Opštim uslovima poslovanja, čini obavezujući pravni okvir za obračun i
              naplatu posredničkih usluga i drugih troškova. Nalogodavac, zaključenjem Ugovora o posredovanju,
              potvrdjuje da je upoznat i saglasan sa odredbama ovog Cenovnika.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
