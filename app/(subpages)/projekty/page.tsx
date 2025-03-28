import ProjectProductCard from "../../../components/ProjectProductCard";

const PROJECTS = [
  {
    title: "Sala Koncertowo-bankietowa Pawelana",
    slug: "pabianice-sala-koncertowo-bankietowa",
    image: "/projekty/pabianice.jpg",
  },
  {
    title: "Teatr im. Stefana Żeromskiego",
    slug: "kielce-teatr-zeromskiego",
    image: "/projekty/zeromskiego.jpg",
  },
  {
    title: "PINEA",
    slug: "pobierowo-pinea",
    image: "/projekty/Pobierowo/zabudowa-akustyczna.jpg",
  },
  {
    title: " Hotel PURO",
    slug: "warszawa-hotel-puro",
    image: "/projekty/puro/puro.jpg",
  },
];

export default function Projects() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px] pb-24">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl  text-[#917E6E] uppercase mt-12 mb-12">
          projekty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Od wielu lat angażujemy się w realizacje projektów w obiektach o
            różnych funkcjach. Każdy projekt jest unikatowy i dostosowany do
            specyficznych potrzeb. Oto nasze realizacje z ostatnich trzech lat,
            chociaż zaangażowani byliśmy jako nadzór i doradztwo techniczne
            również w takich projektach jak: Muzeum Wojska Polskiego, Muzeum
            Historii Polski, Ambasada Rzeczypospolitej Polskiej w Berlinie i
            wielu innych.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project) => (
            <ProjectProductCard
              key={project.slug}
              image={project.image}
              title={project.title}
              slug={project.slug}
              type="project"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
