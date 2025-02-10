export default function ContactSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          kontakt
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <p className="text-2xl text-[#34302D] mb-12">
            Priorytetem jest dla nas ścisła współpraca na każdym etapie,
            zapewniająca spersonalizowane podejście.
          </p>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-[74px]">
            <form className="flex-grow max-w-[640px]">
              <input
                className="w-full bg-[#ECE4DC] p-5 mb-6"
                placeholder="Imię i Nazwisko"
              />
              <input
                className="w-full bg-[#ECE4DC] p-5 mb-6"
                placeholder="Mail"
              />
              <textarea
                className="w-full bg-[#ECE4DC] p-5 mb-6 h-24"
                placeholder="Napisz wiadomość"
              ></textarea>
              <button className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B]">
                Wyślij
              </button>
            </form>
            <div className="lg:w-[300px] shrink-0">
              <div className="mb-12">
                <p className="text-[#a5a2a0] text-base mb-1">telefon</p>
                <p className="text-[#4F382B] text-xl font-bold">
                  +48 888 88 88 88
                </p>
              </div>
              <div className="mb-9">
                <p className="text-[#a5a2a0] text-base mb-1">mail</p>
                <p className="text-[#4F382B] text-xl font-bold">
                  alacer@alacer.com
                </p>
              </div>
              <div>
                <p className="text-[#a5a2a0] text-base mb-1">adres</p>
                <p className="text-[#4F382B] text-xl font-bold leading-tight">
                  ul. Malinowa 13
                  <br />
                  60-185 Skórzewo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
