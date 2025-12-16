"use client";

import Link from "next/link";
import { useState } from "react";

type SiteHeaderProps = {
  cindyName: string;
};

const navItems = [
  { label: "About", href: "/about" },
  { label: "Available", href: "/available" },
  { label: "Live art", href: "/#experiences" },
  { label: "Connect", href: "/#connect" },
];

export default function SiteHeader({ cindyName }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex w-full flex-wrap items-center justify-between gap-6">
      <Link href="/" className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--color-border-soft)] bg-[color:var(--color-blush)]/40 text-lg font-semibold text-[color:var(--color-cocoa)] shadow-[0_10px_30px_var(--color-shadow-soft)]">
          CK
        </div>
        <div className="flex flex-col leading-tight text-sm text-[color:var(--color-cocoa)]">
          <span className="font-semibold">Painted by {cindyName}</span>
          <span className="text-[13px] text-[color:var(--color-ink)]/70">
            Originals, editions, and commissions
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-4 md:gap-6">
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--color-cocoa)] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="transition-colors hover:text-[color:var(--color-terracotta)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] text-[color:var(--color-cocoa)] shadow-[0_10px_30px_var(--color-shadow-soft)] transition hover:border-[color:var(--color-terracotta)]/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-blush)]/60 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-[color:var(--color-cocoa)] transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-[color:var(--color-cocoa)] transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-[color:var(--color-cocoa)] transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>
      {menuOpen ? (
        <nav className="mt-3 flex w-full flex-col gap-3 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-6 text-sm text-[color:var(--color-cocoa)] shadow-[0_16px_50px_var(--color-shadow-soft)] md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-transparent px-4 py-3 text-center transition-colors hover:border-[color:var(--color-terracotta)]/50 hover:bg-[color:var(--color-blush)]/15"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
