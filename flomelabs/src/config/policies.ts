import { SITE } from './site'

export type PolicySection = { heading: string; paragraphs?: string[]; items?: string[] }
export type PolicyDoc = { slug: string; title: string; sections: PolicySection[] }

const UPDATED = '21 listopada 2026'

const VITELO_POLICIES: PolicyDoc[] = [
  {
    slug: 'polityka-prywatnosci',
    title: 'Polityka Prywatności',
    sections: [
      {
        heading: '1. Administrator',
        paragraphs: [
          `Administratorem danych jest ${SITE.name} (dalej: „Flomelabs”), twórca aplikacji mobilnej Vitelo (dalej: „Aplikacja”). Kontakt w sprawach prywatności: ${SITE.email}.`,
        ],
      },
      {
        heading: '2. Zakres działania Aplikacji',
        paragraphs: [
          'Vitelo służy do zapisywania paragonów kaucyjnych i zakupowych, przechowywania kart lojalnościowych oraz analizy wydatków na podstawie paragonów.',
          'Aplikacja nie wymaga zakładania konta. Nie rejestrujesz się i nie podajesz imienia, adresu e-mail ani hasła.',
        ],
      },
      {
        heading: '3. Dane przechowywane na urządzeniu',
        paragraphs: [
          'Wszystkie dane wprowadzane do Aplikacji są zapisywane wyłącznie lokalnie, w pamięci Twojego urządzenia (offline). Flomelabs nie ma do nich dostępu i nie przesyła ich na własne serwery.',
        ],
        items: [
          'zdjęcia i dane paragonów kaucyjnych oraz zakupowych,',
          'dane kart lojalnościowych (np. numery i kody kart),',
          'wyniki analizy wydatków wyliczone na podstawie paragonów.',
        ],
      },
      {
        heading: '4. Analityka (Firebase)',
        paragraphs: [
          'Aby rozumieć, jak Aplikacja jest używana, i ulepszać ją, korzystamy z usługi Firebase (Google LLC) do analizy ruchu i użytkowania. Mogą być zbierane dane techniczne i statystyczne, takie jak:',
        ],
        items: [
          'zanonimizowany identyfikator instalacji Aplikacji,',
          'model urządzenia, wersja systemu i wersja Aplikacji,',
          'język i przybliżona lokalizacja (kraj/region),',
          'informacje o korzystaniu z funkcji i ekranów Aplikacji, czas sesji, raporty o błędach.',
        ],
      },
      {
        heading: '5. Czego nie zbieramy do analityki',
        paragraphs: [
          'Do Firebase nie wysyłamy treści Twoich paragonów, zdjęć paragonów, numerów kart lojalnościowych ani danych o Twoich wydatkach. Dane analityczne nie służą do identyfikowania Cię z imienia i nazwiska.',
        ],
      },
      {
        heading: '6. Podstawa prawna i cel',
        paragraphs: [
          'Dane analityczne przetwarzamy w celu utrzymania, rozwoju i poprawy jakości Aplikacji, na podstawie prawnie uzasadnionego interesu Flomelabs (art. 6 ust. 1 lit. f RODO) lub, jeśli wymaga tego prawo lub ustawienia Aplikacji, na podstawie Twojej zgody (art. 6 ust. 1 lit. a RODO).',
        ],
      },
      {
        heading: '7. Odbiorcy danych',
        paragraphs: [
          'Dane analityczne są przetwarzane przez Google LLC jako podmiot przetwarzający, zgodnie z zasadami opisanymi na stronie firebase.google.com/support/privacy. Dane mogą być przekazywane poza Europejski Obszar Gospodarczy na podstawie standardowych klauzul umownych lub innych mechanizmów przewidzianych w RODO.',
        ],
      },
      {
        heading: '8. Okres przechowywania',
        paragraphs: [
          'Dane lokalne pozostają na Twoim urządzeniu, dopóki ich nie usuniesz lub nie odinstalujesz Aplikacji. Dane analityczne są przechowywane przez okres ustawiony w Firebase (domyślnie do 14 miesięcy).',
        ],
      },
      {
        heading: '9. Twoje prawa',
        paragraphs: [
          'Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu wobec przetwarzania oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych. Ponieważ Aplikacja nie prowadzi kont, a dane analityczne są zanonimizowane, identyfikacja Twoich danych może być ograniczona. Dane lokalne możesz w każdej chwili usunąć samodzielnie w Aplikacji lub przez jej odinstalowanie.',
        ],
      },
      {
        heading: '10. Bezpieczeństwo i kopie zapasowe',
        paragraphs: [
          'Dane są przechowywane lokalnie, więc ich bezpieczeństwo zależy m.in. od zabezpieczeń Twojego urządzenia (blokada ekranu, aktualizacje systemu). Zalecamy ich stosowanie. Ponieważ dane nie są synchronizowane z chmurą przez Flomelabs, ich utrata (np. awaria lub zgubienie telefonu) może być nieodwracalna, o ile system operacyjny nie utworzył kopii zapasowej.',
        ],
      },
      {
        heading: '11. Dzieci',
        paragraphs: [
          'Aplikacja nie jest skierowana do dzieci poniżej 13 roku życia i nie zbieramy świadomie danych od takich osób.',
        ],
      },
      {
        heading: '12. Zmiany polityki',
        paragraphs: [
          `Polityka może być aktualizowana, np. wraz ze zmianami w Aplikacji. Aktualna wersja jest zawsze dostępna na tej stronie. Data ostatniej aktualizacji: ${UPDATED}.`,
        ],
      },
    ],
  },
  {
    slug: 'regulamin',
    title: 'Regulamin użytkownika',
    sections: [
      {
        heading: '1. Postanowienia ogólne',
        paragraphs: [
          `Niniejszy regulamin określa zasady korzystania z aplikacji mobilnej Vitelo, udostępnianej przez ${SITE.name} (dalej: „Flomelabs”). Instalując lub używając Aplikacji, akceptujesz regulamin.`,
        ],
      },
      {
        heading: '2. Opis usługi',
        paragraphs: [
          'Vitelo umożliwia zapisywanie paragonów kaucyjnych i zakupowych, przechowywanie kart lojalnościowych oraz analizę wydatków na podstawie zapisanych paragonów. Aplikacja działa offline i nie wymaga konta użytkownika.',
        ],
      },
      {
        heading: '3. Zasady korzystania',
        items: [
          'Aplikacja jest przeznaczona do użytku osobistego.',
          'Zobowiązujesz się nie wykorzystywać Aplikacji w sposób sprzeczny z prawem ani zakłócający jej działanie.',
          'Nie wolno dekompilować, kopiować ani modyfikować Aplikacji, ani omijać jej zabezpieczeń, w zakresie, w jakim zabrania tego prawo.',
          'Odpowiadasz za poprawność danych, które samodzielnie wprowadzasz do Aplikacji.',
        ],
      },
      {
        heading: '4. Dane i prywatność',
        paragraphs: [
          'Dane z Aplikacji są przechowywane lokalnie na Twoim urządzeniu. Zasady przetwarzania danych, w tym korzystania z Firebase do analizy ruchu, opisuje Polityka Prywatności.',
        ],
      },
      {
        heading: '5. Paragony kaucyjne i karty lojalnościowe',
        paragraphs: [
          'Aplikacja jest narzędziem pomocniczym do przechowywania informacji. Flomelabs nie jest stroną systemów kaucyjnych ani programów lojalnościowych i nie odpowiada za ich zasady, ważność paragonów kaucyjnych, możliwość zwrotu kaucji ani honorowanie kart przez sklepy. Zawsze obowiązują zasady danego sklepu lub operatora.',
        ],
      },
      {
        heading: '6. Analiza wydatków',
        paragraphs: [
          'Zestawienia i analizy mają charakter informacyjny. Mogą zawierać błędy, np. wynikające z jakości zdjęcia paragonu lub nieprawidłowo odczytanych danych. Nie stanowią porady finansowej, podatkowej ani księgowej.',
        ],
      },
      {
        heading: '7. Brak kont i utrata danych',
        paragraphs: [
          'Ponieważ dane są zapisywane wyłącznie na urządzeniu, a Flomelabs nie przechowuje ich kopii, odpowiadasz za zabezpieczenie własnych danych. Usunięcie Aplikacji, awaria lub utrata urządzenia mogą skutkować bezpowrotną utratą danych.',
        ],
      },
      {
        heading: '8. Prawa autorskie',
        paragraphs: [
          'Aplikacja, jej nazwa, logo i interfejs są własnością Flomelabs. Otrzymujesz niewyłączną, nieprzenoszalną licencję na korzystanie z Aplikacji na własnym urządzeniu w zakresie określonym w regulaminie.',
        ],
      },
      {
        heading: '9. Odpowiedzialność',
        paragraphs: [
          'Aplikacja jest udostępniana w stanie „takim, jaki jest”. Dokładamy starań, aby działała poprawnie, ale nie gwarantujemy braku błędów ani nieprzerwanego działania. W granicach dozwolonych prawem Flomelabs nie odpowiada za szkody wynikające z korzystania z Aplikacji lub utraty danych. Nie wyłącza to odpowiedzialności, której nie można wyłączyć na mocy przepisów prawa, w tym praw konsumenta.',
        ],
      },
      {
        heading: '10. Zmiany Aplikacji i regulaminu',
        paragraphs: [
          'Możemy zmieniać, rozwijać lub wycofywać funkcje Aplikacji oraz aktualizować regulamin. Aktualna wersja jest dostępna na tej stronie. Dalsze korzystanie z Aplikacji po zmianach oznacza ich akceptację.',
        ],
      },
      {
        heading: '11. Kontakt i prawo właściwe',
        paragraphs: [
          `Pytania i zgłoszenia prosimy kierować na adres: ${SITE.email}. Regulamin podlega prawu polskiemu, z zachowaniem bezwzględnie obowiązujących praw konsumenta.`,
          `Data ostatniej aktualizacji: ${UPDATED}.`,
        ],
      },
    ],
  },
]

export const POLICIES: Record<string, PolicyDoc[]> = {
  vitelo: VITELO_POLICIES,
}
