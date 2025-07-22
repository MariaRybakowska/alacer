import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F7F6F3] min-h-screen pb-24">
        <div className="w-full max-w-[1100px] mx-auto pt-24 px-4 md:px-0">
          <h1 className="text-3xl text-[#4F382B] font-semibold mb-8">
            Polityka Prywatności
          </h1>

          <div className="prose prose-lg max-w-none text-[#4F382B] space-y-8">
            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                1. Informacje ogólne
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i
                ochrony danych osobowych przekazanych przez Użytkowników w
                związku z korzystaniem z serwisu internetowego Alacer (dalej
                "Serwis"). Administratorem danych osobowych jest Alacer z
                siedzibą w Polsce.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                2. Gromadzone dane
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                W związku z korzystaniem z Serwisu możemy gromadzić następujące
                dane:
              </p>
              <ul className="list-disc pl-6 text-[#34302D]/80 space-y-2">
                <li>
                  Dane kontaktowe (imię, nazwisko, adres e-mail, numer telefonu)
                </li>
                <li>
                  Dane techniczne (adres IP, informacje o przeglądarce, system
                  operacyjny)
                </li>
                <li>
                  Dane o korzystaniu z Serwisu (strony odwiedzane, czas spędzony
                  na stronie)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                3. Pliki cookie
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Serwis wykorzystuje pliki cookie w celu:
              </p>
              <ul className="list-disc pl-6 text-[#34302D]/80 space-y-2">
                <li>Zapewnienia prawidłowego funkcjonowania Serwisu</li>
                <li>Analizy ruchu na stronie i optymalizacji treści</li>
                <li>
                  Dostosowania wyświetlanych treści do preferencji Użytkownika
                </li>
                <li>Zapamiętywania ustawień i preferencji</li>
              </ul>
              <p className="text-[#34302D]/80 leading-relaxed mt-4">
                Użytkownik może w każdej chwili zmienić ustawienia przeglądarki,
                aby wyłączyć lub ograniczyć używanie plików cookie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                4. Google Analytics
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Serwis wykorzystuje Google Analytics, narzędzie analityczne
                firmy Google Inc. Google Analytics używa plików cookie do
                analizy sposobu korzystania z Serwisu przez Użytkowników.
              </p>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Informacje generowane przez pliki cookie o korzystaniu z Serwisu
                (w tym adres IP Użytkownika) będą przekazywane i przechowywane
                przez Google na serwerach w Stanach Zjednoczonych.
              </p>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Google będzie wykorzystywać te informacje w celu oceny
                korzystania z Serwisu, sporządzania raportów o aktywności na
                stronie oraz świadczenia innych usług związanych z aktywnością
                na stronie i korzystaniem z Internetu.
              </p>
              <p className="text-[#34302D]/80 leading-relaxed">
                Użytkownik może zrezygnować z gromadzenia danych przez Google
                Analytics, instalując dodatek do przeglądarki dostępny pod
                adresem:{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#917E6E] hover:text-[#4F382B] transition-colors duration-200 underline"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                5. Cel przetwarzania danych
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Dane osobowe są przetwarzane w następujących celach:
              </p>
              <ul className="list-disc pl-6 text-[#34302D]/80 space-y-2">
                <li>Świadczenie usług i obsługa klienta</li>
                <li>Analiza i poprawa funkcjonalności Serwisu</li>
                <li>Marketing i promocja usług (za zgodą Użytkownika)</li>
                <li>Wypełnienie obowiązków prawnych</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                6. Okres przechowywania danych
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed">
                Dane osobowe są przechowywane przez okres niezbędny do
                realizacji celów, w których zostały zebrane, lub przez okres
                wymagany przepisami prawa. Dane analityczne z Google Analytics
                są przechowywane przez okres określony przez Google (zazwyczaj
                26 miesięcy).
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                7. Prawa Użytkownika
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                Użytkownik ma prawo do:
              </p>
              <ul className="list-disc pl-6 text-[#34302D]/80 space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Poprawiania nieprawidłowych danych</li>
                <li>Żądania usunięcia danych</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody na przetwarzanie</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                8. Bezpieczeństwo danych
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed">
                Stosujemy odpowiednie środki techniczne i organizacyjne, aby
                chronić dane osobowe przed nieuprawnionym dostępem, utratą,
                zniszczeniem lub modyfikacją. Dane są przetwarzane zgodnie z
                obowiązującymi przepisami o ochronie danych osobowych, w tym z
                RODO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                9. Kontakt
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed mb-4">
                W sprawach związanych z ochroną danych osobowych można
                kontaktować się z nami:
              </p>
              <div className="bg-white p-6 rounded-lg border border-[#4F382B]/10">
                <p className="text-[#34302D]/80 mb-2">
                  <strong>E-mail:</strong> anna.rybakowska@alacer.pl
                </p>
                <p className="text-[#34302D]/80 mb-2">
                  <strong>Telefon:</strong> +48 884 921 333
                </p>
                <p className="text-[#34302D]/80">
                  <strong>Adres:</strong> Alacer, Polska
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl text-[#4F382B] font-medium mb-4">
                10. Zmiany w Polityce Prywatności
              </h2>
              <p className="text-[#34302D]/80 leading-relaxed">
                Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej
                Polityce Prywatności. O wszelkich zmianach będziemy informować
                Użytkowników poprzez publikację zaktualizowanej wersji na
                stronie Serwisu. Ostatnia aktualizacja: styczeń 2025.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
