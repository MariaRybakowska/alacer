export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-white py-[262px] px-[386px] bg-cover bg-center"
      style={{ backgroundImage: "url('/main-page/hero.jpg')" }}
    >
      <div className="max-w-[571px] w-full">
        <h1 className="text-6xl font-bold mb-8 text-shadow">
          Tworzymy wnętrza akustyczne
        </h1>
        <button className="w-full bg-white bg-opacity-10 border border-white rounded px-6 py-3 text-2xl font-medium shadow-md">
          Skontaktuj się z nami
        </button>
      </div>
    </section>
  );
}
