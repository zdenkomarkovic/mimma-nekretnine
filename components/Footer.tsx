"use client";
import { motion } from "framer-motion";
import { Facebook, Phone, Mail, MapPin, Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8 bg-primary text-muted"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-2 md:px-10 ">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src={Logo}
              alt="Mimma Nekretnine"
              width={100}
              height={100}
              className="rounded-full hover:scale-105 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          {/* Kontakt Informacije */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4 text-muted">Kontakt</h3>
            <div className="space-y-3">
              <Link
                href="tel:+381604880885"
                className="flex items-center gap-2 hover:text-muted/70 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>060 488 0885</span>
              </Link>
              <Link
                href="mailto:mimmanekretnine@gmail.com"
                className="flex items-center gap-2 hover:text-muted/70 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>mimmanekretnine@gmail.com</span>
              </Link>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Nemanjina br8, 26000 Pančevo</span>
              </div>
            </div>
          </div>

          {/* Brzi Linkovi */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4 text-muted">Brzi linkovi</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block hover:text-muted/70 transition-colors"
              >
                Početna
              </Link>
              <Link
                href="/nekretnine"
                className="block hover:text-muted/70 transition-colors"
              >
                Nekretnine
              </Link>

              <Link
                href="/kontakt"
                className="block hover:text-muted/70 transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Društvene Mreže */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4 text-muted">Pratite nas</h3>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://www.facebook.com/share/177TgNePxv/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted/70 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.instagram.com/mimmanekretnine?igsh=MXY5Z3NyaGQ2eHNsMg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted/70 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@mimmanekretnine?_r=1&_t=ZS-93ORmQnLJ0W"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-muted/70 transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col  md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-muted mt-10 pt-5">
          <p>
            &copy; {new Date().getFullYear()} Mimma Nekretnine. Sva prava
            zadržana.
          </p>

          <p className="">
            Izrada sajta:{" "}
            <Link
              href="https://manikamwebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted/70 transition-colors underline"
            >
              Manikam Web Solutions
            </Link>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
