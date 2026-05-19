"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="relative py-16">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]"
        >
          About the story
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Synopsis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <h2 className="font-serif text-3xl leading-tight text-[color:var(--color-heading)] sm:text-4xl">
              A story about what love<br />chooses to become.
            </h2>
            <div className="space-y-4 text-[15px] leading-[1.9] text-[color:var(--color-ink)]/80">
              <p>
                In a world where cities have collapsed, communication is dead, and survival
                has become the only law left, Gwynetha watches her husband Granad leave for
                the city in search of work.
              </p>
              <p>That same evening, he comes home.</p>
              <p className="italic text-[color:var(--color-cocoa)]">Except something feels wrong.</p>
              <p>
                As days turn into months, the man wearing Granad&apos;s face slowly becomes
                something unexpected: a better father, a better listener, a better partner.
              </p>
              <p>
                And Gwynetha begins to realize something terrifying: the creature pretending
                to be her husband may understand love more deeply than the real man ever did.
              </p>
            </div>
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <div className="w-full rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-10 shadow-[0_20px_60px_var(--color-shadow-soft)]">
              <blockquote className="font-serif text-xl italic leading-[1.85] text-[color:var(--color-heading)] sm:text-2xl">
                &ldquo;The creature pretending to be her husband was becoming a better partner than
                the real one had ever been.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-terracotta)]">
                  The Shape of a Husband
                </span>
                <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
