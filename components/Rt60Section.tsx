import { RT60_URL } from "@/lib/rt60";

function DevicePreview() {
  return (
    <div className="relative mx-auto w-[min(100%,260px)]" aria-hidden="true">
      <div className="rounded-[2rem] border border-[#4F382B]/20 bg-[#34302D] p-2.5 shadow-[0_16px_40px_rgba(79,56,43,0.18)]">
        <div className="relative overflow-hidden rounded-[1.35rem] bg-[#0F1418]">
          <div className="relative px-4 pt-3 pb-4">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[#2A343D]" />

            <div className="mb-4 flex gap-1">
              <span className="h-0.5 flex-1 rounded-full bg-[#FFB020]" />
              <span className="h-0.5 flex-1 rounded-full bg-[#2A343D]" />
              <span className="h-0.5 flex-1 rounded-full bg-[#2A343D]" />
              <span className="h-0.5 flex-1 rounded-full bg-[#2A343D]" />
            </div>

            <p className="mb-3 text-[9px] uppercase tracking-[0.18em] text-[#917E6E]">
              Badanie akustyczne · 4 minuty
            </p>

            <p className="mb-4 text-[15px] font-medium leading-snug text-[#E8EBEC]">
              Zmierz, jak długo dźwięk wybrzmiewa
            </p>

            <div className="mb-4 rounded-lg border border-[#2A343D] bg-[#171D22] px-3 py-3">
              <svg
                viewBox="0 0 240 56"
                className="w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 28h12 M228 28h12" stroke="#2A343D" strokeWidth="1" />
                <path
                  d="M12 28
                     C18 28 20 8 26 8
                     C32 8 34 48 40 48
                     C46 48 48 14 54 14
                     C60 14 62 42 68 42
                     C74 42 76 18 82 18
                     C88 18 90 38 96 38
                     C102 38 104 22 110 22
                     C116 22 118 34 124 34
                     C130 34 132 24 138 24
                     C144 24 146 32 152 32
                     C158 32 160 26 166 26
                     C172 26 174 30 180 30
                     C186 30 192 28 228 28"
                  stroke="#FFB020"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mb-3 flex items-center justify-between text-[10px] text-[#8B98A2]">
              <span>Krok 1 z 4</span>
              <span>01 / 04</span>
            </div>

            <div className="flex items-center justify-center rounded-md bg-[#FFB020] py-2.5 text-[12px] font-medium text-[#101418]">
              Dalej
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Rt60Section() {
  return (
    <section
      id="badanie"
      className="border-t border-[#4F382B] py-6 mt-24 scroll-mt-[88px]"
      aria-labelledby="rt60-heading"
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
        <div className="lg:col-span-6">
          <p className="text-2xl text-[#917E6E] uppercase mb-6">
            Narzędzie online
          </p>
          <h2
            id="rt60-heading"
            className="text-2xl md:text-3xl text-[#4F382B] font-light mb-6"
          >
            Sprawdź akustykę swojego wnętrza.
          </h2>
          <p className="text-lg text-[#34302D]/80 mb-8 max-w-xl">
            Zmierz czas pogłosu za pomocą telefonu. Badanie zajmuje około 4
            minut i nie wymaga dodatkowego sprzętu.
          </p>
          <a
            href={RT60_URL}
            className="inline-flex items-center justify-center px-6 py-3 border border-[#4F382B] text-[#4F382B] rounded-full hover:bg-[#4F382B] hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F382B] focus-visible:ring-offset-2"
          >
            Rozpocznij badanie →
          </a>
        </div>

        <div className="lg:col-span-6 mt-12 lg:mt-0 flex justify-center">
          <a
            href={RT60_URL}
            className="block w-fit rounded-[2rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F382B] focus-visible:ring-offset-2"
            aria-label="Rozpocznij badanie"
          >
            <DevicePreview />
          </a>
        </div>
      </div>
    </section>
  );
}
