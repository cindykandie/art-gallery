"use client";

import Image from "next/image";
import Link from "next/link";
import ContactCTA from "./components/ContactCTA";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { emailHref, heartPalette, instagramUrl, useCindyIdentity } from "./hooks/useCindyIdentity";

const featuredPieces = [
  { title: "Aurora Reverie", image: "/art1.jpg" },
  { title: "Nocturne Garden", image: "/art1.jpg" },
  { title: "Goldleaf Echoes", image: "/art1.jpg" },
];

export default function Home() {
  const { cindyName } = useCindyIdentity();

  return (
    <div className="relative overflow-hidden text-[color:var(--color-ink)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[color:var(--color-blush)]/30 blur-[140px] sm:-left-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-60 h-96 w-96 rounded-full bg-[color:var(--color-terracotta)]/28 blur-[180px]"
      />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-20 pt-12 sm:px-10 sm:pt-16 lg:gap-24">
        <SiteHeader cindyName={cindyName} />

        <section className="relative grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
              Hi, I&apos;m {cindyName}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.15] text-[color:var(--color-cocoa)] sm:text-5xl lg:text-6xl">
              I paint emotions through color.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-ink)]/80">
              Each piece is created with intention, emotion, and harmony — whether
              abstract or not. Browse, feel, and if something speaks to you, let&apos;s
              connect.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--color-terracotta)] px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
              >
                View the collection
              </Link>
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-8 py-3 text-sm font-semibold text-[color:var(--color-terracotta)] transition-colors hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/20"
              >
                Follow on Instagram
              </Link>
            </div>
          </div>

          <article className="relative overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] shadow-[0_24px_80px_var(--color-shadow-soft)]">
            <div className="relative h-96 w-full">
              <Image
                src="/art1.jpg"
                alt="Featured artwork"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-heart)] shadow-[0_0_0_3px_rgba(201,74,90,0.12)]"
            />
          </article>
        </section>

        <section id="about" className="flex flex-col gap-8 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-8 shadow-[0_20px_60px_var(--color-shadow-soft)]">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
              A little about my art
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-cocoa)]">
              The heart behind every stroke
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-relaxed text-[color:var(--color-ink)]/80 lg:grid-cols-2">
            <p>
              My art lives at the intersection of color, emotion, and intuition. Some
              pieces are abstract, some are not — but all of them are guided by feeling.
            </p>
            <p>
              I love playing with many colors and letting them find harmony together.
              Every brushstroke is intentional, every piece carries presence. I sign my
              work with a heart {heartPalette[2]} because love is always part of the process.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex w-fit items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-terracotta)] transition hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/25"
          >
            More about my art
          </Link>
        </section>

        <section id="featured" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
              The Be Collection
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-cocoa)]">
              These are ready artworks looking for a home.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--color-ink)]/80">
              Each piece is original and created in its own moment of flow.
            </p>
            <Link
              href="/available"
              className="inline-flex w-fit items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-terracotta)] transition hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/25"
            >
              See the full collection
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <div
                key={piece.title}
                className="relative h-64 overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] shadow-[0_20px_60px_var(--color-shadow-soft)] md:h-72"
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
          </div>
        </section>

        <section id="experiences" className="flex flex-col gap-8 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-8 shadow-[0_20px_60px_var(--color-shadow-soft)]">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
              Live art & experiences
            </p>
            <h2 className="text-3xl font-semibold text-[color:var(--color-cocoa)]">
              Art, shared in real time
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[color:var(--color-ink)]/80">
            I also paint live at events — from quick sketches and skin art to digital
            portraits. Art is even more powerful when shared in real time.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[color:var(--color-terracotta)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
            >
              Get in touch on Instagram
            </Link>
            <Link
              href={emailHref}
              className="inline-flex w-fit items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-6 py-3 text-sm font-semibold text-[color:var(--color-terracotta)] transition-colors hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/20"
            >
              Send an email
            </Link>
          </div>
        </section>

        <section id="connect" className="flex flex-col gap-12">
          <ContactCTA cindyName={cindyName} />
          <SiteFooter cindyName={cindyName} />
        </section>
      </main>
    </div>
  );
}
