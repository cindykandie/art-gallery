import Link from "next/link";
import { emailHref, instagramUrl } from "../hooks/useCindyIdentity";

type SiteFooterProps = {
  cindyName: string;
};

export default function SiteFooter({ cindyName }: SiteFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-[color:var(--color-border-soft)] pt-10 text-sm text-[color:var(--color-ink)]/70 sm:flex-row">
      <p>© {new Date().getFullYear()} Painted by {cindyName}. All rights reserved.</p>
      <div className="flex gap-4">
        <Link className="hover:text-[color:var(--color-terracotta)]" href={instagramUrl} target="_blank" rel="noreferrer">
          Instagram
        </Link>
        <Link className="hover:text-[color:var(--color-terracotta)]" href={emailHref}>
          Email
        </Link>
      </div>
    </footer>
  );
}
