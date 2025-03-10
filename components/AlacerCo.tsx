"use client";
import Link from "next/link";
import Image from "next/image";

export default function AlacerCo() {
  return (
    <section id="alacer-co" className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          CO ROBIMY
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Projects Card */}
            <Link href="/projekty" className="flex-1 group">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/main-page/projekt.svg"
                    alt="Projekty"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center p-8">
                  <div>
                    <h3 className="font-satoshi text-[#4F382B] text-5xl font-medium mb-4">
                      01
                    </h3>
                    <p className="text-[#4F382B]/80 text-xl font-light relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#4F382B]/40 after:transition-all after:duration-300 group-hover:after:w-full">
                      Alacer Projekty
                    </p>
                  </div>
                  <span className="text-[#4F382B]/60 transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>

            {/* Products Card */}
            <Link href="/produkty" className="flex-1 group">
              <div className="shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/main-page/produkt.svg"
                    alt="Produkty"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center p-8">
                  <div>
                    <h3 className="font-satoshi text-[#4F382B] text-5xl font-medium mb-4">
                      02
                    </h3>
                    <p className="text-[#4F382B]/80 text-xl font-light relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-[#4F382B]/40 after:transition-all after:duration-300 group-hover:after:w-full">
                      Alacer Produkty
                    </p>
                  </div>
                  <span className="text-[#4F382B]/60 transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
