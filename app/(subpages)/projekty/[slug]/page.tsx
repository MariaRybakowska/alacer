"use client";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  const router = useRouter();

  return (
    <main className="bg-white min-h-screen px-4 md:px-8 pt-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column - Image */}
          <div>
            <div className="aspect-square bg-[#F5F5F5]">
              <img
                src="/path-to-project-image.jpg"
                alt="Project name"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Project Info */}
          <div className="pt-8">
            <h1 className="text-4xl md:text-6xl text-[#34302D] mb-12">
              Nazwa projektu
            </h1>

            <div className="text-[#4F382B] space-y-12">
              {/* Location */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm uppercase tracking-wider mb-4">
                  Lokalizacja
                </h2>
                <p className="text-lg">Warszawa</p>
              </div>

              {/* Year */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm uppercase tracking-wider mb-4">
                  Rok
                </h2>
                <p className="text-lg">2023</p>
              </div>

              {/* Area */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm uppercase tracking-wider mb-4">
                  Powierzchnia
                </h2>
                <p className="text-lg">250m²</p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-[#a5a2a0] text-sm uppercase tracking-wider mb-4">
                  Opis
                </h2>
                <p className="text-lg leading-relaxed">
                  Opis projektu i jego głównych założeń. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
