import ProjectProductCard from "../../../components/ProjectProductCard";

export default function Projects() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px] pb-24">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl text-[#917E6E] uppercase mb-12">
          Alacer projekty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Od wielkich sal koncertowych po nowoczesne muzea, nasze
            doświadczenie w dziedzinie akustycznych i dekoracyjnych paneli
            ściennych i sufitowych przekształca przestrzenie w całej Polsce i
            Europie. Specjalizujemy się w instalacjach na dużą skalę, które
            poprawiają jakość dźwięku i podnoszą estetykę architektoniczną.
            Niezależnie od tego, czy chodzi o doskonałą akustykę teatru, czy
            wciągającą atmosferę muzeum, nasze panele harmonijnie łączą formę i
            funkcję.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProjectProductCard
            image="/path-to-project1.jpg"
            title="Project Name 1"
            location="Warsaw"
            year="2023"
            slug="project-name-1"
            type="project"
          />
          <ProjectProductCard
            image="/path-to-project1.jpg"
            title="Project Name 1"
            location="Warsaw"
            year="2023"
            slug="project-name-1"
            type="project"
          />
          <ProjectProductCard
            image="/path-to-project1.jpg"
            title="Project Name 1"
            location="Warsaw"
            year="2023"
            slug="project-name-1"
            type="project"
          />
          <ProjectProductCard
            image="/path-to-project1.jpg"
            title="Project Name 1"
            location="Warsaw"
            year="2023"
            slug="project-name-1"
            type="project"
          />
        </div>
      </div>
    </main>
  );
}
