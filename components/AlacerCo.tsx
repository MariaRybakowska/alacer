"use client";
import Link from "next/link";

export default function AlacerCo() {
  return (
    <section
      id="alacer-co"
      className="border-t border-[#4F382B] py-0 mt-24 bg-[#FAF7F2]"
    >
      <div className="flex flex-col md:flex-row w-full min-h-[320px]">
        {/* Projekty */}
        <Link
          href="/projekty"
          className="flex-1 flex flex-col justify-center items-start px-8 py-16 md:py-24 bg-gradient-to-br from-[#B48A6D] via-[#917E6E] to-[#4F382B] transition-transform hover:scale-[1.02] group"
          style={{ minWidth: 0 }}
        >
          <span className="text-sm uppercase tracking-widest text-white/80 mb-2 font-semibold">
            Projekty
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Alacer Projekty
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-md">
            Odkryj nasze realizacje w przestrzeniach publicznych i prywatnych
          </p>
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-white text-3xl transition-transform duration-200 group-hover:translate-x-2">
            →
          </span>
        </Link>
        {/* Produkty */}
        <Link
          href="/produkty"
          className="flex-1 flex flex-col justify-center items-start px-8 py-16 md:py-24 bg-gradient-to-br from-[#F5F0E8] via-[#E3C7A6] to-[#A3B6C2] transition-transform hover:scale-[1.02] group"
          style={{ minWidth: 0 }}
        >
          <span className="text-sm uppercase tracking-widest text-[#4F382B]/70 mb-2 font-semibold">
            Produkty
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4F382B] mb-4">
            Alacer Produkty
          </h2>
          <p className="text-lg md:text-xl text-[#4F382B]/80 mb-8 max-w-md">
            Poznaj naszą kolekcję paneli akustycznych i wykończeniowych
          </p>
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#4F382B]/10 text-[#4F382B] text-3xl transition-transform duration-200 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
