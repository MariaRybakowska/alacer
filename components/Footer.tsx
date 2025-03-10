import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFFCF5] border-t border-[#4F382B] px-4 md:px-8 py-6 flex justify-between items-center text-sm text-[#34302D]">
      <Image src="/logo.png" alt="Alacer Logo" width={80} height={44} />
      <div className="flex gap-11">
        <div></div>
        <div>
          <p>anna.rybakowska@alacer.pl</p>
          <p>+48 884 921 333</p>
        </div>
      </div>
    </footer>
  );
}
