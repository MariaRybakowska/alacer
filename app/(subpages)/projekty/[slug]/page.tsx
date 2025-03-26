"use client";
import Link from "next/link";

type Project = {
  title: string;
  image: string;
  year: string;
  area?: string;
  description: string;
};

type Props = {
  params: {
    slug: string;
  };
};

const PROJECTS: Record<string, Project> = {
  "katowice-panteon-gornoslaski": {
    title: "Katowice Panteon Górnośląski",
    image: "/projekty/panteon.jpg",
    year: "2022",
    area: "50m²",
    description:
      "Obudowa słupów konstrukcyjnych w sali konferencyjnej ustrojami akustycznymi w postaci skrzyń wypełnionych wełną akustyczną. Ustrój chłonący został wykończony panelami fornirowanymi z perforacją przelotową.",
  },
  "pabianice-sala-koncertowo-bankietowa": {
    title: "Pabianice Sala Koncertowo-bankietowa Pawelana",
    image: "/projekty/pawelana.jpg",
    year: "2023",
    area: "300m²",
    description:
      "Zabudowa ścian sali koncertowo-bankietowej wg operatu akustycznego ustrojami akustycznymi z mikroperforacją.",
  },
  "kielce-teatr-zeromskiego": {
    title: "Kielce Teatr im. Stefana Żeromskiego",
    image: "/projekty/projekt_3.1.jpg",
    year: "2024",
    description:
      "Realizacja zabudowy akustycznej z mosiądzu wg projektu architektonicznego WXCA oraz akustyki zaprojektowanej przez Pracownię Akustyki Kozłowski. Wykonanie unikatowego plafonu odbijającego nad widownią. Efekt wizualny osiągnięty dzięki zastosowaniu mosiężnej blachy młotkowanej, zamocowanej na konstrukcji stalowej, szczelnie wypełnionej, gwarantując odpowiednią masę. Zabudowa śluzy akustycznej panelami perforowanymi z blachy mosiężnej skutecznie i bardzo designersko spełniła akustyczne założenie projektu.",
  },
  "pobierowo-pinea": {
    title: "Pobierowo PINEA",
    image: "/projekty/projekt_2.1.jpg",
    year: "2024",
    description:
      "Realizacja zabudów w częściach wspólnych apartamentowca wg projektu pracowni ELD z Poznania. W realizacji wykorzystane zostały bardzo różnorodne materiały wykończeniowe: laminaty, drewno, płyty elewacyjne włóknowo-cementowe, tkanina, chrobotek oraz listwy oświetleniowe nadające dodatkowy efekt zabudowie.",
  },
  "warszawa-hotel-puro": {
    title: "Warszawa Hotel PURO",
    image: "/projekty/puro.jpg",
    year: "2025",
    description:
      "Zabudowa akustyczna sufitu w Bistro. Dzięki zastosowaniu mikroperforacji osiągnięty został pożądany efekt akustyczny i designerski zaprojektowany przez zespół projektowy Puro Hotels",
  },
};

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS[params.slug as keyof typeof PROJECTS];

  if (!project) return null;

  return (
    <main className="bg-white min-h-screen px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto h-[calc(100vh-70px)] my-8 flex flex-col">
        {/* Back button */}
        <Link
          href="/projekty"
          className="inline-block mt-12 text-[#a5a2a0] hover:underline"
        >
          POWRÓT DO PROJEKTÓW
        </Link>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 items-start flex-grow my-8">
          {/* Left column - Image */}
          <div>
            <div className="aspect-square bg-[#F5F5F5] h-full max-h-[70vh]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Project Info */}
          <div>
            <h1 className="text-4xl md:text-4xl text-[#917E6E] mb-8">
              {project.title}
            </h1>

            <div className="text-[#4F382B] space-y-6">
              {/* Year */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm mb-2">ROK</h2>
                <p className="font-medium">{project.year}</p>
              </div>

              {/* Area */}
              {project.area && (
                <div>
                  <h2 className="text-[#a5a2a0] text-sm mb-2">POWIERZCHNIA</h2>
                  <p className="font-medium">{project.area}</p>
                </div>
              )}

              {/* Description */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm mb-2">OPIS</h2>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
