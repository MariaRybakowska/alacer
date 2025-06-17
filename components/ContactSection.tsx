"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-36 min-h-[90vh]">
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-0 gap-8 md:gap-0">
          {/* Left: Big Title */}
          <h2 className="text-4xl md:text-7xl font-semibold text-[#34302D] leading-tight md:leading-tight md:w-1/2">
            SKONTAKTUJ
            <br />
            SIĘ Z NAMI
          </h2>
          {/* Right: Contact info lines */}
          <div className="flex-1 flex flex-col items-end w-full md:w-auto">
            <div className="mt-6 w-full">
              <div className="flex items-center justify-between w-full text-[#34302D] text-lg md:text-xl font-normal mb-4">
                <span className="font-light">Napisz:</span>
                <a
                  href="mailto:anna.rybakowska@alacer.pl"
                  className="hover:underline"
                >
                  anna.rybakowska@alacer.pl
                </a>
              </div>
              <hr className="border-[#c6c6c6] border-t w-full" />
              <div className="flex items-center justify-between w-full text-[#34302D] text-lg md:text-xl font-normal mb-4">
                <span className="font-light">Zadzwoń:</span>
                <a href="tel:+48888921888" className="hover:underline">
                  +48 884 921 333
                </a>
              </div>
              {/* Connecting line under both contact rows */}
              <hr className="border-[#c6c6c6] border-t w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
