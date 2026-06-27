"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { REGISTRATION_URL } from "@/constants";
import { cn } from "@/utils/cn";

export function Navbar() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-brand-black/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="container-custom flex h-16 items-center justify-between md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <motion.a
  href="#home"
  onClick={(e) => {
    e.preventDefault();
    handleNavClick("#home");
  }}
  className="flex items-center gap-3 focus-visible:outline-none"
  whileHover={{ scale: 1.02 }}
  aria-label="Cadenza Music Season 3.0 – Home"
>
  <Image
    src="/images/kdmh-main-logo.png"
    alt="King D Music Hub Logo"
    width={130}
    height={130}
    className="object-contain"
    priority
  />

  </motion.a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navItems.slice(0, -1).map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:outline-none",
                    isActive
                      ? "text-gold"
                      : "text-white/60 hover:text-white"
                  )}
                  whileHover={{ y: -1 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gold"
                    />
                  )}
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-red-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-shadow hover:shadow-[0_0_30px_rgba(193,18,31,0.5)] focus-visible:outline-none"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Register Now
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex lg:hidden items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors focus-visible:outline-none"
          whileTap={{ scale: 0.93 }}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/[0.06] bg-brand-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "bg-primary/10 text-gold"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-3 pb-1">
                <motion.a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-xl bg-red-gradient py-3.5 text-sm font-semibold text-white shadow-glow"
                  whileTap={{ scale: 0.97 }}
                >
                  Register Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
