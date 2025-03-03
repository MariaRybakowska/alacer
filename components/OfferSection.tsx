export default function OfferSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          Oferta
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <p className="text-2xl text-[#34302D] mb-11">
            Pracujemy nad projektami w składzie:{" "}
            <strong>akustyk, architekt, konstruktor, technolog</strong> -
            pozwala nam to zespołowo rozwiązać nawet najtrudniejsze problemy i
            przeskoczyć ograniczenia z dużą uwagą dla każdego aspektu zadania
          </p>
          <div className="text-[28px] lg:text-[60px] text-[#4F382B] font-light leading-tight">
            <p>
              <span className="text-lg">01</span> Konsultacje projektowe
            </p>
            <p className="mt-6">
              <span className="text-lg">02</span> Projekt i koncepcja
            </p>
            <p className="mt-6">
              <span className="text-lg">03</span> Wybór materiałów
            </p>
            <p className="mt-6">
              <span className="text-lg">04</span> Realizacja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
