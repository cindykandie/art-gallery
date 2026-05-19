"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const excerptParagraphs = [
  `"You look at me," Gwynetha whispered.`,
  `"I am supposed to."`,
  `"No," she said. "You really look."`,
  `Outside, the world was collapsing. Cities had gone dark months ago. Roads were dangerous. People disappeared every day.`,
  `But somehow, inside their tiny house at the edge of everything, life had become softer.`,
  `The man wearing her husband's face planted gardens. Braided her daughter's hair after secretly practicing on rope. Built toys from scrap metal for her son.`,
  `And Gwynetha was beginning to realize something terrifying:`,
  `the creature pretending to be her husband was becoming a better partner than the real one had ever been.`,
];

const isDialogue = (s: string) => s.startsWith('"') || s.startsWith("“");
const isTurning = (s: string) => s.startsWith("the creature");

type Props = { onReadFullStory: () => void; onComplete: () => void };

export function ExcerptSection({ onReadFullStory, onComplete }: Props) {
  return (
    <section id="excerpt" className="relative py-24">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]">
            Exclusive Excerpt
          </p>
          <div className="mx-auto h-px w-12 bg-[color:var(--color-border-soft)]" />
        </motion.div>

        {/* Two-column layout — stacks on mobile, side-by-side on lg */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">

          {/* Cover image — full width on mobile, fixed width on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] shadow-[0_20px_60px_var(--color-shadow-soft)] lg:w-80 lg:flex-shrink-0"
          >
            <div className="relative h-64 w-full sm:h-80 lg:h-full lg:min-h-[520px]">
              <Image
                src="/stories/shape-of-a-husband/cover.png"
                alt="The Shape of a Husband — cover"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/art1.jpg";
                }}
              />
            </div>
          </motion.div>

          {/* Excerpt text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 flex-col"
          >
            <div className="flex-1 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-7 shadow-[0_20px_60px_var(--color-shadow-soft)] sm:p-10">
              <div className="space-y-5">
                {excerptParagraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.8, delay: i < 3 ? i * 0.06 : 0 }}
                    className={[
                      "font-serif leading-[1.95]",
                      isDialogue(para)
                        ? "border-l-2 border-[color:var(--color-blush)] pl-4 text-base text-[color:var(--color-heading)]"
                        : isTurning(para)
                        ? "text-base italic text-[color:var(--color-terracotta)]"
                        : i === 6
                        ? "text-sm text-[color:var(--color-cocoa)]"
                        : "text-[15px] text-[color:var(--color-ink)]/80",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              onViewportEnter={onComplete}
              className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-end sm:text-right"
            >
              <p className="text-sm text-[color:var(--color-ink)]/50">The story continues&hellip;</p>
              <button
                onClick={onReadFullStory}
                className="rounded-xl bg-[color:var(--color-terracotta)] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
              >
                Read the Full Story
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
