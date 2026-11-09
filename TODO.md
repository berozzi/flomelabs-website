# TODO — placeholdery do uzupełnienia

Lista wszystkich miejsc w kodzie oznaczonych jako `{{TODO: ...}}`, które wymagają
uzupełnienia przed uruchomieniem strony produkcyjnie.

## Konfiguracja / dane firmy

- `flomelabs/src/config/site.ts:4` — `FLAGSHIP_APP_NAME`: nazwa pierwszej aplikacji (obecnie placeholder, nazwa jest jeszcze ustalana).
- `flomelabs/src/config/site.ts:6` — `CONTACT_EMAIL`: firmowy adres e-mail (używany na stronach Współpraca B2B i Informacje).
- `flomelabs/src/config/site.ts:7` — `RESPONSE_TIME`: deklarowany czas odpowiedzi na zapytania B2B.

## Produkty

- `flomelabs/src/data/products.ts:26` — `storeLinkLabel`: link do sklepu dla pierwszej aplikacji (przycisk jest obecnie wyłączony).
- `flomelabs/src/pages/Products.tsx:24` — placeholder zrzutu ekranu dla pierwszego produktu (szary blok z podpisem).

## Strona główna

- `flomelabs/src/pages/Home.tsx:27,32,37` — treści trzech zasad w sekcji „Dlaczego FlomeLabs” oznaczone jako propozycje do zatwierdzenia.

## Informacje — zespół

- `flomelabs/src/pages/About.tsx:34` — zdjęcie członka zespołu (×3 placeholdery karty).
- `flomelabs/src/pages/About.tsx:36` — imię członka zespołu (×3).
- `flomelabs/src/pages/About.tsx:37` — rola członka zespołu (×3).

## Informacje — dane firmy

- `flomelabs/src/pages/About.tsx:52` — pełna nazwa spółki/działalności.
- `flomelabs/src/pages/About.tsx:56` — NIP.
- `flomelabs/src/pages/About.tsx:60` — adres.

## Informacje — dokumenty prawne

- `flomelabs/src/pages/About.tsx:76` — treść polityki prywatności (do zatwierdzenia przez prawnika).
- `flomelabs/src/pages/About.tsx:87` — treść regulaminu (do zatwierdzenia przez prawnika).
- `flomelabs/src/pages/About.tsx:98` — treść polityki cookies (do zatwierdzenia przez prawnika).

## Backend formularza

- `flomelabs/src/components/ContactForm.tsx` — wysyłka formularza współpracy B2B to obecnie stub (`// TODO: podłączyć backend`); formularz waliduje dane i symuluje wysyłkę, ale nie łączy się z żadnym API.
