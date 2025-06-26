"use client";

export default function StyleGuide() {
  return (
    <div className="bg-[#FAF7F2] text-[#34302D] min-h-screen">
      {/* Header */}
      <header className="border-b border-[#4F382B]/20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="font-bold text-lg md:text-xl text-[#4F382B]">
                  Alacer Design System
                </h1>
                <p className="font-light text-xs md:text-sm text-[#917E6E]">
                  Style Guide & Components
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-xs md:text-sm text-[#4F382B]">
                v1.0
              </p>
              <p className="font-light text-xs text-[#917E6E]">2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Typography Section */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-[#4F382B]/10 rounded-lg p-6 h-full">
              <h2 className="font-bold text-lg text-[#4F382B] mb-6 border-b border-[#4F382B]/20 pb-3">
                Typography
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-2">
                    HEADINGS
                  </p>
                  <h1 className="font-bold text-2xl text-[#4F382B] mb-2">
                    Hero Title
                  </h1>
                  <h2 className="font-bold text-xl text-[#4F382B] mb-2">
                    Section Title
                  </h2>
                  <h3 className="font-medium text-lg text-[#4F382B]">
                    Subsection
                  </h3>
                </div>

                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-2">
                    BODY TEXT
                  </p>
                  <p className="font-normal text-base text-[#4F382B] mb-2">
                    Regular paragraph text for main content
                  </p>
                  <p className="font-light text-sm text-[#917E6E]">
                    Light text for secondary information
                  </p>
                </div>

                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-2">
                    LABELS
                  </p>
                  <span className="font-medium text-xs text-[#917E6E] uppercase tracking-widest">
                    Navigation Label
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-[#4F382B]/10 rounded-lg p-6 h-full">
              <h2 className="font-bold text-lg text-[#4F382B] mb-6 border-b border-[#4F382B]/20 pb-3">
                Color Palette
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    PRIMARY
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#4F382B] h-12 rounded flex items-end p-2">
                      <span className="text-white text-xs font-light">
                        #4F382B
                      </span>
                    </div>
                    <div className="bg-[#917E6E] h-12 rounded flex items-end p-2">
                      <span className="text-white text-xs font-light">
                        #917E6E
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    SECONDARY
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#B48A6D] h-12 rounded flex items-end p-2">
                      <span className="text-white text-xs font-light">
                        #B48A6D
                      </span>
                    </div>
                    <div className="bg-[#A3B6C2] h-12 rounded flex items-end p-2">
                      <span className="text-white text-xs font-light">
                        #A3B6C2
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    NEUTRAL
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-[#FAF7F2] h-10 rounded border border-[#4F382B]/20 flex items-end p-2">
                      <span className="text-[#4F382B] text-xs font-light">
                        #FAF7F2
                      </span>
                    </div>
                    <div className="bg-[#E3C7A6] h-10 rounded flex items-end p-2">
                      <span className="text-[#4F382B] text-xs font-light">
                        #E3C7A6
                      </span>
                    </div>
                    <div className="bg-[#34302D] h-10 rounded flex items-end p-2">
                      <span className="text-white text-xs font-light">
                        #34302D
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-[#4F382B]/10 rounded-lg p-6 h-full">
              <h2 className="font-bold text-lg text-[#4F382B] mb-6 border-b border-[#4F382B]/20 pb-3">
                Components
              </h2>

              <div className="space-y-6">
                {/* Buttons */}
                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    BUTTONS
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 rounded-full bg-white/30 backdrop-blur-md text-[#4F382B] font-medium text-sm border border-[#4F382B]/30 hover:bg-white/40 transition-all duration-200">
                      Primary Button
                    </button>
                    <button className="w-full px-6 py-2 text-[#4F382B] font-medium text-sm hover:opacity-70 transition-opacity duration-200 underline">
                      Text Button
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    CARDS
                  </p>
                  <div className="bg-gradient-to-br from-[#B48A6D] to-[#4F382B] rounded-lg p-4 text-white">
                    <span className="font-light text-xs uppercase tracking-widest text-white/80">
                      Portfolio
                    </span>
                    <h3 className="font-bold text-lg mt-1 mb-2">Card Title</h3>
                    <p className="font-light text-sm text-white/90">
                      Card description text
                    </p>
                    <div className="mt-3 flex items-center justify-end">
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid System */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-[#4F382B]/10 rounded-lg p-6">
              <h2 className="font-bold text-lg text-[#4F382B] mb-6 border-b border-[#4F382B]/20 pb-3">
                Grid System
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-light text-xs text-[#917E6E] mb-3">
                    12-COLUMN GRID • MAX-WIDTH: 1440PX
                  </p>
                  <div className="grid grid-cols-12 gap-2 h-8">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="bg-[#4F382B]/10 rounded"></div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-light text-xs text-[#917E6E] mb-2">
                      BREAKPOINTS
                    </p>
                    <div className="text-sm font-normal space-y-1">
                      <div>Mobile: &lt; 768px</div>
                      <div>Tablet: 768px - 1024px</div>
                      <div>Desktop: &gt; 1024px</div>
                    </div>
                  </div>
                  <div>
                    <p className="font-light text-xs text-[#917E6E] mb-2">
                      SPACING
                    </p>
                    <div className="text-sm font-normal space-y-1">
                      <div>Padding: 32px (2rem)</div>
                      <div>Gaps: 24px (1.5rem)</div>
                      <div>Margins: 96px (6rem)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div className="lg:col-span-6 space-y-4 md:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm border border-[#4F382B]/10 rounded-lg p-6 grain-overlay">
              <h2 className="font-bold text-lg text-[#4F382B] mb-6 border-b border-[#4F382B]/20 pb-3">
                Design Principles
              </h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-sm text-[#4F382B] mb-2">
                    Minimal & Clean
                  </h3>
                  <p className="font-light text-sm text-[#917E6E]">
                    Focused on clarity and functionality with purposeful use of
                    whitespace
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-[#4F382B] mb-2">
                    Warm & Natural
                  </h3>
                  <p className="font-light text-sm text-[#917E6E]">
                    Earth-toned palette reflecting craftsmanship and acoustic
                    materials
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-[#4F382B] mb-2">
                    Subtle Motion
                  </h3>
                  <p className="font-light text-sm text-[#917E6E]">
                    Gentle transitions and hover effects enhance user experience
                  </p>
                </div>

                <div>
                  <h3 className="font-medium text-sm text-[#4F382B] mb-2">
                    Glassmorphism
                  </h3>
                  <p className="font-light text-sm text-[#917E6E]">
                    Backdrop blur and transparency create depth and modern
                    appeal
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#4F382B]/20">
                <p className="font-light text-xs text-[#917E6E] uppercase tracking-widest mb-2">
                  Brand Voice
                </p>
                <p className="font-normal text-sm text-[#4F382B]">
                  Professional yet approachable, emphasizing expertise in
                  acoustic solutions and spatial design
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6 border-t border-[#4F382B]/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs font-light text-[#917E6E]">
          <p>Alacer Design System • Style Guide</p>
          <p>Designed with Satoshi typeface & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        .grain-overlay {
          background-image: radial-gradient(
              circle at 20% 80%,
              rgba(180, 138, 109, 0.15) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 80% 20%,
              rgba(145, 126, 110, 0.15) 0%,
              transparent 50%
            ),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
}
