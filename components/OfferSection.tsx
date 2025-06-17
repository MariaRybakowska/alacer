export default function OfferSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-2xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          Oferta
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {/* 01 Konsultacje projektowe */}
            <div>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-base text-[#917E6E]">01</span>
                <h3 className="text-2xl text-[#4F382B] font-light mt-1">
                  Konsultacje projektowe
                </h3>
              </div>
              <p className="text-lg text-[#34302D]/80">
                Oferujemy doradztwo i konsultacje, a także usługi projektowe,
                pomiarowe, wykonawcze i nadzorcze w projektach akustycznych.
              </p>
            </div>

            {/* 02 Projekt i koncepcja */}
            <div>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-base text-[#917E6E]">02</span>
                <h3 className="text-2xl text-[#4F382B] font-light mt-1">
                  Projekt i koncepcja
                </h3>
              </div>
              <p className="text-lg text-[#34302D]/80">
                Tworzymy kompleksowe projekty akustyczne, łącząc innowacyjne
                rozwiązania z estetycznym designem dostosowanym do potrzeb
                klienta.
              </p>
            </div>

            {/* 03 Wybór materiałów */}
            <div>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-base text-[#917E6E]">03</span>
                <h3 className="text-2xl text-[#4F382B] font-light mt-1">
                  Wybór materiałów
                </h3>
              </div>
              <p className="text-lg text-[#34302D]/80">
                Dobieramy najwyższej jakości materiały akustyczne, uwzględniając
                zarówno ich właściwości techniczne jak i aspekty wizualne.
              </p>
            </div>

            {/* 04 Realizacja */}
            <div>
              <div className="mb-4 flex items-baseline gap-4">
                <span className="text-base text-[#917E6E]">04</span>
                <h3 className="text-2xl text-[#4F382B] font-light mt-1">
                  Realizacja
                </h3>
              </div>
              <p className="text-lg text-[#34302D]/80">
                Zapewniamy profesjonalną realizację projektów, nadzorując każdy
                etap procesu wykonawczego dla osiągnięcia najlepszych
                rezultatów.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
