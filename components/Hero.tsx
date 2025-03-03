"use client";

export default function Hero() {
  const scrollToNextSection = () => {
    if (window.lenis) {
      window.lenis.scrollTo("#alacer-co", {
        offset: -70,
        duration: 1.5,
      });
    }
  };

  return (
    <section
      className="flex flex-col items-center justify-center text-white mt-[70px] mb-8 px-8 min-h-[calc(100vh-102px)] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/main-page/hero.jpg')",
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center relative z-10">
        <img
          src="/main-page/logo-hero.svg"
          alt="logo"
          className="w-180px md:w-300px"
        />
        <h1 className="text-xl md:text-2xl mb-8 mt-2 text-shadow text-center">
          Tworzymy wnętrza akustyczne
        </h1>
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-0 -mb-20 pt-10 animate-bounce opacity-70 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FFFCF5]"
          >
            <path
              d="M12 4L12 20M12 20L18 14M12 20L6 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
