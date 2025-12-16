"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useCindyIdentity } from "../hooks/useCindyIdentity";

type AvailablePiece = {
  title: string;
  medium: string;
  size: string;
  sizeCategory: "Small" | "Medium" | "Large";
  description: string;
  price: string;
  collection: string;
  abstract: boolean;
  image?: string;
  accent: string;
};

const availablePieces: AvailablePiece[] = [
  {
    title: "Aurora Reverie",
    medium: "Oil on Canvas",
    size: "30 × 40 in",
    sizeCategory: "Large",
    description: "Captures the hush before sunrise with luminous ribbons of color.",
    price: "KSh 62,400",
    collection: "Skyline Stories",
    abstract: true,
    image: "/art1.jpg",
    accent: "var(--color-blush)",
  },
  {
    title: "Nocturne Garden",
    medium: "Mixed Media",
    size: "24 × 36 in",
    sizeCategory: "Medium",
    description: "Botanical silhouettes layered against nightfall hues.",
    price: "KSh 46,800",
    collection: "Modern Botanicals",
    abstract: false,
    accent: "var(--color-terracotta)",
  },
  {
    title: "Goldleaf Echoes",
    medium: "Acrylic & Gold Leaf",
    size: "36 × 36 in",
    sizeCategory: "Large",
    description: "Metallic leaf shimmering across a restrained neutral palette.",
    price: "KSh 67,600",
    collection: "Custom Commissions",
    abstract: false,
    accent: "var(--color-blush)",
  },
  {
    title: "Olive Stillness",
    medium: "Oil on Panel",
    size: "18 × 24 in",
    sizeCategory: "Small",
    description: "Quiet gradients of green tones inspired by dusk walks.",
    price: "KSh 28,500",
    collection: "Modern Botanicals",
    abstract: true,
    accent: "var(--color-olive)",
  },
  {
    title: "Terracotta Tide",
    medium: "Acrylic on Canvas",
    size: "22 × 28 in",
    sizeCategory: "Medium",
    description: "Flowing terracotta and blush waves that echo shoreline light.",
    price: "KSh 35,000",
    collection: "Skyline Stories",
    abstract: true,
    accent: "var(--color-terracotta)",
  },
];

const collections = ["All collections", "Modern Botanicals", "Skyline Stories", "Custom Commissions"];
const sizes = ["All sizes", "Small", "Medium", "Large"] as const;
const abstraction = ["All", "Abstract", "Non-abstract"] as const;

export default function AvailablePage() {
  const { cindyName, whatsappLink } = useCindyIdentity();

  const [query, setQuery] = useState("");
  const [collectionFilter, setCollectionFilter] = useState(collections[0]);
  const [sizeFilter, setSizeFilter] = useState<(typeof sizes)[number]>(sizes[0]);
  const [abstractFilter, setAbstractFilter] = useState<(typeof abstraction)[number]>(abstraction[0]);

  const filteredPieces = useMemo(() => {
    return availablePieces.filter((piece) => {
      const matchesQuery =
        query.trim().length === 0 ||
        `${piece.title} ${piece.description} ${piece.collection}`
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCollection =
        collectionFilter === "All collections" || piece.collection === collectionFilter;

      const matchesSize = sizeFilter === "All sizes" || piece.sizeCategory === sizeFilter;

      const matchesAbstract =
        abstractFilter === "All" ||
        (abstractFilter === "Abstract" ? piece.abstract : !piece.abstract);

      return matchesQuery && matchesCollection && matchesSize && matchesAbstract;
    });
  }, [query, collectionFilter, sizeFilter, abstractFilter]);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 sm:px-10 lg:gap-16">
      <SiteHeader cindyName={cindyName} />

      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium text-[color:var(--color-terracotta)]">Available pieces</p>
        <h1 className="text-4xl font-semibold leading-[1.1] text-[color:var(--color-heading)] sm:text-5xl">
          Browse, search, and filter the collection.
        </h1>
        <p className="text-lg leading-relaxed text-[color:var(--color-ink)]/80">
          Use filters to find the right size, collection, or vibe — abstract or not. If something
          speaks to you, reach out and we&apos;ll make it yours.
        </p>
      </header>

      <section className="flex flex-col gap-6 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)]/85 p-6 shadow-[0_20px_70px_var(--color-shadow-soft)]">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-cocoa)]">
            Search
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Title, description, collection"
              className="h-11 rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-3 text-[color:var(--color-ink)] placeholder:text-[color:var(--color-ink)]/50 focus:border-[color:var(--color-terracotta)] focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-cocoa)]">
            Collection
            <select
              value={collectionFilter}
              onChange={(event) => setCollectionFilter(event.target.value)}
              className="h-11 rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-3 text-[color:var(--color-ink)] focus:border-[color:var(--color-terracotta)] focus:outline-none"
            >
              {collections.map((collection) => (
                <option key={collection} value={collection}>
                  {collection}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-cocoa)]">
            Size
            <select
              value={sizeFilter}
              onChange={(event) => setSizeFilter(event.target.value as (typeof sizes)[number])}
              className="h-11 rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-3 text-[color:var(--color-ink)] focus:border-[color:var(--color-terracotta)] focus:outline-none"
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[color:var(--color-cocoa)]">
            Style
            <select
              value={abstractFilter}
              onChange={(event) =>
                setAbstractFilter(event.target.value as (typeof abstraction)[number])
              }
              className="h-11 rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-3 text-[color:var(--color-ink)] focus:border-[color:var(--color-terracotta)] focus:outline-none"
            >
              {abstraction.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--color-ink)]/70">
          <span>{filteredPieces.length} pieces</span>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCollectionFilter(collections[0]);
              setSizeFilter(sizes[0]);
              setAbstractFilter(abstraction[0]);
            }}
            className="rounded-full border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-3 py-1 text-[color:var(--color-terracotta)] transition hover:border-[color:var(--color-terracotta)]/50 hover:bg-[color:var(--color-blush)]/25"
          >
            Reset filters
          </button>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPieces.map((piece) => (
          <article
            key={piece.title}
            className="relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-6 shadow-[0_20px_60px_var(--color-shadow-soft)]"
          >
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
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.08em] text-[color:var(--color-ink)]/60">
                <span>{piece.collection}</span>
                <span>{piece.abstract ? "Abstract" : "Non-abstract"}</span>
              </div>
              <h2 className="text-xl font-semibold text-[color:var(--color-heading)]">
                {piece.title}
              </h2>
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
              href={whatsappLink(`Hi ${cindyName}, I’d love to order "${piece.title}"`)}
              className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-blush)]/30 px-4 py-2 text-sm font-semibold text-[color:var(--color-cocoa)] transition hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/50"
            >
              Order this piece via WhatsApp
            </Link>
          </article>
        ))}
      </section>

      <ContactCTA
        cindyName={cindyName}
        whatsappHref={whatsappLink(`Hi ${cindyName}, let’s chat about your art`)}
      />
      <SiteFooter cindyName={cindyName} />
    </main>
  );
}
