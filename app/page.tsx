"use client";

import Link from "next/link";
import { useState } from "react";

const featuredPieces = [
  {
    title: "Aurora Reverie",
    medium: "Oil on Canvas",
    description: "Captures the hush before sunrise with luminous ribbons of color.",
    price: "$480",
    size: "30 × 40 in",
    background: "from-fuchsia-500/50 via-indigo-400/30 to-sky-400/40",
  },
  {
    title: "Nocturne Garden",
    medium: "Mixed Media",
    description: "A layered exploration of botanical silhouettes against nightfall.",
    price: "$360",
    size: "24 × 36 in",
    background: "from-emerald-400/50 via-slate-900/40 to-emerald-600/30",
  },
  {
    title: "Goldleaf Echoes",
    medium: "Acrylic & Gold Leaf",
    description: "Hand-applied metallic leaf shimmers across a restrained neutral palette.",
    price: "$520",
    size: "36 × 36 in",
    background: "from-amber-400/60 via-zinc-900/40 to-orange-500/40",
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
      "Cindy translated memories from our travels into a piece that feels alive. The colors shift beautifully with the light.",
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

const navItems = [
  { label: "Originals", href: "#featured" },
  { label: "Collections", href: "#collections" },
  { label: "Stories", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_#1e1b4b_0%,_#0f172a_45%,_#020617_100%)] text-zinc-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-44 h-80 w-80 rounded-full bg-emerald-500/20 blur-[160px] sm:-left-10 sm:top-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-72 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[180px]"
      />
      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-10 lg:gap-32">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-40 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <header className="flex w-full flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-lg font-semibold tracking-wider text-white">
              CK
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Cindy Kandie Art Gallery
            </p>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.2em] text-zinc-400 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="transition-colors hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/70 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((previous) => !previous)}
            >
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-white transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"}`}
              />
            </button>
          </div>
        </header>
        {menuOpen ? (
          <nav className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm uppercase tracking-[0.25em] text-zinc-200 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-3 text-center transition-colors hover:border-white/30 hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}

        <section className="relative grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
              Original art for soulful spaces
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Invite luminous color and grounded textures into your daily rituals.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-zinc-300">
              Each piece is layered by hand in the studio using reclaimed pigments,
              metallic leaf, and translucent glazes. Discover ready-to-hang originals
              or collaborate on a commission that carries your story.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#featured"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition-colors hover:bg-zinc-200"
              >
                Explore Originals
              </Link>
              <a
                href="mailto:hello@cindykandieart.com"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Commission A Piece
              </a>
            </div>
          </div>

          <article className="relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5"
            />
            <div
              aria-hidden="true"
              className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-amber-400/30 blur-3xl"
            />
            <div className="relative isolate flex flex-col gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                Studio Highlight
              </p>
              <h2 className="text-3xl font-semibold text-white">Aurora Reverie</h2>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Oil on Canvas • 30 × 40 in
              </p>
            </div>
            <div className="relative isolate rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/40 via-indigo-400/30 to-sky-400/40 p-6 shadow-md shadow-fuchsia-500/20">
              <p className="text-sm leading-6 text-white/80">
                “Soft ribbons of light meet deep blues inspired by late winter mornings
                on the lake.”
              </p>
            </div>
            <div className="relative isolate flex items-center justify-between text-sm text-white/80">
              <span>Available • ships worldwide</span>
              <span className="font-medium text-white">$480</span>
            </div>
          </article>
        </section>

        <section id="featured" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
              Curated originals
            </p>
            <h2 className="text-3xl font-semibold text-white">
              One-of-a-kind artworks ready to live with you.
            </h2>
            <p className="max-w-2xl text-lg text-zinc-300">
              Each painting is sealed with archival varnish and arrives framed with a
              certificate of authenticity.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <article
                key={piece.title}
                className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-indigo-500/10 to-transparent p-6 shadow-lg shadow-black/20"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5"
                />
                <div className="relative z-10 flex h-full flex-col gap-6">
                  <div
                    className={`h-44 rounded-2xl border border-white/10 bg-gradient-to-br ${piece.background}`}
                  />
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-white">{piece.title}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                      {piece.medium} • {piece.size}
                    </p>
                    <p className="text-sm leading-6 text-zinc-300">{piece.description}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between text-sm">
                    <span className="text-white/70">Original • signed</span>
                    <span className="text-white font-medium">{piece.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="collections" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
              Collections
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Explore the narratives that run through the studio.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <article
                key={collection.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-emerald-400/10 to-transparent p-6"
              >
                <h3 className="text-xl font-semibold text-white">{collection.title}</h3>
                <p className="text-sm leading-6 text-zinc-300">{collection.blurb}</p>
                <Link
                  href="mailto:hello@cindykandieart.com?subject=Collection%20Inquiry"
                  className="mt-auto text-sm uppercase tracking-[0.3em] text-amber-200 transition-colors hover:text-white"
                >
                  Request catalogue →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonials" className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
              Collectors&apos; words
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Art that becomes part of your everyday rituals.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="flex h-full flex-col gap-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-fuchsia-500/10 to-transparent p-6"
              >
                <p className="text-sm leading-7 text-zinc-200">“{testimonial.quote}”</p>
                <footer className="mt-auto text-sm uppercase tracking-[0.2em] text-white/60">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="connect"
          className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-indigo-500/10 to-transparent p-10 text-center sm:text-left"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">
                Stay in the studio loop
              </p>
              <h2 className="text-3xl font-semibold text-white">
                Join monthly studio notes for new releases and process films.
              </h2>
            </div>
            <p className="text-sm text-zinc-200 sm:max-w-sm">
              No spam, just behind-the-scenes glimpses and first access to limited
              editions.
            </p>
          </div>
          <form className="flex flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-6 text-sm uppercase tracking-[0.2em] text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-900 transition-colors hover:bg-zinc-200"
            >
              Notify me
            </button>
          </form>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-10 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Cindy Kandie Art Gallery. All rights reserved.</p>
          <div className="flex gap-4 uppercase tracking-[0.2em]">
            <a className="hover:text-white" href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:text-white" href="https://www.pinterest.com" target="_blank" rel="noreferrer">
              Pinterest
            </a>
            <a className="hover:text-white" href="mailto:hello@cindykandieart.com">
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
