import ProjectProductCard from "../../../components/ProjectProductCard";

export default function Products() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px] pb-24">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl  text-[#917E6E] uppercase mt-12 mb-12">
          produkty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Dobra akustyka powinna nam towarzyszyć nie tylko w budynkach
            użyteczności publicznej, czy w budynkach o specjalistycznym
            przeznaczeniu takim jak opery, sale koncertowe, kina czy teatry.
            Dzięki poprawie komfortu akustycznego w naszych domach, biurach,
            salkach konferencyjnych, w których przebywamy znaczną część naszego
            życia, dbamy o swój własny dobrostan. <br />
            Niezależnie od tego czy tworzysz kino domowe, studio nagrań, czy
            salon, w którym po prostu odpoczywasz przy dobrej muzyce,
            proponujemy rozwiązania zapewniające pożądaną funkcję design
            zaprojektowany specjalnie dla ciebie.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProjectProductCard
            image="/produkty/fornirowane.jpg"
            title="Panel fornirowany"
            slug="panel-fornirowany"
            type="product"
          />
          <ProjectProductCard
            image="/produkty/laminowane2.jpg"
            title="Panel laminowany"
            slug="panel-laminowany"
            type="product"
          />
          <ProjectProductCard
            image="/produkty/metalowe.jpg"
            title="Panel metalowy"
            slug="panel-metalowy"
            type="product"
          />
          <ProjectProductCard
            image="/produkty/intarsja.jpg"
            title="Intarsja"
            slug="intarsja"
            type="product"
          />
        </div>
      </div>
    </main>
  );
}
