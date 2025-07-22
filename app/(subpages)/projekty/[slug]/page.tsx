"use client";
import Link from "next/link";

type Project = {
  title: string;
  image: string;
  year: string;
  location?: string;
  architect?: string;
  cooperation?: string;
  description: string;
  additionalImages?: Array<{
    src: string;
    description: string;
  }>;
};

type Props = {
  params: {
    slug: string;
  };
};

const PROJECTS: Record<string, Project> = {
  "kielce-teatr-zeromskiego": {
    title: "Teatr im. Stefana Żeromskiego",
    image: "/projekty/zeromskiego.jpg",
    year: "2024",
    location: "Kielce",
    architect: "WXCA",
    cooperation: "Pracownia Akustyki Kozłowski",
    description:
      "Realizacja zabudowy akustycznej z mosiądzu wg projektu architektonicznego WXCA oraz akustyki zaprojektowanej przez Pracownię Akustyki Kozłowski. Wykonanie unikatowego plafonu odbijającego nad widownią. Efekt wizualny osiągnięty dzięki zastosowaniu mosiężnej blachy młotkowanej, zamocowanej na konstrukcji stalowej, szczelnie wypełnionej, gwarantując odpowiednią masę. Zabudowa śluzy akustycznej panelami perforowanymi z blachy mosiężnej skutecznie i bardzo designersko spełniła akustyczne założenie projektu.",
    additionalImages: [
      {
        src: "/projekty/teatr-kielce/plafon.jpg",
        description: "Plafon - ekran odbijający.",
      },
      {
        src: "/projekty/teatr-kielce/blacha.jpg",
        description: "Blacha mosiężna, młotkowana.",
      },
      {
        src: "/projekty/teatr-kielce/sluza.jpg",
        description: "Śluza akustyczna.",
      },
      {
        src: "/projekty/teatr-kielce/panale.jpg",
        description: "Panele mosiężne perforowane.",
      },
      {
        src: "/projekty/teatr-kielce/reling.jpg",
        description: "Reling mosiężny, konsola mosiądzowana.",
      },
    ],
  },
  "pabianice-sala-koncertowo-bankietowa": {
    title: "Sala Koncertowo-bankietowa Pawelana",
    image: "/projekty/pabianice.jpg",
    year: "2023",
    location: "Pabianice",
    description:
      "Zabudowa ścian sali koncertowo-bankietowej wg operatu akustycznego ustrojami akustycznymi z mikroperforacją.",
    additionalImages: [
      {
        src: "/projekty/Pabianice/rewizje.jpg",
        description: "Rewizje w panelach.",
      },
      {
        src: "/projekty/Pabianice/wykończenie.jpg",
        description: "Wykończenie narożnika.",
      },
      {
        src: "/projekty/Pabianice/sufit.jpg",
        description: "Sufit kasetonowy.",
      },
      {
        src: "/projekty/Pabianice/panele.jpg",
        description: "Panele perforowane - ustrój chłonący.",
      },
    ],
  },

  "pobierowo-pinea": {
    title: "PINEA",
    image: "/projekty/Pobierowo/zabudowa-akustyczna.jpg",
    year: "2024",
    location: "Pobierowo",
    description:
      "Realizacja zabudów w częściach wspólnych apartamentowca wg projektu pracowni ELD z Poznania. W realizacji wykorzystane zostały bardzo różnorodne materiały wykończeniowe: laminaty, drewno, płyty elewacyjne włóknowo-cementowe, tkanina, chrobotek oraz listwy oświetleniowe nadające dodatkowy efekt zabudowie.",
    additionalImages: [
      {
        src: "/projekty/Pobierowo/zabudowa-akustyczna.jpg",
        description: "Zabudowa akustyczna w części restauracyjnej.",
      },
      {
        src: "/projekty/Pobierowo/zabudowa-meblowa.jpg",
        description: "Zabudowa meblowa.",
      },
      {
        src: "/projekty/Pobierowo/panele.jpg",
        description: "Panele ścienne.",
      },
    ],
  },
  "warszawa-hotel-puro": {
    title: "Warszawa Hotel PURO",
    image: "/projekty/puro/puro.jpg",
    year: "2025",
    location: "Warszawa",
    description:
      "Zabudowa akustyczna sufitu w Bistro. Dzięki zastosowaniu mikroperforacji osiągnięty został pożądany efekt akustyczny i designerski zaprojektowany przez zespół projektowy Puro Hotels",
    additionalImages: [
      {
        src: "/projekty/puro/puro-1.jpg",
        description: "",
      },
      {
        src: "/projekty/puro/puro-2.jpg",
        description: "",
      },
      {
        src: "/projekty/puro/puro-3.jpg",
        description: "",
      },
      {
        src: "/projekty/puro/puro-4.jpg",
        description: "",
      },
    ],
  },
};

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS[params.slug as keyof typeof PROJECTS];

  if (!project) return null;

  return (
    <main className="bg-[#F7F6F3] min-h-screen pb-24">
      {/* Top Main Image (with margin for nav) */}
      <div className="w-full max-w-[1100px] mx-auto pt-24 px-4 md:px-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto object-cover mb-12"
          style={{ maxHeight: 480, objectFit: "cover", borderRadius: 2 }}
        />
      </div>

      {/* Go Back Button */}
      <div className="w-full max-w-[1100px] mx-auto px-4 md:px-0 mb-8">
        <Link
          href="/projekty"
          className="inline-block text-[#a5a2a0] hover:underline text-sm mb-4"
        >
          ← Powrót do projektów
        </Link>
      </div>

      {/* Details & Description Section */}
      <section className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-0 mb-16">
        {/* Details (left) */}
        <div className="md:col-span-1 flex flex-col gap-2 text-[#4F382B] text-base min-w-[180px]">
          <div className="py-2 border-b border-[#e5e1dc] flex justify-between">
            <span className="text-[#a5a2a0]">LOKALIZACJA</span>
            <span>{project.location || "-"}</span>
          </div>
          <div className="py-2 border-b border-[#e5e1dc] flex justify-between">
            <span className="text-[#a5a2a0]">PROJEKT</span>
            <span className="text-right max-w-[60%] break-words">
              {project.title}
            </span>
          </div>
          <div className="py-2 border-b border-[#e5e1dc] flex justify-between">
            <span className="text-[#a5a2a0]">ROK</span>
            <span>{project.year}</span>
          </div>
          {project.architect && (
            <div className="py-2 border-b border-[#e5e1dc] flex justify-between">
              <span className="text-[#a5a2a0]">ARCHITEKT</span>
              <span>{project.architect}</span>
            </div>
          )}
          {project.cooperation && (
            <div className="py-2 border-b border-[#e5e1dc] flex justify-between">
              <span className="text-[#a5a2a0]">WSPÓŁPRACA</span>
              <span>{project.cooperation}</span>
            </div>
          )}
        </div>
        {/* Description (right) */}
        <div className="md:col-span-2 text-[#4F382B] text-base leading-relaxed">
          {project.description}
        </div>
      </section>

      {/* Gallery */}
      {project.additionalImages && project.additionalImages.length > 0 && (
        <section className="w-full max-w-[1100px] mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.additionalImages.map((img, idx) => (
              <div key={idx} className="w-full flex flex-col">
                <div
                  className="w-full aspect-[3/4] bg-[#F5F5F5] overflow-hidden mb-2"
                  style={{ borderRadius: 2 }}
                >
                  <img
                    src={img.src}
                    alt={img.description}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#a5a2a0] text-xs">
                  {img.description}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
