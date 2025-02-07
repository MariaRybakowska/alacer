"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-5 backdrop-blur-sm">
      <div className="max-w-[100%] mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <Image src="/logo.png" alt="Alacer Logo" width={77} height={24} />

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
              href="#"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
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
              <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[160px]">
                <a
                  href="#"
                  className="block px-4 py-2 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                >
                  Products
                </a>
              </div>
            </div>

            <a
              href="#"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
            >
              O nas
            </a>
            <a
              href="#"
              className="transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
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
                href="#"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={closeMenu}
              >
                Strona główna
              </a>

              {/* Mobile dropdown */}
              <div className="space-y-3">
                <div className="font-medium">Nasze oddziały</div>
                <a
                  href="#"
                  className="block pl-4 transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
                  onClick={closeMenu}
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block pl-4 transition-opacity duration-200 hover:opacity-70 focus:outline-none focus:underline"
                  onClick={closeMenu}
                >
                  Products
                </a>
              </div>

              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={closeMenu}
              >
                O nasa
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:underline"
                onClick={closeMenu}
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
