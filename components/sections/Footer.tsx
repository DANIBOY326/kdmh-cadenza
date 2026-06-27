"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { navItems } from "@/data/navigation";
import { REGISTRATION_URL, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, SOCIAL_LINKS } from "@/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";

// TikTok SVG icon (not in Lucide)
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: SOCIAL_LINKS.facebook },
  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram },
  { icon: Youtube, label: "YouTube", href: SOCIAL_LINKS.youtube },
  { icon: TikTokIcon, label: "TikTok", href: SOCIAL_LINKS.tiktok },
];

const contactItems = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Phone, label: "Phone", value: CONTACT_PHONE, href: `tel:${CONTACT_PHONE}` },
  { icon: MapPin, label: "Address", value: CONTACT_ADDRESS, href: undefined },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-brand-black" role="contentinfo">
      {/* Top gradient line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
      />

      <div className="container-custom py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="inline-flex items-center gap-2.5 focus-visible:outline-none"
              aria-label="King D Music Hub – Cadenza Season 3.0"
            >
              <Image
                src="/images/kdmh-main-logo.png"
                alt="Cadenza Music Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </a>

            <p className="mt-4 text-sm leading-relaxed text-white/40">
              A premier faith-based music competition discovering and celebrating exceptional musical talents organised by King D Music Hub.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3" aria-label="Social media links">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] text-white/40 transition-all hover:border-gold/30 hover:text-gold"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className="text-sm text-white/40 transition-colors hover:text-gold focus-visible:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon size={15} className="mt-0.5 flex-shrink-0 text-gold" aria-hidden="true" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/40 transition-colors hover:text-white focus-visible:outline-none"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-white/40">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Register CTA */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-5 font-heading text-sm font-bold uppercase tracking-widest text-white">
              Join Season 3.0
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/40">
              Registration is open. Secure your audition slot today before spaces fill up.
            </p>
            <motion.a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-gradient px-5 py-3 text-sm font-bold text-white shadow-glow transition-all hover:shadow-[0_0_30px_rgba(193,18,31,0.5)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Register Now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            © 2026 King D Music Hub. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Cadenza Music Season 3.0
          </p>
        </div>
      </div>
    </footer>
  );
}
