"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  onReadExcerpt: () => void;
  onReadFullStory: () => void;
};

export function HeroSection({ onReadExcerpt, onReadFullStory }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale, y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/stories/shape-of-a-husband/cover.png')",
            backgroundColor: "var(--color-cocoa)",
          }}
        />
      </motion.div>

      {/* Overlay fades to canvas at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-[#F6F1EB]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="mb-7 text-[10px] font-medium uppercase text-[color:var(--color-blush)]"
        >
          A Post-Apocalyptic Psychological Drama
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 font-serif text-5xl leading-[1.06] text-[#F6F1EB] sm:text-7xl lg:text-[6rem]"
          style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
        >
          The Shape of<br />a Husband
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mb-7 h-px w-20 origin-center bg-[color:var(--color-blush)]/70"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.7 }}
          className="mb-12 max-w-xs font-serif text-lg italic leading-loose text-[#F6F1EB]/80 sm:text-xl"
        >
          He came back.<br />But he was already home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.1 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={onReadExcerpt}
            className="rounded-xl border border-[#F6F1EB]/40 bg-[#F6F1EB]/10 px-9 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F1EB] backdrop-blur-sm transition-all hover:bg-[#F6F1EB]/20"
          >
            Read Excerpt
          </button>
          <button
            onClick={onReadFullStory}
            className="rounded-xl bg-[color:var(--color-terracotta)] px-9 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_50px_rgba(199,109,74,0.35)] transition-all hover:bg-[color:var(--color-terracotta)]/90"
          >
            Read Full Story
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
      >
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-transparent to-[color:var(--color-terracotta)]/60"
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[9px] uppercase tracking-[0.3em] text-[color:var(--color-terracotta)]/60">Scroll</span>
      </motion.div>
    </section>
  );
}
