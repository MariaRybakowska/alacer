type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: Props) {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px]">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl text-[#917E6E] uppercase mb-12">
          Nazwa projektu
        </h1>

        <div className="grid xl:grid-cols-12 xl:gap-8">
          {/* Left column */}
          <div className="xl:col-span-3">
            <div className="text-[#4F382B]">
              <div className="mb-6">
                <p className="text-[#a5a2a0] text-base mb-1">Lokalizacja</p>
                <p className="text-xl font-medium">Warszawa</p>
              </div>
              <div className="mb-6">
                <p className="text-[#a5a2a0] text-base mb-1">Rok</p>
                <p className="text-xl font-medium">2023</p>
              </div>
              <div className="mb-6">
                <p className="text-[#a5a2a0] text-base mb-1">Powierzchnia</p>
                <p className="text-xl font-medium">250m²</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="xl:col-span-9">
            <div className="prose max-w-none text-[#34302D]">
              <p className="text-2xl mb-8">
                Opis projektu i jego głównych założeń. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <img
                  src="/path-to-project-image-1.jpg"
                  alt="Project view 1"
                  className="w-full aspect-[3/4] object-cover"
                />
                <img
                  src="/path-to-project-image-2.jpg"
                  alt="Project view 2"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <p>Szczegółowy opis realizacji projektu...</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
