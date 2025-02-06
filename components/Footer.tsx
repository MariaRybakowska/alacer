import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-[#4F382B] py-6 mt-24 flex justify-between items-center text-sm text-[#34302D]">
      <Image src="/logo.png" alt="Alacer Logo" width={148} height={44} />
      <div className="flex gap-11">
        <div>
          <p>Privacy policy</p>
          <p>Imprint</p>
        </div>
        <div>
          <p>info@alacer.pl</p>
          <p>+48 888 888 888</p>
        </div>
      </div>
    </footer>
  )
}

