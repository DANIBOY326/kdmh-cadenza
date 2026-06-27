"use client";

import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { GlowOrb } from "@/components/shared/GlowOrb";
import { testimonials } from "@/data";
import { staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-black section-pad"
      aria-label="Testimonials"
    >
      <GlowOrb color="red" size="xl" intensity="low" className="top-0 left-1/3" />
      <GlowOrb color="gold" size="lg" intensity="low" className="bottom-0 right-1/4" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-14"
        >
          <SectionHeading
            eyebrow="Testimonials"
            title="Voices From"
            titleAccent="Past Seasons"
            description="Hear from the talented musicians whose lives and careers were shaped by their Cadenza experience."
          />
        </motion.div>
        
        {/* Featured Testimonial Video */}
        <div className="mb-16">
          <div className="glass border-gradient overflow-hidden rounded-3xl p-4">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                src="https://drive.google.com/file/d/17jpzlex_vMkjYacX-RH65qdd4GWM7A3-/preview"
                className="h-full w-full"
                allow="autoplay"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-heading text-2xl font-bold text-white">
                Voices from Previous Contestants
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-white/60">
                Hear directly from past participants whose musical journeys
                were transformed through Cadenza Music.
              </p>
            </div>
          </div>
        </div>

        
        {/* Carousel */}
        <div className="relative" aria-roledescription="carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6" role="list">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="min-w-0 flex-shrink-0 flex-grow-0 basis-full px-4 md:basis-1/2 md:px-6 lg:basis-1/3"
                  role="listitem"
                  aria-roledescription="slide"
                >
                  <motion.div
                    className="glass border-gradient flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:border-gold/20"
                    whileHover={{ y: -6 }}
                  >
                    {/* Quote icon */}
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                      <Quote size={18} className="text-gold" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <blockquote className="flex-1">
                      <p className="text-sm leading-relaxed text-white/65 italic">
                        &ldquo;{t.content}&rdquo;
                      </p>
                    </blockquote>

                    {/* Author */}
                    <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-gold/20">
                      <User
                        size={24}
                        className="text-gold"
                        aria-hidden="true"
                      />
                    </div>
                      <div>
                        <p className="font-heading text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-white/40">{t.role}</p>
                      </div>
                      <span className="ml-auto rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        {t.season}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              onClick={scrollPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:border-gold/30 hover:text-gold focus-visible:outline-none"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </motion.button>

            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className="h-1.5 w-6 rounded-full bg-white/20 transition-all hover:bg-gold/60 focus-visible:outline-none"
                  role="tab"
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={scrollNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:border-gold/30 hover:text-gold focus-visible:outline-none"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
