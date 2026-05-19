"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { emailHref, instagramUrl } from "../../../hooks/useCindyIdentity";

export function StoryFooter() {
  return (
    <footer className="relative py-16">
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="flex w-full items-center gap-6">
            <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
            <span className="text-[color:var(--color-heart)]">❤</span>
            <div className="h-px flex-1 bg-[color:var(--color-border-soft)]" />
          </div>

          <div className="flex flex-col gap-1">
            <p className="font-serif text-base text-[color:var(--color-cocoa)]">
              The Shape of a Husband © 2026
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-ink)]/50">
              Written by Cindy Kandie
            </p>
          </div>

          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink)]/50">
            <Link href="/" className="transition-colors hover:text-[color:var(--color-terracotta)]">
              PaintedByCindyk
            </Link>
            <span className="text-[color:var(--color-border-soft)]">·</span>
            <Link href={instagramUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[color:var(--color-terracotta)]">
              Instagram
            </Link>
            <span className="text-[color:var(--color-border-soft)]">·</span>
            <Link href={emailHref} className="transition-colors hover:text-[color:var(--color-terracotta)]">
              Email
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
