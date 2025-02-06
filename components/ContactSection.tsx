export default function ContactSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <h2 className="text-3xl text-[#917E6E] uppercase mb-6">kontakt</h2>
      <div className="max-w-[901px]">
        <p className="text-2xl text-[#34302D] mb-12">
          Priorytetem jest dla nas ścisła współpraca na każdym etapie, zapewniająca spersonalizowane podejście.
        </p>
        <div className="flex gap-[74px]">
          <form className="flex-grow">
            <input className="w-full bg-[#ECE4DC] p-5 mb-6" placeholder="Imię i Nazwisko" />
            <input className="w-full bg-[#ECE4DC] p-5 mb-6" placeholder="Mail" />
            <textarea className="w-full bg-[#ECE4DC] p-5 mb-6 h-24" placeholder="Napisz wiadomość"></textarea>
            <button className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B]">Wyślij</button>
          </form>
          <div>
            <div className="mb-9">
              <p className="text-[#34302D] text-base mb-1">telefon</p>
              <p className="text-[#4F382B] text-2xl font-bold">+48 888 88 88 88</p>
            </div>
            <div className="mb-9">
              <p className="text-[#34302D] text-base mb-1">mail</p>
              <p className="text-[#4F382B] text-2xl font-bold">alacer@alacer.com</p>
            </div>
            <div>
              <p className="text-[#34302D] text-base mb-1">adres</p>
              <p className="text-[#4F382B] text-2xl font-bold leading-tight">
                ul. Malinowa 13
                <br />
                60-185 Skórzewo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

