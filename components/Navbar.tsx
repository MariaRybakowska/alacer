import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-5 flex items-center justify-center font-satoshi text-sm text-[#34302D]">
      <div className="w-full max-w-[1344px] flex items-center justify-between gap-[100px] py-6">
        <Image src="/logo.png" alt="Alacer Logo" width={77} height={23} />
        <div className="flex items-center gap-8">
          <a href="#" className="py-6">
            Strona główna
          </a>
          <a href="#" className="py-6">
            Nasze oddziały
          </a>
          <a href="#" className="py-6">
            O nas
          </a>
          <a href="#" className="py-6">
            Kontakt
          </a>
          <a href="#" className="py-6">
            PL | ENG
          </a>
        </div>
      </div>
    </nav>
  );
}
