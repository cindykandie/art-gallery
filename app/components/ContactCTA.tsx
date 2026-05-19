import Link from "next/link";
import { emailHref, instagramUrl } from "../hooks/useCindyIdentity";

type ContactCTAProps = {
  cindyName: string;
};

export default function ContactCTA({ cindyName }: ContactCTAProps) {
  return (
    <section
      id="connect"
      className="flex flex-col gap-8 rounded-xl border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] p-10 text-center shadow-[0_20px_60px_var(--color-shadow-soft)] sm:text-left"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-[color:var(--color-terracotta)]">
            Thank you for being here 🫶🏽
          </p>
          <h2 className="text-3xl font-semibold text-[color:var(--color-heading)]">
            Art is meant to be felt — and I&apos;m grateful you&apos;re part of this journey.
          </h2>
        </div>
        <p className="text-sm text-[color:var(--color-ink)]/80 sm:max-w-sm">
          If something speaks to you, let&apos;s talk. I&apos;m always happy to share more
          about each piece or plan something new together.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-[color:var(--color-terracotta)] px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(199,109,74,0.25)] transition-colors hover:bg-[color:var(--color-terracotta)]/90"
        >
          Follow {cindyName} on Instagram
        </Link>
        <Link
          href={emailHref}
          className="inline-flex items-center justify-center rounded-lg border border-[color:var(--color-border-soft)] bg-[color:var(--color-canvas)] px-8 py-3 text-sm font-semibold text-[color:var(--color-terracotta)] transition-colors hover:border-[color:var(--color-terracotta)]/60 hover:bg-[color:var(--color-blush)]/20"
        >
          Send an email
        </Link>
      </div>
    </section>
  );
}
