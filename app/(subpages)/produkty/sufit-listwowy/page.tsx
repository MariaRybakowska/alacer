import type { Metadata } from "next";
import SufitListwowyPage from "@/components/produkty/sufit-listwowy/SufitListwowyPage";

export const metadata: Metadata = {
  title: "TIP TOP — Akustyczny Sufit Listwowy",
  description:
    "System listwowy TIP TOP — akustyczny sufit listwowy z MDF fornirowanego i drewna naturalnego. Przezierność ≥ 30%, klasa pochłaniania A, systemowa podkonstrukcja TOP.",
  openGraph: {
    title: "TIP TOP — Akustyczny Sufit Listwowy | Alacer",
    description:
      "Dekoracyjne listwy akustyczne w systemie TOP. Modułowość, demontaż, fornir naturalny i lakier RAL.",
  },
};

export default function Page() {
  return <SufitListwowyPage />;
}
