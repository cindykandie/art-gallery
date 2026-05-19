"use client";

import { motion } from "framer-motion";

export function AtmosphericSection() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mb-12 h-px w-16 bg-[color:var(--color-border-soft)]"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]"
        >
          From the world of the story
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-2xl italic leading-[1.85] text-[color:var(--color-heading)] sm:text-3xl"
        >
          Outside, the world was collapsing.<br />
          Inside, something impossible<br />
          learned how to love.
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mx-auto mt-12 h-px w-16 bg-[color:var(--color-border-soft)]"
        />
      </div>
    </section>
  );
}
