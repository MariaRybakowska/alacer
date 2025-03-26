"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

type ProductSpecs = {
  standardDimensions?: string[];
  maxDimensions?: Record<string, string>;
  thickness?: Record<string, string>;
  edge?: string | Record<string, string>;
  perforation?: Record<string, string>;
  metalDimensions?: Record<string, string>;
  finishes?: string[];
};

type Product = {
  title: string;
  image: string;
  specs?: ProductSpecs;
};

const PRODUCTS: Record<string, Product> = {
  "panel-fornirowany": {
    title: "Panel fornirowany",
    image: "/produkty/fornirowane.jpg",
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
      finishes: ["dąb", "orzech", "czereśnia", "inne"],
    },
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
      finishes: ["drewno", "kamień", "beton", "inne"],
    },
  },
  "panel-metalowy": {
    title: "Panel metalowy",
    image: "/produkty/metalowe.jpg",
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
      finishes: [
        "patynowy",
        "młotkowany",
        "błyszczący",
        "szczotkowany",
        "inne",
      ],
    },
  },
  intarsja: {
    title: "Intarsja",
    image: "/produkty/intarsja.jpg",
  },
};

export default function ProductPage({ params }: Props) {
  const router = useRouter();
  const product = PRODUCTS[params.slug as keyof typeof PRODUCTS];

  useEffect(() => {
    if (!product) {
      router.push("/produkty");
    }
  }, [product, router]);

  if (!product) return null;

  const renderSpecs = () => {
    return (
      <div className="text-[#4F382B] space-y-6">
        {/* Standard dimensions */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">
            STANDARDOWE WYMIARY (mm)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-lg">600 x 600</p>
              <p className="font-medium text-lg">600 x 1200</p>
            </div>
          </div>
        </div>

        {/* Perforation */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">PERFORACJA</h2>
          <div>
            <p className="text-lg">Standard: TAK</p>
            <p className="text-lg">
              Micro: {params.slug === "panel-metalowy" ? "NIE" : "TAK"}
            </p>
          </div>
        </div>

        {/* Finish */}
        <div>
          <h2 className="text-[#a5a2a0] text-sm mb-2">
            {params.slug === "panel-laminowany" ? "WYKOŃCZENIA" : "WYKOŃCZENIE"}
          </h2>
          <div className="flex flex-col space-y-1">
            {product.specs?.finishes?.map((finish, index) => (
              <p key={index} className="font-medium text-lg">
                {finish}
              </p>
            ))}
          </div>
        </div>

        {/* PDF Button */}
        <div className="pt-4">
          <a
            href="/pdf/specyfikacja.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-[#917E6E] text-[#917E6E] hover:bg-[#917E6E] hover:text-white transition-colors"
          >
            POBIERZ SPECYFIKACJĘ
          </a>
        </div>
      </div>
    );
  };

  return (
    <main className="bg-white min-h-screen px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto h-[calc(100vh-70px)] my-8 flex flex-col">
        {/* Back button */}
        <Link
          href="/produkty"
          className="inline-block mt-12 text-[#a5a2a0] hover:underline"
        >
          POWRÓT DO PRODUKTÓW
        </Link>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 items-start flex-grow my-8">
          {/* Left column - Image */}
          <div>
            <div className="aspect-square bg-[#F5F5F5] h-full max-h-[70vh]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Product Info */}
          <div>
            <h1 className="text-4xl md:text-4xl text-[#917E6E] mb-8">
              {product.title}
            </h1>

            {renderSpecs()}
          </div>
        </div>
      </div>
    </main>
  );
}
