import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFFCF5] border-t border-[#4F382B]">
      <div className="max-w-[100%] mx-auto px-4 md:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Company Info - Left Side */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-4">
                <Image
                  src="/logo.png"
                  alt="Alacer Logo"
                  width={77}
                  height={24}
                />
              </Link>
              <p className="text-[#917E6E] text-sm text-center md:text-left">
                © 2025 Alacer
              </p>
            </div>

            {/* Contact and Legal - Right Side */}
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
              {/* Contact Info */}
              <div className="flex flex-col items-center md:items-end">
                <h4 className="text-[#4F382B] font-medium mb-3 text-sm uppercase tracking-wide">
                  informacje
                </h4>
                <div className="flex flex-col items-center md:items-end gap-2">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#917E6E]" />
                    <a
                      href="mailto:anna.rybakowska@alacer.pl"
                      className="text-[#917E6E] hover:text-[#4F382B] transition-colors duration-200 text-sm"
                    >
                      anna.rybakowska@alacer.pl
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#917E6E]" />
                    <a
                      href="tel:+48884921333"
                      className="text-[#917E6E] hover:text-[#4F382B] transition-colors duration-200 text-sm"
                    >
                      +48 884 921 333
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-[#917E6E]" />
                    <Link
                      href="/polityka-prywatnosci"
                      className="text-[#917E6E] hover:text-[#4F382B] transition-colors duration-200 text-sm"
                    >
                      Polityka Prywatności
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
