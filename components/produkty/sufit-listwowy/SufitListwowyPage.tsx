"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TableOfContents from "./TableOfContents";
import AcousticDiagram from "./AcousticDiagram";
import { FeatureIcon } from "./FeatureIcon";
import {
  ACOUSTIC_CONFIGS,
  type AcousticConfig,
  FEATURES,
  FINISHES,
  PLACEHOLDERS,
  LISTWA_SPECS,
  MONTAZ_STEPS,
  NAV_SECTIONS,
  REALIZACJE,
  SYSTEM_ELEMENTS,
  TOP_SPECS,
  VENEERS,
} from "@/lib/sufit-listwowy/content";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-alacer-secondary mb-3">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-medium text-[#2C2820] leading-snug mb-4">
      {children}
    </h2>
  );
}

function SpecTable({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="border border-[#E8E4DC] bg-white">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th
              colSpan={2}
              className="text-left px-3 py-2.5 bg-[#E8E4DC] text-[11px] font-semibold tracking-[0.08em] uppercase text-[#4F382B]"
            >
              {title}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-[#E8E4DC] last:border-b-0">
              <td className="px-3 py-2.5 text-[12.5px] text-alacer-secondary align-top w-[42%]">
                {row.label}
              </td>
              <td className="px-3 py-2.5 text-[13px] font-medium text-[#2C2820] align-top">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#E8E4DC] border-l-[3px] border-l-alacer-primary p-5 md:p-6">
      <div className="text-sm leading-relaxed text-alacer-text [&_strong]:font-semibold [&_strong]:text-[#2C2820]">
        {children}
      </div>
    </div>
  );
}

function SpecHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#E8E4DC]/60 border border-[#E8E4DC] p-4 text-xs text-[#4F382B] leading-relaxed [&_strong]:font-semibold [&_strong]:text-[#2C2820]">
      {children}
    </div>
  );
}

function AcousticConfigCard({ config }: { config: AcousticConfig }) {
  return (
    <div className="border border-[#E8E4DC] bg-white">
      <div className="px-5 py-4 border-b border-[#E8E4DC] bg-white">
        <div className="flex items-center gap-2.5 mb-1">
          <span className="text-[10px] font-bold tracking-[0.12em] text-alacer-primary bg-alacer-bg border border-[#E8E4DC] px-2 py-0.5">
            {config.id}
          </span>
          <h4 className="text-[13.5px] font-semibold text-[#2C2820] leading-snug">
            {config.title}
          </h4>
        </div>
        <p className="text-[11px] text-alacer-secondary tracking-wide">{config.subtitle}</p>
      </div>
      <table className="w-full text-xs border-collapse">
        <tbody>
          {config.rows.map((row, i) => (
            <tr
              key={row.label}
              className={cn(
                "border-b border-[#E8E4DC] last:border-b-0",
                i % 2 === 0 ? "bg-alacer-bg" : "bg-white"
              )}
            >
              <td className="px-3 py-2 text-alacer-secondary">{row.label}</td>
              <td
                className={cn(
                  "px-3 py-2 text-right",
                  row.highlight
                    ? "font-semibold text-[#2C2820]"
                    : "font-medium text-alacer-text"
                )}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SectionRule() {
  return <div className="w-12 h-px bg-[#E8E4DC] mb-8" />;
}

function CatalogImage({
  src,
  alt,
  className,
  aspect = "auto",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: "video" | "square" | "auto";
}) {
  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "square"
        ? "aspect-square"
        : "";

  return (
    <div className={cn("relative overflow-hidden bg-alacer-primary/5", aspectClass, className)}>
      <Image
        src={src}
        alt={alt}
        fill={aspect !== "auto"}
        width={aspect === "auto" ? 800 : undefined}
        height={aspect === "auto" ? 600 : undefined}
        className={cn(
          aspect === "auto" ? "w-full h-auto object-contain" : "object-contain p-4"
        )}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

export default function SufitListwowyPage() {
  const [activeSection, setActiveSection] = useState<string>(NAV_SECTIONS[0].id);

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-120px 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="bg-alacer-bg min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-white mt-[70px] mb-8 px-8 min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={PLACEHOLDERS.hero}
            alt="Akustyczny sufit listwowy TIP TOP — realizacja Budynek Komisji Sejmowych, Warszawa"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[1]" />

        <div className="max-w-[1200px] w-full flex flex-col items-center text-center relative z-10 py-8">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/70 mb-5">
            ALACER COMPANY · SYSTEM SUFITOWY
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-white leading-tight tracking-tight mb-3">
            TIP TOP
          </h1>
          <p className="text-lg md:text-xl italic text-white/85 font-light mb-6">
            Akustyczny sufit listwowy
          </p>
          <div className="w-10 h-px bg-white/50 mb-6" />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium tracking-[0.12em] uppercase text-white/70">
            <span>MDF · Fornir · Drewno</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>Przezierność ≥ 30%</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>Klasa pochłaniania A</span>
          </div>
        </div>

        <p className="absolute bottom-4 right-6 md:right-10 text-[10px] text-white/40 tracking-wide z-10">
          Realizacja: Budynek Komisji Sejmowych, Warszawa
        </p>
      </section>

      <div className="px-6 md:px-10">
        <div className="mx-auto flex gap-10 xl:gap-16 max-w-[1240px]">
          <TableOfContents activeId={activeSection} />

          <div className="flex-1 min-w-0 max-w-[1060px]">
            <TableOfContents activeId={activeSection} variant="inline" />

            {/* Produkt */}
            <section id="produkt" className="py-16 md:py-20 border-b border-alacer-primary/10 scroll-mt-24">
          <SectionLabel>Charakterystyka produktu</SectionLabel>
          <SectionTitle>
            Listwy drewniane
            <br />
            w systemie TOP
          </SectionTitle>
          <SectionRule />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-sm md:text-[15px] leading-relaxed text-alacer-text mb-8">
                Panele listwowe TIP TOP to dekoracyjne listwy z MDF fornirowanego lub
                lakierowanego oraz z drewna naturalnego, montowane do profili CD 60 w
                systemie podkonstrukcji TOP. System umożliwia tworzenie połaci listwowych o
                dowolnym rozstawie, dając pełną swobodę w kształtowaniu akustyki i estetyki
                wnętrza.
              </p>
              <div className="space-y-0 mt-2">
                {FEATURES.map((f, index) => (
                  <div
                    key={f.title}
                    className={cn(
                      "flex gap-4 py-5",
                      index < FEATURES.length - 1 && "border-b border-[#E8E4DC]"
                    )}
                  >
                    <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-[#E8E4DC] mt-0.5">
                      <FeatureIcon name={f.icon} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#2C2820] mb-1">{f.title}</h4>
                      <p className="text-[13px] text-alacer-secondary leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <CatalogImage src={PLACEHOLDERS.photo} alt="Detal listwy TIP TOP" aspect="video" />
              <CatalogImage src={PLACEHOLDERS.photo} alt="Zbliżenie połaci listwowej" aspect="video" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14 pt-14 border-t border-[#E8E4DC]">
            <SpecTable title="Listwa" rows={LISTWA_SPECS} />
            <SpecTable title="System nośny" rows={TOP_SPECS} />
          </div>
        </section>

        {/* Akustyka */}
        <section id="akustyka" className="py-16 md:py-20 border-b border-alacer-primary/10 scroll-mt-24">
          <SectionLabel>Dane akustyczne</SectionLabel>
          <SectionTitle>
            Zasada przezierności
            <br />i pochłaniania
          </SectionTitle>
          <SectionRule />

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-14">
            <div>
              <p className="text-sm md:text-[15px] leading-relaxed text-alacer-text mb-6">
                System listwowy TIP TOP charakteryzuje się otwartością akustyczną. Duże
                szczeliny między listwami zapewniają swobodny przepływ fali dźwiękowej, co
                sprawia, że właściwości pochłaniania zależą niemal wyłącznie od materiału
                umieszczonego ponad systemem. Czarna fizelina akustyczna stosowana jest
                bezpośrednio na listwach, przed wełną mineralną — maskuje przestrzeń ponad
                sufitem i wspiera pochłanianie wysokich częstotliwości.
              </p>
              <div className="mb-5">
                <InfoBox>
                <p>
                  Zgodnie z powszechnie przyjętą praktyką inżynierską oraz wytycznymi norm{" "}
                  <strong>PN-EN ISO 354:2003</strong> i <strong>PN-EN ISO 11654:1997</strong>,
                  przy przezierności sufitu powyżej <strong>30%</strong> wkład materiału listew w
                  pochłanianie dźwięku jest pomijalny. Efektywne parametry akustyczne systemu TIP
                  TOP są równoważne parametrom zastosowanej <strong>wełny mineralnej</strong> —
                  zazwyczaj klasa pochłaniania <strong>A (αw ≥ 0,90)</strong>.
                </p>
                </InfoBox>
              </div>
              <p className="text-sm text-alacer-secondary leading-relaxed">
                Zachowuje się pełną swobodę doboru wełny (grubość 50 lub 100 mm, gęstość 40–60
                kg/m³) oraz wysokości montażu, regulując zakres pochłanianych częstotliwości bez
                ingerencji w estetykę listew.
              </p>
            </div>
            <div>
              <AcousticDiagram />
              <p className="text-[11px] text-alacer-secondary mt-2 text-center leading-snug">
                Schemat przepływu dźwięku przez system listwowy TIP TOP
              </p>
            </div>
          </div>

          <h3 className="text-base font-semibold text-[#2C2820] mb-2 mt-4">
            Przykładowe konfiguracje akustyczne
          </h3>
          <p className="text-sm text-alacer-secondary mb-7 max-w-xl leading-relaxed">
            Poniższe warianty ilustrują wpływ grubości wełny i wysokości montażu na pochłanianie
            dźwięku. We wszystkich konfiguracjach stosowana jest czarna fizelina akustyczna.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {ACOUSTIC_CONFIGS.map((config) => (
              <AcousticConfigCard key={config.id} config={config} />
            ))}
          </div>
          <p className="text-[11px] text-alacer-secondary mt-4 leading-relaxed">
            * Wartości orientacyjne na podstawie badań laboratoryjnych zbliżonych konfiguracji.
            Dobór wełny mineralnej według wymagań projektowych akustyki pomieszczenia.
          </p>
        </section>

        {/* System / Montaż */}
        <section id="system" className="py-16 md:py-20 border-b border-alacer-primary/10 scroll-mt-24">
          <SectionLabel>Montaż i konstrukcja</SectionLabel>
          <SectionTitle>Systemowa podkonstrukcja TOP</SectionTitle>
          <SectionRule />

          <p className="text-sm md:text-[15px] leading-relaxed text-alacer-text max-w-2xl mb-12">
            TOP to sufitowy system mocowania paneli listwowych, połaciowych, kasetonowych oraz
            baffli akustycznych, przeznaczony do wnętrz komercyjnych i publicznych. Pełni funkcję
            nośnika, zapewniając równocześnie odpowiednią odległość od stropu. Każda listwa lub
            połać jest demontowalna niezależnie, a systemowe otwory rewizyjne są dostępne w
            standardzie.
          </p>

          {/* Wariant A */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-14 pb-14 border-b border-alacer-primary/10">
            <div>
              <SectionLabel>Wariant A</SectionLabel>
              <h3 className="text-lg font-medium text-[#2C2820] mb-4">
                Mocowanie do systemu profili stalowych C-U
              </h3>
              <p className="text-sm leading-relaxed text-alacer-text mb-4">
                Stalowa konstrukcja pośrednia C-U wyznacza precyzyjną płaszczyznę montażową
                niezależnie od stanu stropu. Profile noniuszowe mocowane do stropu przenoszą
                obciążenia na poziome profile główne TOP, do których poprzez śruby metryczne
                mocowane są listwy TIP TOP.
              </p>
              <div className="mt-4">
                <SpecHighlight>
                Rozstaw profili głównych: <strong>680 mm lub 1200 mm</strong>
                <br />
                Zawiesie: <strong>WGN20 / WDN PG</strong> wg PN-EN 14195:2015
                <br />
                Obciążenie dopuszczalne: <strong>0,25–0,36 kN/zawiesie</strong>
                </SpecHighlight>
              </div>
            </div>
            <div>
              <CatalogImage
                src={PLACEHOLDERS.photo}
                alt="Widok 3D — profil TOP na konstrukcji C-U z zawiesiami noniuszowymi"
                aspect="video"
              />
            </div>
          </div>

          {/* Wariant B */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start mb-14 pb-14 border-b border-alacer-primary/10">
            <div className="order-2 md:order-1">
              <CatalogImage
                src={PLACEHOLDERS.photo}
                alt="Widok 3D — profile TOP zawieszone bezpośrednio na zawiesiach noniuszowych"
                aspect="video"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionLabel>Wariant B</SectionLabel>
              <h3 className="text-lg font-medium text-[#2C2820] mb-4">
                Mocowanie bezpośrednio do stropu zawiesiami noniuszowymi
              </h3>
              <p className="text-sm leading-relaxed text-alacer-text mb-4">
                Zawiesia noniuszowe mocowane bezpośrednio do stropu podwieszają profile główne TOP
                bez dodatkowej konstrukcji pośredniej. Rozwiązanie szybsze montażowo, stosowane
                gdy strop jest równy i dostępny.
              </p>
              <div className="mt-4">
                <SpecHighlight>
                Zawiesie WGN20: długość <strong>200 mm</strong>
                <br />
                Zawiesie WDN PG: długość <strong>300 mm</strong>
                <br />
                Blacha DX51+Z · Ocynk Z100 · Klasa korozyjności <strong>C1, C2</strong>
                </SpecHighlight>
              </div>
            </div>
          </div>

          {/* Elementy systemu */}
          <h3 className="text-base font-semibold text-[#2C2820] mb-6">Elementy systemu</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {SYSTEM_ELEMENTS.map((el) => (
              <div key={el.title} className="border border-[#E8E4DC] p-5 bg-white">
                <div className="relative h-36 mb-4 bg-alacer-bg">
                  <Image src={el.image} alt={el.title} fill className="object-contain p-2" sizes="200px" />
                </div>
                <h4 className="text-sm font-semibold text-[#2C2820] mb-2">{el.title}</h4>
                <p className="text-xs text-alacer-secondary leading-relaxed">{el.description}</p>
              </div>
            ))}
          </div>

          {/* Przekroje */}
          <div className="grid md:grid-cols-5 gap-8 mb-14 pb-14 border-b border-alacer-primary/10">
            <div className="md:col-span-3">
              <h3 className="text-base font-semibold text-alacer-text mb-4">
                Przekrój systemu — profil główny TOP
              </h3>
              <CatalogImage
                src={PLACEHOLDERS.photo}
                alt="Przekrój profilu głównego TOP"
                aspect="video"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-base font-semibold text-alacer-text mb-4">
                Wełna mineralna w systemie TOP
              </h3>
              <CatalogImage
                src={PLACEHOLDERS.photo}
                alt="Wełna mineralna w systemie TOP"
                aspect="video"
              />
            </div>
          </div>

          {/* Otwór rewizyjny */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-14 pb-14 border-b border-alacer-primary/10">
            <div>
              <h3 className="text-base font-semibold text-alacer-text mb-4">
                Systemowy otwór rewizyjny
              </h3>
              <p className="text-sm leading-relaxed text-alacer-text mb-4">
                System TOP zawiera standardowy otwór rewizyjny przystosowany do większości
                konfiguracji sufitowych. Panel demontuje się bez narzędzi, zachowując estetykę
                sąsiednich elementów.
              </p>
              <div className="mt-4">
                <SpecHighlight>
                Wymiar standardowy: <strong>dostosowany do modułu profili TOP</strong>
                <br />
                Wykończenie: <strong>tożsame z pozostałymi listwami</strong>
                <br />
                Demontaż: <strong>bez narzędzi, niezależny od sąsiednich listew</strong>
                </SpecHighlight>
              </div>
            </div>
            <CatalogImage
              src={PLACEHOLDERS.photo}
              alt="Systemowy otwór rewizyjny"
              aspect="video"
            />
          </div>

          {/* Montaż etapy */}
          <h3 className="text-lg font-medium text-[#2C2820] mb-3">
            Schemat montażu listew w systemie TOP — etapy
          </h3>
          <p className="text-sm text-alacer-text mb-8 max-w-2xl leading-relaxed">
            Montaż połaci listwowej przebiega sekwencyjnie — od pozycjonowania pierwszej listwy
            od dołu, przez mocowanie śrubami M6, aż do ukończenia całej połaci.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {MONTAZ_STEPS.map((step, i) => (
              <div key={step.title} className="border border-[#E8E4DC] bg-white">
                <div className="relative aspect-video bg-alacer-bg border-b border-[#E8E4DC]">
                  <Image src={step.image} alt={step.title} fill className="object-contain p-3" sizes="400px" />
                </div>
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.12em] text-alacer-primary bg-alacer-bg border border-[#E8E4DC] px-2 py-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-sm font-semibold text-[#2C2820] leading-snug">{step.title}</h4>
                  </div>
                  <p className="text-xs text-alacer-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wykończenia */}
        <section id="wykonczenia" className="py-16 md:py-20 border-b border-alacer-primary/10 scroll-mt-24">
          <SectionLabel>Materiały i wykończenia</SectionLabel>
          <SectionTitle>
            Drewno, fornir, lakier —
            <br />
            pełna swoboda estetyczna
          </SectionTitle>
          <SectionRule />

          <p className="text-sm leading-relaxed text-alacer-text max-w-xl mb-10">
            Listwy TIP TOP dostępne są w trzech rodzajach wykończenia, każdy z możliwością
            indywidualnej kolorystyki lub doboru gatunku drewna. Połączenie estetyki naturalnych
            materiałów z precyzją produkcji maszynowej.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {FINISHES.map((f) => (
              <div key={f.title} className="border border-[#E8E4DC] bg-white">
                <div className={cn("h-24", f.swatchClass)} />
                <div className="p-5">
                  <h4 className="text-sm font-semibold text-[#2C2820] mb-2">{f.title}</h4>
                  <p className="text-xs text-alacer-secondary leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold text-[#2C2820] mb-5">
            Przykładowe gatunki forniru
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {VENEERS.map((v) => (
              <div key={v.name} className="border border-[#E8E4DC] bg-white overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={v.image} alt={v.name} fill className="object-contain p-2" sizes="200px" />
                </div>
                <p className="text-xs font-medium text-[#2C2820] text-center py-2.5 px-2">{v.name}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-alacer-secondary mt-5">
            Dostępne gatunki i odcienie forniru na zapytanie. Możliwe wykonanie próbki przed
            zleceniem produkcji.
          </p>
        </section>

        {/* Realizacje */}
        <section id="realizacje" className="py-16 md:py-20 scroll-mt-24">
          <SectionLabel>Wybrane realizacje</SectionLabel>
          <SectionTitle>
            TIP TOP w przestrzeniach
            <br />
            biurowych i publicznych
          </SectionTitle>
          <SectionRule />

          <p className="text-sm text-alacer-text max-w-xl mb-10 leading-relaxed">
            System listwowy ALACER zrealizowany w obiektach użyteczności publicznej, biurowych i
            handlowych na terenie całej Polski. Każda realizacja to indywidualny dobór gatunku
            forniru, szerokości listew i rozstawu szczelin.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8E4DC]">
            {REALIZACJE.map((r) => (
              <div key={r.location + r.description} className="bg-white">
                <div className="relative aspect-[3/2]">
                  <Image src={r.image} alt={r.description} fill className="object-contain p-2" sizes="400px" />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-semibold tracking-wide uppercase text-[#4F382B] mb-1.5">
                    {r.location}
                  </p>
                  <p className="text-xs text-alacer-secondary leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
          </div>
        </div>
      </div>

      <div className="pb-16" />
    </main>
  );
}
