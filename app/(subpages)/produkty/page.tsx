import ProjectProductCard from "../../../components/ProjectProductCard";

export default function Products() {
  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px] pb-24">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl text-[#917E6E] uppercase mb-12">
          Alacer produkty
        </h1>

        {/* Two column text section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <p className="text-[#34302D]">
            Doskonały dźwięk zaczyna się w domu. Nasza gama paneli akustycznych
            została zaprojektowana do użytku domowego i indywidualnego,
            poprawiając akustykę w domu, jednocześnie dodając stylowy akcent.
            Niezależnie od tego, czy tworzysz domowe studio, ulepszasz swoją
            przestrzeń życiową, czy szukasz cichszego środowiska, nasze
            rozwiązania zapewniają zarówno wydajność, jak i estetykę, aby
            spełnić Twoje potrzeby.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProjectProductCard
            image="/path-to-product1.jpg"
            title="Product Name 1"
            location="Collection Name"
            year="2023"
            slug="product-name-1"
            type="product"
          />
          <ProjectProductCard
            image="/path-to-product1.jpg"
            title="Product Name 1"
            location="Collection Name"
            year="2023"
            slug="product-name-1"
            type="product"
          />
          <ProjectProductCard
            image="/path-to-product1.jpg"
            title="Product Name 1"
            location="Collection Name"
            year="2023"
            slug="product-name-1"
            type="product"
          />
          <ProjectProductCard
            image="/path-to-product1.jpg"
            title="Product Name 1"
            location="Collection Name"
            year="2023"
            slug="product-name-1"
            type="product"
          />
        </div>
      </div>
    </main>
  );
}
