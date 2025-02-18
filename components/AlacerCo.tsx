"use client";
import Link from "next/link";
import Image from "next/image";

export default function AlacerCo() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          Alacer co.
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Projects Card */}
            <div className="flex-1 flex flex-col">
              <div className="bg-[#BFADA1] p-8 mb-4 h-full">
                <div className="flex flex-col  w-[250px] mx-auto">
                  <Image
                    src="/main-page/alacer-projekty.png"
                    alt="Projekty"
                    width={250}
                    height={120}
                    className="mb-6"
                  />
                  <h3 className="text-[#4F382B] text-xl font-medium">
                    ALACER PROJEKTY
                  </h3>
                  <p className="text-[#4F382B] text-base mt-1 text-left">
                    Kompleksowe projekty akustyczne i wykonczeniowe na terenie
                    całej Polski.
                  </p>
                </div>
              </div>
              <Link
                href="/projekty"
                className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B] hover:bg-[#34302D] hover:text-white transition-colors text-center"
              >
                Zobacz projekty
              </Link>
            </div>

            {/* Products Card */}
            <div className="flex-1 flex flex-col">
              <div className="bg-[#ECE4DC] p-8 mb-4 h-full">
                <div className="flex flex-col  w-[250px] mx-auto">
                  <Image
                    src="/main-page/alacer-produkty.png"
                    alt="Produkty"
                    width={250}
                    height={120}
                    className="mb-6"
                  />
                  <h3 className="text-[#4F382B] text-xl font-medium">
                    ALACER PRODUKTY
                  </h3>
                  <p className="text-[#4F382B] text-base mt-1 text-left">
                    Produkty akustycznych i rozwiązań dźwiękochłonnych
                    najwyższej jakości dla indywidualnych klientów.
                  </p>
                </div>
              </div>
              <Link
                href="/produkty"
                className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B] hover:bg-[#34302D] hover:text-white transition-colors text-center"
              >
                Zobacz produkty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
