export const NAV_SECTIONS = [
  { id: "produkt", label: "Produkt" },
  { id: "akustyka", label: "Akustyka" },
  { id: "system", label: "Montaż" },
  { id: "wykonczenia", label: "Wykończenia" },
  { id: "realizacje", label: "Realizacje" },
] as const;

export const IMAGE_BASE = "/produkty/sufit-listwowy";

export const IMAGES = {
  hero: `${IMAGE_BASE}/hero.jpg`,
  card: `${IMAGE_BASE}/hero.jpg`,
  detail1: `${IMAGE_BASE}/detail-1.jpg`,
  detail2: `${IMAGE_BASE}/detail-2.jpg`,
  mountCu: `${IMAGE_BASE}/mount-cu.jpg`,
  mountNoniusz: `${IMAGE_BASE}/mount-noniusz.jpg`,
  crossSection: `${IMAGE_BASE}/cross-section.jpg`,
  wool: `${IMAGE_BASE}/wool.jpg`,
  revision: `${IMAGE_BASE}/revision.jpg`,
} as const;

export const CATALOG_PDF = "/pdf/tip-top-katalog.pdf";

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
    image: `${IMAGE_BASE}/element-profile.jpg`,
    title: "Profil główny TOP",
    description:
      "Stalowy profil nośny z zamkiem zatrzaskowym. Przyjmuje listwy TIP TOP bez narzędzi — każda listwa demontowalna niezależnie.",
  },
  {
    image: `${IMAGE_BASE}/element-zawiesie.jpg`,
    title: "Zawiesia WGN20 i WDN PG",
    description:
      "Zawiesie noniuszowe ze stali ocynkowanej DX51+Z. Regulacja wysokości w zakresie całej długości zawiesia.",
  },
  {
    image: `${IMAGE_BASE}/element-detal.jpg`,
    title: "Detal połączenia",
    description:
      "Zawiesie noniuszowe w złożeniu — widok mechanizmu blokady wysokości. Regulacja płynna, blokada przez ząbkowanie.",
  },
];

export const MONTAZ_STEPS = [
  {
    image: `${IMAGE_BASE}/montaz-1.png`,
    title: "Pozycjonowanie listew od dołu",
    description:
      "Listwy TIP TOP wprowadzane są od dołu w kierunku profili głównych TOP. Każda listwa pozycjonowana niezależnie — możliwy dowolny rozstaw i szerokość szczeliny.",
  },
  {
    image: `${IMAGE_BASE}/montaz-2.png`,
    title: "Mocowanie śrubami metrycznymi M6",
    description:
      "Po wciśnięciu ku górze listwa przykręcana jest śrubami metrycznymi M6 do profilu TOP. Śruby zapewniają pewne połączenie, umożliwiając wielokrotny demontaż.",
  },
  {
    image: `${IMAGE_BASE}/montaz-3.png`,
    title: "Połać w trakcie montażu",
    description:
      "Widok przekrojowy połaci listwowej w trakcie zapełniania. Profile nośne CD60 zawieszone na zawiesiach noniuszowych wyznaczają płaszczyznę sufitu.",
  },
  {
    image: `${IMAGE_BASE}/montaz-4.png`,
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
  { name: "Sosna Carolina", image: `${IMAGE_BASE}/veneer-sosna.png` },
  { name: "Brzoza Skandynawska", image: `${IMAGE_BASE}/veneer-brzoza.png` },
  { name: "Buk Półflader", image: `${IMAGE_BASE}/veneer-buk-pol.jpg` },
  { name: "Buk Prostosłoisty", image: `${IMAGE_BASE}/veneer-buk-prost.jpg` },
  { name: "Dąb Flader", image: `${IMAGE_BASE}/veneer-dab-flader.jpg` },
  { name: "Dąb Półflader", image: `${IMAGE_BASE}/veneer-dab-pol.jpg` },
  { name: "Dąb Prostosłoisty", image: `${IMAGE_BASE}/veneer-dab-prost.jpg` },
  { name: "Jesion Biały Flader", image: `${IMAGE_BASE}/veneer-jesion-flader.jpg` },
  { name: "Jesion Prostosłoisty", image: `${IMAGE_BASE}/veneer-jesion-prost.jpg` },
  { name: "Olcha", image: `${IMAGE_BASE}/veneer-olcha.jpg` },
  { name: "Orzech Promień", image: `${IMAGE_BASE}/veneer-orzech-promien.jpg` },
  { name: "Orzech Amerykański", image: `${IMAGE_BASE}/veneer-orzech-amerykanski.png` },
];

export const REALIZACJE = [
  {
    image: `${IMAGE_BASE}/realizacja-1.jpg`,
    location: "Komisje Sejmowe, Warszawa",
    description:
      "Sala konferencyjna — sufit listwowy fornirowany, listwy naturalne, światło dzienne",
  },
  {
    image: `${IMAGE_BASE}/realizacja-2.jpg`,
    location: "Centrum Franowo, Poznań",
    description:
      "Korytarz z sufitem listwowym TIP TOP — widok perspektywiczny, dwie kondygnacje",
  },
  {
    image: `${IMAGE_BASE}/realizacja-3.jpg`,
    location: "Detal — styk systemu listwowego",
    description:
      "Zbliżenie krawędzi połaci listwowej przy ścianie — widoczna czarna fizelina i profil TOP",
  },
  {
    image: `${IMAGE_BASE}/realizacja-4.jpg`,
    location: "Centrum Handlowe Franowo, Poznań",
    description:
      "Pasaż handlowy — sufit listwowy fornirowany z oświetleniem liniowym LED",
  },
  {
    image: `${IMAGE_BASE}/realizacja-5.jpg`,
    location: "Budynek biurowy",
    description:
      "Korytarz biurowy — sufit listwowy TIP TOP, listwy ciemny fornir orzechowy",
  },
  {
    image: `${IMAGE_BASE}/realizacja-6.jpg`,
    location: "Maraton Poznań — obiekt biurowy",
    description:
      "Wyspa sufitowa — sufit listwowy TIP TOP w formie wyspy nad strefą recepcji",
  },
  {
    image: `${IMAGE_BASE}/realizacja-7.jpg`,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description: "Hol główny — sufit listwowy fornirowany, widok perspektywiczny",
  },
  {
    image: `${IMAGE_BASE}/realizacja-8.jpg`,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description:
      "Korytarz komunikacyjny — sufit listwowy z oświetleniem liniowym LED",
  },
  {
    image: `${IMAGE_BASE}/realizacja-9.jpg`,
    location: "Budynek Komisji Sejmowych, Warszawa",
    description:
      "Klatka schodowa — sufit listwowy w przestrzeni wielokondygnacyjnej",
  },
];
