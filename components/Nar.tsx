"use client";
import Link from "next/link";

export default function Nar() {
  return (
    <section id="nar" className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-2xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          N.a.r.
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <div className="space-y-6">
            <h3 className="text-2xl text-[#4F382B] font-light">
              Nasze narzędzie do inteligentnej analizy akustycznej
            </h3>

            <div className="space-y-6 text-lg text-[#34302D]/80">
              <p>
                Ponad 20 lat doświadczenia i dziesiątki zrealizowanych projektów
                (
                <Link
                  href="/projekty"
                  className="text-[#917E6E] hover:text-[#4F382B] transition-colors duration-200 underline"
                >
                  zobacz portfolio
                </Link>
                ) doprowadziły nas do stworzenia N.A.R. <br /> Jest to autorski
                program do analizy akustycznej wnętrz. To nasz pierwszy cyfrowy
                produkt, wspierany przez AI, który automatyzuje ocenę parametrów
                akustycznych i znacząco zwiększa skuteczność proponowanych
                rozwiązań. Szybciej, dokładniej i na większą skalę. To
                technologia, dzięki której projektujemy przestrzenie, które
                naprawdę dobrze brzmią.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://nar.alacer.pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#4F382B] text-[#4F382B] rounded-full hover:bg-[#4F382B] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Odwiedź N.A.R. →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
