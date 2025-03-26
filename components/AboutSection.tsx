export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          o nas
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <p className="text-lg text-[#34302D] mb-6">
            Realizujemy projekty na terenie całego kraju od 2001 roku.
            Wieloletnie doświadczenie produkcyjne oraz wiedza w zakresie
            technologii i materiałów pozwala nam na tworzenie nowych,
            innowacyjnych rozwiązań w każdym kolejnym projekcie. Nasze
            realizacje łączą funkcję z estetyką i funkcjonalnością. Często
            zdarza się, że design utrudnia lub wręcz uniemożliwia osiągnięcie
            założeń akustycznych, wtedy wkraczamy do akcji...
          </p>
          <button className="border border-[#34302D] rounded px-8 py-2 text-lg text-[#4F382B] min-w-[200px]">
            Napisz do nas!
          </button>
          <div className="flex flex-col md:flex-row gap-6 mt-[73px]">
            {/* Wood Pattern */}
            <div className="relative w-full md:w-[33%] aspect-square bg-[#BFADA1] overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Inspired by Sonnet 045 - linear pattern */}
                <defs>
                  <linearGradient
                    id="woodGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0.1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0.3 }}
                    />
                  </linearGradient>
                </defs>
                {[...Array(8)].map((_, i) => (
                  <rect
                    key={i}
                    x={i * 12}
                    y="0"
                    width="8"
                    height="100"
                    fill="url(#woodGradient)"
                  />
                ))}
              </svg>
            </div>

            {/* Metal Pattern */}
            <div className="relative w-full md:w-[33%] aspect-square bg-[#BFADA1] overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Inspired by Sonnet 059 - circular gradient */}
                <defs>
                  <radialGradient id="metalGradient" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0.4 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0.1 }}
                    />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="url(#metalGradient)" />
              </svg>
            </div>

            {/* Acoustic Holes Pattern */}
            <div className="relative w-full md:w-[33%] aspect-square bg-[#BFADA1] overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Inspired by Sonnet 012 - dot pattern */}
                <defs>
                  <radialGradient id="holeGradient" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0.3 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#4F382B", stopOpacity: 0 }}
                    />
                  </radialGradient>
                </defs>
                {[...Array(16)].map((_, i) => (
                  <circle
                    key={i}
                    cx={(i % 4) * 25 + 12.5}
                    cy={Math.floor(i / 4) * 25 + 12.5}
                    r="8"
                    fill="url(#holeGradient)"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
