"use client";

import Link from "next/link";
import { NAV_SECTIONS } from "@/lib/sufit-listwowy/content";
import { cn } from "@/lib/utils";

type Props = {
  activeId: string;
  variant?: "sidebar" | "inline";
};

export default function TableOfContents({ activeId, variant = "sidebar" }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const list = (
    <ul className={cn(variant === "sidebar" ? "space-y-1" : "flex flex-wrap gap-x-4 gap-y-2")}>
      {NAV_SECTIONS.map(({ id, label }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => scrollTo(id)}
            className={cn(
              "text-left transition-colors",
              variant === "sidebar"
                ? cn(
                    "block w-full py-1.5 pl-3 text-sm border-l-2 -ml-px",
                    activeId === id
                      ? "text-alacer-primary border-alacer-primary font-medium"
                      : "text-alacer-secondary border-transparent hover:text-alacer-primary hover:border-alacer-primary/30"
                  )
                : cn(
                    "text-xs font-medium tracking-wide uppercase",
                    activeId === id
                      ? "text-alacer-primary"
                      : "text-alacer-secondary hover:text-alacer-primary"
                  )
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );

  if (variant === "inline") {
    return (
      <nav aria-label="Spis treści" className="lg:hidden mb-10 pb-8 border-b border-alacer-primary/10">
        <Link
          href="/produkty"
          className="inline-block text-xs text-alacer-secondary hover:text-alacer-primary transition-colors mb-5"
        >
          ← Produkty
        </Link>
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-alacer-secondary mb-4">
          Spis treści
        </p>
        {list}
      </nav>
    );
  }

  return (
    <nav
      aria-label="Spis treści"
      className="hidden lg:block w-40 xl:w-44 shrink-0"
    >
      <div className="sticky top-28">
        <Link
          href="/produkty"
          className="inline-block text-xs text-alacer-secondary hover:text-alacer-primary transition-colors mb-6"
        >
          ← Produkty
        </Link>
        <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-alacer-secondary mb-4">
          Spis treści
        </p>
        {list}
      </div>
    </nav>
  );
}
