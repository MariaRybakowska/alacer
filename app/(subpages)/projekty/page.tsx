import ProjectProductCard from "../../../components/ProjectProductCard";

const PROJECTS = [
  {
    title: "Katowice Panteon Górnośląski",
    slug: "katowice-panteon-gornoslaski",
    image: "/projekty/panteon.jpg",
  },
  {
    title: "Pabianice Sala Koncertowo-bankietowa Pawelana",
    slug: "pabianice-sala-koncertowo-bankietowa",
    image: "/projekty/pawelana.jpg",
  },
  {
    title: "Kielce Teatr im. Stefana Żeromskiego",
    slug: "kielce-teatr-zeromskiego",
    image: "/projekty/teatr.jpg",
  },
  {
    title: "Pobierowo PINEA",
    slug: "pobierowo-pinea",
    image: "/projekty/pinea.jpg",
  },
  {
    title: "Warszawa Hotel PURO",
    slug: "warszawa-hotel-puro",
    image: "/projekty/puro.jpg",
  },
];

export default function Projects() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px] pb-24">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#917E6E] uppercase mt-12 mb-12">
          <span className="text-sm md:text-base">Alacer</span> projekty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Nasze realizacje to połączenie innowacyjnych rozwiązań akustycznych
            z estetyką i funkcjonalnością. Każdy projekt jest unikalny i
            dostosowany do specyficznych potrzeb przestrzeni, tworząc harmonijne
            środowisko dźwiękowe.
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
