export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-white mt-[70px] mb-8 px-8 min-h-[calc(100vh-102px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/main-page/hero.jpg')" }}
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        <h1 className="text-2xl  md:text-6xl mb-8 text-shadow whitespace-nowrap text-center">
          Tworzymy wnętrza akustyczne
        </h1>
        <button className="w-full max-w-[571px] border-b-2 border-white px-6 py-3 text-2xl font-medium transition-all duration-300 hover:border-b-4 hover:text-opacity-80 focus:outline-none focus:border-opacity-50">
          Skontaktuj się z nami
        </button>
      </div>
    </section>
  );
}
