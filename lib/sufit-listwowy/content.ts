export const NAV_SECTIONS = [
  { id: "produkt", label: "Produkt" },
  { id: "akustyka", label: "Akustyka" },
  { id: "system", label: "Montaż" },
  { id: "wykonczenia", label: "Wykończenia" },
  { id: "realizacje", label: "Realizacje" },
] as const;

export const IMAGE_BASE = "/produkty/sufit-listwowy";

/** Lekkie placeholdery — podmień docelowymi plikami w tym samym folderze */
export const PLACEHOLDERS = {
  hero: `${IMAGE_BASE}/placeholders/hero.svg`,
  photo: `${IMAGE_BASE}/placeholders/photo.svg`,
  thumb: `${IMAGE_BASE}/placeholders/thumb.svg`,
} as const;

export const FEATURES = [
  {
    icon: "modular" as const,
    title: "Modułowość i elastyczność",
    description:
      "Rozstaw listew i szerokość szczeliny dowolnie regulowane — system dostosowuje się do projektu, a nie odwrotnie.",
  },
  {
    icon: "revision" as const,
    title: "Demontaż i rewizja",
    description:
      "Każda połać demontowalna niezależnie. Systemowe otwory rewizyjne dostępne w standardzie.",
  },
  {
    icon: "material" as const,
    title: "Naturalny materiał",
    description:
      "MDF fornirowany, lakierowany lub drewno naturalne — listwy zabezpieczone do stopnia trudnopalności.",
  },
  {
    icon: "acoustic" as const,
    title: "Akustyka klasy A",
    description:
      "Przezierność ≥ 30% oznacza, że parametry pochłaniania są tożsame z zastosowaną wełną mineralną — gwarantując klasę A przy właściwym doborze izolacji.",
  },
];

export const LISTWA_SPECS = [
  { label: "Materiał", value: "MDF fornirowany / lakierowany, drewno naturalne" },
  { label: "Długość max", value: "2700 mm" },
  { label: "Wykończenie", value: "Lakier bezbarwny, lakier kyjący RAL, fornir naturalny" },
  { label: "Przezierność", value: "≥ 30% (zmienna wg rozstawu)" },
  { label: "Reakcja na ogień", value: "Klasa D / C (z impregnacją)" },
];

export const TOP_SPECS = [
  { label: "Profil główny", value: "CD 60" },
  { label: "Rozstaw profili", value: "680 mm / 1200 mm" },
  { label: "Zawiesia", value: "Noniuszowe WGN20 / WDN PG" },
  { label: "Norma", value: "PN-EN 14195:2015" },
  { label: "Obciążenie dop.", value: "0,25 – 0,36 kN/zawiesie" },
  { label: "Klasa korozyjności", value: "C1, C2" },
];

export type AcousticConfig = {
  id: string;
  title: string;
  subtitle: string;
  rows: { label: string; value: string; highlight?: boolean }[];
};

export const ACOUSTIC_CONFIGS: AcousticConfig[] = [
  {
    id: "W-1",
    title: "Wełna 50 mm · bez pustki",
    subtitle: "Montaż E-50 · wys. 50 mm",
    rows: [
      { label: "Grubość wełny", value: "50 mm" },
      { label: "Gęstość", value: "40–60 kg/m³" },
      { label: "Pustka powietrzna", value: "brak" },
      { label: "Całk. wys. montażu", value: "~50 mm" },
      { label: "Czarna fizelina", value: "tak" },
      { label: "Klasa pochłaniania", value: "B–C", highlight: true },
      { label: "αw orientacyjne", value: "≈ 0,60–0,70", highlight: true },
    ],
  },
  {
    id: "W-2",
    title: "Wełna 50 mm · pustka E-100",
    subtitle: "Montaż E-100 · wys. ~85 mm",
    rows: [
      { label: "Grubość wełny", value: "50 mm" },
      { label: "Gęstość", value: "40–60 kg/m³" },
      { label: "Pustka powietrzna", value: "~35 mm" },
      { label: "Całk. wys. montażu", value: "~85 mm" },
      { label: "Czarna fizelina", value: "tak" },
      { label: "Klasa pochłaniania", value: "A", highlight: true },
      { label: "αw orientacyjne", value: "≈ 0,85–0,95", highlight: true },
    ],
  },
  {
    id: "W-3",
    title: "Wełna 100 mm · pustka E-100",
    subtitle: "Montaż E-100 · wys. ~125 mm",
    rows: [
      { label: "Grubość wełny", value: "100 mm" },
      { label: "Gęstość", value: "40–60 kg/m³" },
      { label: "Pustka powietrzna", value: "~35 mm" },
      { label: "Całk. wys. montażu", value: "~125 mm" },
      { label: "Czarna fizelina", value: "tak" },
      { label: "Klasa pochłaniania", value: "A", highlight: true },
      { label: "αw orientacyjne", value: "≈ 0,90–1,00", highlight: true },
    ],
  },
  {
    id: "W-4",
    title: "Wełna 50 mm · pustka E-275",
    subtitle: "Montaż E-275 · wys. ~260 mm",
    rows: [
      { label: "Grubość wełny", value: "50 mm" },
      { label: "Gęstość", value: "40–60 kg/m³" },
      { label: "Pustka powietrzna", value: "~210 mm" },
      { label: "Całk. wys. montażu", value: "~260 mm" },
      { label: "Czarna fizelina", value: "tak" },
      { label: "Klasa pochłaniania", value: "A", highlight: true },
      { label: "αw orientacyjne", value: "≈ 0,85–0,95", highlight: true },
    ],
  },
];

export const SYSTEM_ELEMENTS = [
  {
    image: PLACEHOLDERS.photo,
    title: "Profil główny TOP",
    description:
      "Stalowy profil nośny z zamkiem zatrzaskowym. Przyjmuje listwy TIP TOP bez narzędzi — każda listwa demontowalna niezależnie.",
  },
  {
    image: PLACEHOLDERS.photo,
    title: "Zawiesia WGN20 i WDN PG",
    description:
      "Zawiesie noniuszowe ze stali ocynkowanej DX51+Z. Regulacja wysokości w zakresie całej długości zawiesia.",
  },
  {
    image: PLACEHOLDERS.photo,
    title: "Detal połączenia",
    description:
      "Zawiesie noniuszowe w złożeniu — widok mechanizmu blokady wysokości. Regulacja płynna, blokada przez ząbkowanie.",
  },
];

export const MONTAZ_STEPS = [
  {
    image: PLACEHOLDERS.photo,
    title: "Pozycjonowanie listew od dołu",
    description:
      "Listwy TIP TOP wprowadzane są od dołu w kierunku profili głównych TOP. Każda listwa pozycjonowana niezależnie — możliwy dowolny rozstaw i szerokość szczeliny.",
  },
  {
    image: PLACEHOLDERS.photo,
    title: "Mocowanie śrubami metrycznymi M6",
    description:
      "Po wciśnięciu ku górze listwa przykręcana jest śrubami metrycznymi M6 do profilu TOP. Śruby zapewniają pewne połączenie, umożliwiając wielokrotny demontaż.",
  },
  {
    image: PLACEHOLDERS.photo,
    title: "Połać w trakcie montażu",
    description:
      "Widok przekrojowy połaci listwowej w trakcie zapełniania. Profile nośne CD60 zawieszone na zawiesiach noniuszowych wyznaczają płaszczyznę sufitu.",
  },
  {
    image: PLACEHOLDERS.photo,
    title: "Gotowa połać listwowa — widok od dołu",
    description:
      "Ukończona połać listwowa TIP TOP widoczna od strony wnętrza. Szczeliny między listwami zapewniają przezierność ≥ 30%.",
  },
];

export const FINISHES = [
  {
    title: "Fornir naturalny",
    description:
      "Okleinowanie naturalnym fornirem drewnianym. Niepowtarzalna faktura słojów, lakierowana lub olejowana.",
    swatchClass: "bg-alacer-secondary/40",
  },
  {
    title: "Lakier bezbarwny",
    description:
      "Transparentna powłoka akrylowa lub poliuretanowa. Zachowuje naturalny wygląd drewna lub MDF z widoczną strukturą.",
    swatchClass: "bg-alacer-bg border border-alacer-primary/20",
  },
  {
    title: "Lakier kyjący RAL",
    description:
      "Dowolny kolor z palety RAL Classic i RAL Design. Możliwe wykończenie mat, satyna lub połysk.",
    swatchClass: "bg-alacer-primary",
  },
];

export const VENEERS = [
  { name: "Sosna Carolina", image: PLACEHOLDERS.thumb },
  { name: "Brzoza Skandynawska", image: PLACEHOLDERS.thumb },
  { name: "Buk Półflader", image: PLACEHOLDERS.thumb },
  { name: "Buk Prostosłoisty", image: PLACEHOLDERS.thumb },
  { name: "Dąb Flader", image: PLACEHOLDERS.thumb },
  { name: "Dąb Półflader", image: PLACEHOLDERS.thumb },
  { name: "Dąb Prostosłoisty", image: PLACEHOLDERS.thumb },
  { name: "Jesion Biały Flader", image: PLACEHOLDERS.thumb },
  { name: "Jesion Prostosłoisty", image: PLACEHOLDERS.thumb },
  { name: "Olcha", image: PLACEHOLDERS.thumb },
  { name: "Orzech Promień", image: PLACEHOLDERS.thumb },
];

export const REALIZACJE = [
  {
    image: PLACEHOLDERS.photo,
    location: "Komisje Sejmowe, Warszawa",
    description:
      "Sala konferencyjna — sufit listwowy fornirowany, listwy naturalne, światło dzienne",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Centrum Franowo, Poznań",
    description:
      "Korytarz z sufitem listwowym TIP TOP — widok perspektywiczny, dwie kondygnacje",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Detal — styk systemu listwowego",
    description:
      "Zbliżenie krawędzi połaci listwowej przy ścianie — widoczna czarna fizelina i profil TOP",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Centrum Handlowe Franowo, Poznań",
    description:
      "Pasaż handlowy — sufit listwowy fornirowany z oświetleniem liniowym LED",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Budynek biurowy",
    description:
      "Korytarz biurowy — sufit listwowy TIP TOP, listwy ciemny fornir orzechowy",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Maraton Poznań — obiekt biurowy",
    description:
      "Wyspa sufitowa — sufit listwowy TIP TOP w formie wyspy nad strefą recepcji",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description: "Hol główny — sufit listwowy fornirowany, widok perspektywiczny",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description:
      "Korytarz komunikacyjny — sufit listwowy z oświetleniem liniowym LED",
  },
  {
    image: PLACEHOLDERS.photo,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description:
      "Klatka schodowa — sufit listwowy w przestrzeni wielokondygnacyjnej",
  },
];
