"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (e: React.MouseEvent, section?: string) => {
    e.preventDefault();
    if (!isHomePage) {
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (section && window.lenis) {
          window.lenis.scrollTo(`#${section}`, {
            offset: -70,
            duration: 1.5,
          });
        }
      }, 100);
    } else if (section && window.lenis) {
      window.lenis.scrollTo(`#${section}`, {
        offset: -70,
        duration: 1.5,
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-5 backdrop-blur-sm">
      <div className="max-w-[100%] mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <Link href="/">
            <Image src="/logo.png" alt="Alacer Logo" width={77} height={24} />
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8 text-sm text-[#34302D]">
            <a
              href="/"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
              onClick={(e) => handleNavigation(e)}
            >
              Strona główna
            </a>

            {/* Dropdown container */}
            <div className="relative group">
              <a
                href="#"
                className="flex items-center gap-1 transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
              >
                Nasze oddziały
                <ChevronDown size={16} />
              </a>

              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:block top-full left-0 mt-2 bg-white/95 backdrop-blur-sm border border-[#4F382B]/10 min-w-[200px]">
                <Link
                  href="/projekty"
                  className="block px-6 py-4 text-[#4F382B] hover:bg-[#4F382B]/5 transition-colors duration-300 group/item"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-[#917E6E] mb-1">
                        01
                      </span>
                      <span className="block">Alacer projekty</span>
                    </div>
                    <span className="text-[#4F382B]/60 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      →
                    </span>
                  </div>
                </Link>
                <Link
                  href="/produkty"
                  className="block px-6 py-4 text-[#4F382B] hover:bg-[#4F382B]/5 transition-colors duration-300 group/item"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-xs text-[#917E6E] mb-1">
                        02
                      </span>
                      <span className="block">Alacer produkty</span>
                    </div>
                    <span className="text-[#4F382B]/60 opacity-0 -translate-x-2 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                      →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            <a
              href="#about"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
              onClick={(e) => handleNavigation(e, "about")}
            >
              O nas
            </a>
            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
              onClick={(e) => handleNavigation(e, "contact")}
            >
              Kontakt
            </a>
            <a
              href="#"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
            >
              PL | ENG
            </a>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed left-0 right-0 top-[78px] bg-white transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex flex-col gap-4 text-sm text-[#34302D] py-6">
              <a
                href="/"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={(e) => {
                  handleNavigation(e);
                  closeMenu();
                }}
              >
                Strona główna
              </a>

              {/* Mobile dropdown */}
              <div className="space-y-3">
                <div className="font-medium">Nasze oddziały</div>
                <a
                  href="#"
                  className="block pl-4 transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
                  onClick={(e) => {
                    handleNavigation(e);
                    closeMenu();
                  }}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block pl-4 transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
                  onClick={(e) => {
                    handleNavigation(e);
                    closeMenu();
                  }}
                >
                  Products
                </a>
              </div>

              <a
                href="#about"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={(e) => {
                  handleNavigation(e, "about");
                  closeMenu();
                }}
              >
                O nas
              </a>
              <a
                href="#contact"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={(e) => {
                  handleNavigation(e, "contact");
                  closeMenu();
                }}
              >
                Kontakt
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={closeMenu}
              >
                PL | ENG
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
