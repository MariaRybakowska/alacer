type CardProps = {
  image: string;
  title: string;
  location: string;
  year: string;
};

export default function ProjectProductCard({
  image,
  title,
  location,
  year,
}: CardProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-[#BFADA1] aspect-square mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <div className="flex justify-between text-sm text-[#4F382B]">
        <span>{location}</span>
        <span>{year}</span>
      </div>
    </div>
  );
}
