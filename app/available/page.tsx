"use client";

import Image from "next/image";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useCindyIdentity } from "../hooks/useCindyIdentity";

const pieces = [
  { title: "Aurora Reverie", image: "/art1.jpg" },
  { title: "Nocturne Garden", image: "/art1.jpg" },
  { title: "Goldleaf Echoes", image: "/art1.jpg" },
  { title: "Olive Stillness", image: "/art1.jpg" },
  { title: "Terracotta Tide", image: "/art1.jpg" },
];

export default function AvailablePage() {
  const { cindyName } = useCindyIdentity();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 sm:px-10 lg:gap-16">
      <SiteHeader cindyName={cindyName} />

      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium text-[color:var(--color-terracotta)]">The Be Collection</p>
        <h1 className="text-4xl font-semibold leading-[1.1] text-[color:var(--color-heading)] sm:text-5xl">
          Browse the collection.
        </h1>
        <p className="text-lg leading-relaxed text-[color:var(--color-ink)]/80">
          If something speaks to you, reach out and we&apos;ll make it yours.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pieces.map((piece) => (
          <div
            key={piece.title}
            className="relative h-64 overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] shadow-[0_20px_60px_var(--color-shadow-soft)] sm:h-72 lg:h-80"
          >
            <Image
              src={piece.image}
              alt={piece.title}
              fill
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </section>

      <ContactCTA cindyName={cindyName} />
      <SiteFooter cindyName={cindyName} />
    </main>
  );
}
