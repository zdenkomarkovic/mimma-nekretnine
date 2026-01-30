"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Send, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { sendMail } from "@/lib/send-mail";
import { toast } from "sonner";
import { FaTiktok } from "react-icons/fa";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: "",
    email: "",
    telefon: "",
    poruka: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailText = `Ime: ${formData.ime}\nTelefon: ${formData.telefon}\nEmail: ${formData.email}\nPoruka: ${formData.poruka}`;

      const response = await sendMail({
        email: formData.email,
        subject: "Nova poruka sa kontakt forme",
        text: mailText,
      });

      if (response?.messageId) {
        toast.success("Hvala što ste nas kontaktirali! Odgovorićemo uskoro.");
        setFormData({ ime: "", email: "", telefon: "", poruka: "" });
      } else {
        toast.error("Greška pri slanju poruke. Molimo pokušajte ponovo.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Greška pri slanju poruke. Molimo pokušajte ponovo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero sekcija */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/60 text-white py-24 md:py-28">
        <div className="container mx-auto px-2 md:px-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kontaktirajte Nas
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Imate pitanja? Želite da zakažete razgledanje? Tu smo da vam
              pomognemo da pronađete savršenu nekretninu!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-2 md:px-10 max-w-6xl -mt-10 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontakt Informacije */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl px-2 py-6 shadow-xl border border-primary/10 h-full">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-1 w-10 bg-primary rounded-full"></div>
                <h2 className="text-xl font-bold text-primary">
                  Naše Informacije
                </h2>
              </div>

              <div className="space-y-4">
                {/* Mobilni telefon */}
                <div className="flex items-center gap-4 px-2 py-4 rounded-xl hover:bg-primary/5 transition-all group">
                  <div className="bg-primary p-2.5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-muted" />
                  </div>

                  <Link
                    href="tel:0604880885"
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium text-lg"
                  >
                    060 488 0885
                  </Link>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 px-2 py-4 rounded-xl hover:bg-primary/5 transition-all group">
                  <div className="bg-primary p-2.5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-muted" />
                  </div>

                  <Link
                    href="mailto:mimmanekretnine@gmail.com"
                    className="block text-muted-foreground hover:text-primary transition-colors font-medium break-all text-base"
                  >
                    mimmanekretnine@gmail.com
                  </Link>
                </div>

                {/* Adresa */}
                <div className="flex items-center gap-3 px-2 py-4 rounded-xl hover:bg-primary/5 transition-all group">
                  <div className="bg-primary p-2.5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-muted" />
                  </div>

                  <div className="text-muted-foreground space-y-0.5 text-base">
                    <p className="font-medium">
                      Nemanjina br8 (ulaz iz Oslobođenja)
                    </p>
                    <p className=" text-center">26000 Pančevo, Srbija</p>
                  </div>
                </div>

                {/* Društvene mreže */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                  <h3 className="font-semibold mb-3 text-base text-foreground flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                    Pratite nas
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      href="https://www.facebook.com/share/177TgNePxv/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-primary/10 p-2.5 rounded-lg transition-all hover:scale-110 shadow-sm"
                      title="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/mimmanekretnine?igsh=MXY5Z3NyaGQ2eHNsMg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-primary/10 p-2.5 rounded-lg transition-all hover:scale-110 shadow-sm"
                      title="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-primary" />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@mimmanekretnine?_r=1&_t=ZS-93ORmQnLJ0W"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-primary/10 p-2.5 rounded-lg transition-all hover:scale-110 shadow-sm"
                      title="TikTok"
                    >
                      <FaTiktok className="w-5 h-5 text-primary" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                <h3 className="font-semibold mb-2 text-base text-foreground flex items-center gap-2">
                  <span className="text-primary">🕐</span>
                  Radno vreme
                </h3>
                <div className="text-muted-foreground space-y-1.5 text-base">
                  <div className="flex justify-between items-center">
                    <span>Pon - Pet:</span>
                    <span className="font-semibold text-foreground">
                      09:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Subota:</span>
                    <span className="font-semibold text-foreground">
                      10:00 - 14:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nedelja:</span>
                    <span className="font-semibold text-red-500">
                      Zatvoreno
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kontakt Forma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-bold text-primary">
                  Pošaljite nam poruku
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="ime"
                    className="block text-sm font-medium mb-2"
                  >
                    Ime i prezime <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="ime"
                    name="ime"
                    required
                    value={formData.ime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="Vaše ime i prezime"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email adresa <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="vas.email@primer.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="+381 63 123 4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="poruka"
                    className="block text-sm font-medium mb-2"
                  >
                    Poruka <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    required
                    value={formData.poruka}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Vaša poruka..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Šalje se..." : "Pošalji poruku"}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Mapa (opciono - može se dodati Google Maps embed) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center">
              Naša Lokacija
            </h2>
            <div className="w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.574!2d20.6414!3d44.8697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b4b5e1%3A0x7e4c9e8f9f5b1234!2sNemanjina%208%2C%20Pancevo%2026000!5e0!3m2!1ssr!2srs!4v1737372000000!5m2!1ssr!2srs"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
