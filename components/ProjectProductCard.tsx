import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  slug: string;
  type: "project" | "product";
};

export default function ProjectProductCard({
  image,
  title,
  slug,
  type,
}: CardProps) {
  return (
    <Link
      href={`/${type === "project" ? "projekty" : "produkty"}/${slug}`}
      className="group block"
    >
      <div className="aspect-square bg-[#F5F5F5] mb-1 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-sm font-bold text-[#34302D]">{title}</h3>
    </Link>
  );
}
