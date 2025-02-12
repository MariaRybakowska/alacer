import ProjectProductCard from "../../components/ProjectProductCard";

export default function Projects() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl text-[#917E6E] uppercase mb-12">
          Alacer projekty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-[#34302D]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectProductCard
            image="/path-to-project1.jpg"
            title="Project Name 1"
            location="Warsaw"
            year="2023"
          />
          {/* Add more ProjectProductCards as needed */}
        </div>
      </div>
    </main>
  );
}
