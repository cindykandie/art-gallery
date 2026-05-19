"use client";

import { motion } from "framer-motion";

type Props = {
  rainPlaying: boolean;
  onToggleRain: () => void;
  grainVisible: boolean;
  onToggleGrain: () => void;
};

export function AmbientControls({ rainPlaying, onToggleRain, grainVisible, onToggleGrain }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 3, duration: 0.8 }}
      className="fixed bottom-8 right-6 z-40 flex flex-col gap-2"
    >
      <button
        onClick={onToggleRain}
        title={rainPlaying ? "Stop ambient rain" : "Play ambient rain"}
        className={[
          "flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_8px_24px_var(--color-shadow-soft)] transition-all duration-300",
          rainPlaying
            ? "border-[color:var(--color-terracotta)] bg-[color:var(--color-terracotta)]/10 text-[color:var(--color-terracotta)]"
            : "border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] text-[color:var(--color-ink)]/40 hover:text-[color:var(--color-terracotta)]",
        ].join(" ")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 15.2" strokeLinecap="round" />
          <line x1="8" y1="19" x2="8" y2="21" strokeLinecap="round" />
          <line x1="8" y1="13" x2="8" y2="15" strokeLinecap="round" />
          <line x1="12" y1="21" x2="12" y2="23" strokeLinecap="round" />
          <line x1="12" y1="15" x2="12" y2="17" strokeLinecap="round" />
          <line x1="16" y1="19" x2="16" y2="21" strokeLinecap="round" />
          <line x1="16" y1="13" x2="16" y2="15" strokeLinecap="round" />
        </svg>
      </button>

      <button
        onClick={onToggleGrain}
        title={grainVisible ? "Hide film grain" : "Show film grain"}
        className={[
          "flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_8px_24px_var(--color-shadow-soft)] transition-all duration-300",
          grainVisible
            ? "border-[color:var(--color-terracotta)] bg-[color:var(--color-terracotta)]/10 text-[color:var(--color-terracotta)]"
            : "border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] text-[color:var(--color-ink)]/40 hover:text-[color:var(--color-terracotta)]",
        ].join(" ")}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="5" r="1.2" /><circle cx="12" cy="3" r="1" />
          <circle cx="19" cy="6" r="1.2" /><circle cx="3" cy="12" r="1" />
          <circle cx="9" cy="10" r="1.2" /><circle cx="15" cy="13" r="1" />
          <circle cx="21" cy="11" r="1.2" /><circle cx="6" cy="18" r="1" />
          <circle cx="13" cy="20" r="1.2" /><circle cx="20" cy="17" r="1" />
        </svg>
      </button>
    </motion.div>
  );
}
