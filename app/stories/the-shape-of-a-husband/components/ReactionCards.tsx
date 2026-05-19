"use client";

import { motion } from "framer-motion";

const reactions = [
  { text: "this ruined me emotionally", handle: "@mara.reads", delay: 0 },
  { text: "why is the alien a better husband 😭", handle: "@fiction.spiral", delay: 0.1 },
  { text: "I didn't expect to question humanity tonight", handle: "@quietpages", delay: 0.2 },
  { text: '"afraid shouldn\'t be alone" I need a moment', handle: "@bookdust", delay: 0.05 },
  { text: "the button at the end. THE BUTTON.", handle: "@readingwithwine", delay: 0.15 },
  { text: "Cindy Kandie has invented a new kind of grief", handle: "@softsf", delay: 0.25 },
];

export function ReactionCards() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]">
            Readers
          </p>
          <div className="mx-auto h-px w-12 bg-[color:var(--color-border-soft)]" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reactions.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: r.delay, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-6 shadow-[0_20px_60px_var(--color-shadow-soft)]"
            >
              <p className="mb-3 font-serif text-[15px] italic leading-relaxed text-[color:var(--color-heading)]">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-[11px] tracking-[0.1em] text-[color:var(--color-ink)]/50">{r.handle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
