import Link from "next/link";

type CardProps = {
  image: string;
  title: string;
  location: string;
  year: string;
  slug: string;
  type: "project" | "product";
};

export default function ProjectProductCard({
  image,
  title,
  location,
  year,
  slug,
  type,
}: CardProps) {
  const href = type === "project" ? `/projekty/${slug}` : `/produkty/${slug}`;

  return (
    <Link href={href} className="flex flex-col group">
      <div className="bg-[#BFADA1] aspect-[3/4] mb-2 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-bold text-md leading-none group-hover:text-[#917E6E] transition-colors">
        {title}
      </h3>
      <div className="flex justify-between text-md text-[#4F382B]">
        <span>{location}</span>
        <span>{year}</span>
      </div>
    </Link>
  );
}
