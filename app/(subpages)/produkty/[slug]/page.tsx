"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PRODUCTS = {
  "panel-fornirowany": {
    title: "Panel fornirowany",
    image: "/produkty/fornirowane.jpg",
  },
  "panel-laminowany": {
    title: "Panel laminowany",
    image: "/produkty/laminowane2.jpg",
    specs: {
      standardDimensions: ["600 x 600", "600 x 1200"],
      maxDimensions: {
        MDF: "2070 x 2800",
        HDF: "2070 x 2800",
        Sklejka: "1250 x 2500",
        "Płyta wiórowa": "2070 x 2800",
        Formatica: "1300 x 3050",
      },
      thickness: {
        MDF: "12 / 16 / 18",
        HDF: "10 / 12",
        Sklejka: "12-18",
        "Płyta wiórowa": "12-18",
        Formatica: "12,5",
      },
      edge: "B - 60",
      perforation: {
        Standard: "TAK",
        Micro: "TAK",
      },
    },
  },
  "panel-metalowy": {
    title: "Panel metalowy",
    image: "/produkty/metalowe.jpeg",
    specs: {
      metalDimensions: {
        Mosiądz: "maks. 800 x 1800",
        Miedź: "maks. 800 x 1800",
        Stal: "maks. 800 x 1800",
        "Stal nierdzewna": "maks. 800 x 1800",
      },
      thickness: {
        "Wszystkie panele": "0,8 / 1,2 / 2,0",
      },
      edge: {
        PERFOROWANY: "Jak na rysunku",
        "DIA METAL CLICK": "System zatrzaskowy",
      },
      perforation: {
        Standard: "TAK",
        Micro: "NIE",
      },
    },
  },
  intarsja: {
    title: "Intarsja",
    image: "/produkty/intarsja.jpg", // Update with actual image
  },
} as const;

export default function ProductPage({ params }: Props) {
  const router = useRouter();
  const product = PRODUCTS[params.slug as keyof typeof PRODUCTS];

  useEffect(() => {
    if (!product) {
      router.push("/produkty");
    }
  }, [product, router]);

  if (!product) {
    return null;
  }

  const renderSpecs = () => {
    if (params.slug === "panel-metalowy") {
      return (
        <div className="text-[#4F382B] space-y-8">
          <div>
            <h2 className="text-[#a5a2a0] text-sm mb-2">
              ROZMIAR METALU A x B (mm)
            </h2>
            {Object.entries(product.specs.metalDimensions).map(
              ([metal, size]) => (
                <p key={metal}>
                  {metal}: {size as string}
                </p>
              )
            )}
          </div>
          <div>
            <h2 className="text-[#a5a2a0] text-sm mb-2">GRUBOŚĆ (mm)</h2>
            {Object.entries(product.specs.thickness).map(([type, value]) => (
              <p key={type}>
                {type}: {value}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-[#a5a2a0] text-sm mb-2">KRAWĘDŹ (mm)</h2>
            {Object.entries(product.specs.edge).map(([type, value]) => (
              <p key={type}>
                {type}: {value}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-[#a5a2a0] text-sm mb-2">PERFORACJA (mm)</h2>
            {Object.entries(product.specs.perforation).map(([type, value]) => (
              <p key={type}>
                {type}: {value}
              </p>
            ))}
          </div>
        </div>
      );
    }

    // Default spec render for other panels
    return (
      <div className="text-[#4F382B] space-y-8">
        {/* Standard dimensions */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">
            STANDARDOWE WYMIARY (mm)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">600 x 600</p>
              <p className="font-medium">600 x 1200</p>
            </div>
          </div>
        </div>

        {/* Custom dimensions */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">
            MAKS. WYMIARY A x B (mm)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>MDF: 2070 x 2800</p>
              <p>HDF: 2070 x 2800</p>
              <p>Sklejka: 1250 x 2500</p>
              <p>Płyta wiórowa: 2070 x 2800</p>
              <p>Formatica: 1300 x 3050</p>
            </div>
          </div>
        </div>

        {/* Thickness */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">GRUBOŚĆ (mm)</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>MDF: 12 / 16 /18</p>
              <p>HDF: 10 / 12</p>
              <p>Sklejka: 12-18</p>
              <p>Płyta wiórowa: 12-18</p>
              <p>Formatica: 12,5</p>
            </div>
          </div>
        </div>

        {/* Edge */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">KRAWĘDŹ</h2>
          <p>B - 60</p>
        </div>

        {/* Perforation */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">PERFORACJA (mm)</h2>
          <div>
            <p>Standard: TAK</p>
            <p>Micro: TAK</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-[#FFFCF5] min-h-screen px-8 pt-[70px]">
      <div className="max-w-[100%] mx-auto">
        <h1 className="text-3xl md:text-5xl text-[#917E6E] uppercase mt-12 mb-12">
          <span className="text-sm md:text-base">Alacer</span> {product.title}
        </h1>

        <div className="grid xl:grid-cols-12 xl:gap-16">
          {/* Left column - Image */}
          <div className="xl:col-span-7">
            <div className="aspect-square bg-[#ECE4DC] mb-8">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Specifications */}
          <div className="xl:col-span-5">{renderSpecs()}</div>
        </div>
      </div>
    </main>
  );
}
