"use client";

import Image from "next/image";
import Link from "next/link";
import ContactCTA from "../components/ContactCTA";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { useCindyIdentity } from "../hooks/useCindyIdentity";

const heroImage = "/art1.jpg";

export default function AboutPage() {
  const { cindyName, whatsappLink } = useCindyIdentity();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-24 pt-16 sm:px-10 lg:gap-20">
      <SiteHeader cindyName={cindyName} />

      <header className="flex flex-col gap-3">
        <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
          A little about my art
        </p>
        <h1 className="text-4xl font-semibold leading-[1.1] text-[color:var(--color-heading)] sm:text-5xl">
          I paint feelings. I let color lead. I trust the process.
        </h1>
        <p className="text-lg leading-relaxed text-[color:var(--color-ink)]/80">
          Some pieces speak loudly, others softly — but all are created with care,
          presence, and heart ❤️. Welcome in.
        </p>
      </header>

      <section className="grid gap-10 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)]/80 p-8 shadow-[0_24px_80px_var(--color-shadow-soft)] lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
        <div className="relative h-80 overflow-hidden rounded-lg border border-[color:var(--color-border-soft)] shadow-[0_20px_60px_var(--color-shadow-soft)] sm:h-96">
          <Image
            src={heroImage}
            alt="Cindy painting in the studio"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-[color:var(--color-ink)]/85">
          <p>
            I’ve always been drawn to playing with many colors at once, letting them
            exist together until they find harmony. That process feels a lot like life
            to me — layered, imperfect, and beautiful when given space.
          </p>
          <p>
            Each piece is created in its own moment of flow. Sometimes it’s calm,
            sometimes it’s expressive, sometimes it’s playful. I don’t force meaning
            into my work — I let it reveal itself naturally.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)]/80 p-8 shadow-[0_20px_70px_var(--color-shadow-soft)]">
        <h2 className="text-3xl font-semibold text-[color:var(--color-heading)]">
          What I believe
        </h2>
        <ul className="flex flex-col gap-3 text-lg leading-relaxed text-[color:var(--color-ink)]/85">
          <li>Art doesn’t have to be explained to be felt</li>
          <li>Color has its own language</li>
          <li>Creation is an act of love</li>
          <li>Art should feel human, not distant</li>
          <li>I hope my art makes you feel something</li>
        </ul>
      </section>

      <ContactCTA
        cindyName={cindyName}
        whatsappHref={whatsappLink(`Hi ${cindyName}, let’s chat about your art`)}
      />
      <SiteFooter cindyName={cindyName} />
    </main>
  );
}
