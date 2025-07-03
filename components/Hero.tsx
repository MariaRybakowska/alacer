"use client";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        className="flex flex-col items-center justify-center text-white mt-[70px] mb-8 px-8 min-h-[60vh] bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/main-page/hero.jpg')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0" />
        <div className="max-w-[1200px] w-full flex flex-col items-center relative z-10 py-8">
          <img
            src="/main-page/logo-hero.svg"
            alt="logo"
            className="w-40 md:w-56 mb-2"
          />
          <h1 className="text-xl md:text-2xl mb-6 mt-2 text-shadow text-center font-semibold leading-tight md:leading-tight">
            Tworzymy lepsze przestrzenie akustyczne
          </h1>
          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-white/20 backdrop-blur-md shadow-md text-white font-small text-lg transition-all duration-200 hover:bg-white/40 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Skontaktuj się z nami
            <span className="ml-2 text-2xl">
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className="w-full flex justify-center items-center py-8 px-4">
        <div className="max-w-4xl text-center text-[#4F382B] text-lg md:text-xl font-light">
          Działamy w całej Polsce od 2001 roku. Łączymy wiedzę o technologii i
          materiałach z doświadczeniem produkcyjnym, by tworzyć estetyczne i
          funkcjonalne rozwiązania. Gdy design koliduje z akustyką – wkraczamy
          do akcji.
        </div>
      </section>
    </>
  );
}
