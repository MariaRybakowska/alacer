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

  // Helper to render a label/value row with underline
  const SpecRow = ({
    label,
    value,
  }: {
    label: string;
    value: string | string[] | Record<string, string> | undefined;
  }) => {
    if (!value) return null;
    if (Array.isArray(value)) {
      return (
        <div className="py-2 border-b border-[#e5e1dc] flex justify-between items-center">
          <span className="text-[#a5a2a0]">{label}</span>
          <span className="text-right">{value.join(", ")}</span>
        </div>
      );
    }
    if (typeof value === "object") {
      return Object.entries(value).map(([k, v]) => (
        <div
          key={k}
          className="py-2 border-b border-[#e5e1dc] flex justify-between items-center"
        >
          <span className="text-[#a5a2a0]">
            {label} {k}
          </span>
          <span className="text-right">{v}</span>
        </div>
      ));
    }
    return (
      <div className="py-2 border-b border-[#e5e1dc] flex justify-between items-center">
        <span className="text-[#a5a2a0]">{label}</span>
        <span className="text-right">{value}</span>
      </div>
    );
  };

  return (
    <main className="bg-[#FFFCF5] min-h-screen pb-24">
      <div className="max-w-[1100px] mx-auto pt-24 px-4 md:px-0">
        {/* Back button */}
        <Link
          href="/produkty"
          className="inline-block text-[#a5a2a0] hover:underline text-sm mb-8"
        >
          ← Powrót do produktów
        </Link>

        {/* Main content */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column - Image */}
          <div className="flex flex-col gap-6">
            <div
              className="w-full aspect-square bg-[#F5F5F5] overflow-hidden"
              style={{ borderRadius: 0 }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="/pdf/specyfikacja.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#917E6E] text-[#917E6E] font-medium hover:bg-[#917E6E] hover:text-white transition-colors duration-200"
              style={{ borderRadius: 0 }}
            >
              POBIERZ SPECYFIKACJĘ
            </a>
          </div>

          {/* Right column - Product Info */}
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <h1 className="text-4xl text-[#917E6E]">{product.title}</h1>
            </div>
            <div className="flex flex-col gap-0 text-[#4F382B] text-base min-w-[180px]">
              <SpecRow
                label="Standardowe wymiary"
                value={product.specs?.standardDimensions}
              />
              <SpecRow
                label="Maksymalne wymiary"
                value={product.specs?.maxDimensions}
              />
              <SpecRow label="Grubość" value={product.specs?.thickness} />
              <SpecRow label="Krawędź" value={product.specs?.edge} />
              <SpecRow label="Perforacja" value={product.specs?.perforation} />
              <SpecRow
                label="Wymiary metalowe"
                value={product.specs?.metalDimensions}
              />
              <SpecRow label="Wykończenie" value={product.specs?.finishes} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
