"use client";

import Image from "next/image";
import Link from "next/link";
import ContactCTA from "./components/ContactCTA";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { heartPalette, useCindyIdentity } from "./hooks/useCindyIdentity";

const featuredPieces = [
  {
    title: "Aurora Reverie",
    medium: "Oil on Canvas",
    description: "Captures the hush before sunrise with luminous ribbons of color.",
    price: "KSh 62,400",
    size: "30 × 40 in",
    accent: "var(--color-blush)",
    image: "/art1.jpg",
  },
  {
    title: "Nocturne Garden",
    medium: "Mixed Media",
    description: "A layered exploration of botanical silhouettes against nightfall.",
    price: "KSh 46,800",
    size: "24 × 36 in",
    accent: "var(--color-terracotta)",
  },
  {
    title: "Goldleaf Echoes",
    medium: "Acrylic & Gold Leaf",
    description: "Hand-applied metallic leaf shimmers across a restrained neutral palette.",
    price: "KSh 67,600",
    size: "36 × 36 in",
    accent: "var(--color-blush)",
  },
];

const collections = [
  {
    title: "Modern Botanicals",
    blurb: "Sculptural petals and negative space for serene living spaces.",
  },
  {
    title: "Skyline Stories",
    blurb: "Dreamy skylines layered with gestures, texture, and quiet drama.",
  },
  {
    title: "Custom Commissions",
    blurb: "Collaborate on a bespoke piece that reflects your home and story.",
  },
];

const testimonials = [
  {
    quote:
      "Cindy❤️ translated memories from our travels into a piece that feels alive. The colors shift beautifully with the light.",
    author: "Elena & Marcus, Brooklyn",
  },
  {
    quote:
      "Our lobby needed warmth without distraction. The triptych she created is now the focal point of the space.",
    author: "Parker Design Studio",
  },
  {
    quote:
      "From the first sketch to delivery, her process was collaborative, thoughtful, and joyful.",
    author: "Janelle H., Seattle",
  },
];

const heroArt = "/art1.jpg";

export default function Home() {
  const { cindyName, whatsappLink } = useCindyIdentity();

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
              Hi, I’m {cindyName}
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.15] text-[color:var(--color-cocoa)] sm:text-5xl lg:text-6xl">
              I paint emotions through color.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[color:var(--color-ink)]/80">
              Each piece is created with intention, emotion, and harmony — whether
              abstract or not. Browse, feel, and if something speaks to you, let’s
              make it yours.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-xl bg-[color:var(--color-terracotta)] px-8 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
              >
                View the collection
              </Link>
              <a
                href={whatsappLink(`Hi ${cindyName}, I’d love to order a painting`)}
                className="inline-flex items-center justify-center rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-8 py-3 text-sm font-semibold text-[color:var(--color-terracotta)] transition-colors hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/20"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>

          <article className="relative flex flex-col gap-6 overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-8 shadow-[0_24px_80px_var(--color-shadow-soft)] backdrop-blur">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,166,176,0.28),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(199,109,74,0.22),transparent_45%)]"
            />
            <div className="relative isolate h-64 overflow-hidden rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] shadow-[0_16px_40px_var(--color-shadow-soft)]">
              <Image
                src={heroArt}
                alt="Featured artwork titled Aurora Reverie"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative isolate flex flex-col gap-3">
              <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
                Studio highlight
              </p>
              <h2 className="text-3xl font-semibold text-[color:var(--color-cocoa)]">
                Aurora Reverie
              </h2>
              <p className="text-sm text-[color:var(--color-ink)]/70">
                Oil on Canvas · 30 × 40 in
              </p>
            </div>
            <div className="relative isolate rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-6 shadow-[0_16px_40px_var(--color-shadow-soft)]">
              <p className="text-base leading-relaxed text-[color:var(--color-ink)]/80">
                “Soft ribbons of light meet deep blues inspired by late winter mornings
                on the lake.”
              </p>
            </div>
            <div className="relative isolate flex items-center justify-between text-sm text-[color:var(--color-cocoa)]">
              <span>Available · ships worldwide</span>
              <span className="font-semibold">KSh 62,400</span>
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
              Available pieces
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
              More available work
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <article
                key={piece.title}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-6 shadow-[0_20px_60px_var(--color-shadow-soft)]"
              >
                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="relative h-44 overflow-hidden rounded-lg border border-[color:var(--color-border-soft)] shadow-[0_16px_40px_var(--color-shadow-soft)]">
                    {piece.image ? (
                      <Image
                        src={piece.image}
                        alt={piece.title}
                        fill
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: `linear-gradient(135deg, ${piece.accent} 0%, rgba(46,46,46,0.04) 100%)`,
                        }}
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold text-[color:var(--color-cocoa)]">
                      {piece.title}
                    </h3>
                    <p className="text-sm text-[color:var(--color-ink)]/70">
                      {piece.medium} · {piece.size}
                    </p>
                    <p className="text-sm leading-relaxed text-[color:var(--color-ink)]/80">
                      {piece.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-sm text-[color:var(--color-cocoa)]">
                    <span>Original · signed</span>
                    <span className="font-semibold">{piece.price}</span>
                  </div>
                  <Link
                    href={whatsappLink(`Hi ${cindyName}, I’d love to order this piece`)}
                    className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-blush)]/30 px-4 py-2 text-sm font-semibold text-[color:var(--color-cocoa)] transition hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/50"
                  >
                    Order this piece via WhatsApp
                  </Link>
                </div>
              </article>
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
          <Link
            href={whatsappLink(`Hi ${cindyName}, let’s plan live art for our event`)}
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[color:var(--color-terracotta)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
          >
            Book for an event
          </Link>
        </section>

        <section id="connect" className="flex flex-col gap-12">
          <ContactCTA
            cindyName={cindyName}
            whatsappHref={whatsappLink(`Hi ${cindyName}, let’s chat about your art`)}
          />
          <SiteFooter cindyName={cindyName} />
        </section>
      </main>
    </div>
  );
}
