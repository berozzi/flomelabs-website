import { Seo } from '../components/Seo'
import { Button } from '../components/Button'

const AREAS = [
  {
    title: 'Aplikacje',
    description:
      'Tworzymy aplikacje mobilne i webowe zaprojektowane do codziennego, długotrwałego użytku — z naciskiem na stabilność i przejrzystość działania.',
  },
  {
    title: 'Gry',
    description:
      'Rozwijamy gry jako osobny obszar działalności, traktując je z tą samą starannością inżynierską co pozostałe projekty.',
  },
  {
    title: 'Automatyzacja',
    description:
      'Projektujemy rozwiązania automatyzujące powtarzalne procesy biznesowe, dopasowane do konkretnych potrzeb klienta.',
  },
]

const PRINCIPLES = [
  {
    title: 'Prywatność i lokalne przechowywanie danych',
    description:
      '{{TODO: zatwierdzić treść}} — tam, gdzie to możliwe, projektujemy produkty w sposób minimalizujący przetwarzanie danych poza urządzeniem użytkownika.',
  },
  {
    title: 'Dokładność',
    description:
      '{{TODO: zatwierdzić treść}} — każdy projekt przechodzi przez proces weryfikacji przed udostępnieniem użytkownikom.',
  },
  {
    title: 'Stabilne wydania',
    description:
      '{{TODO: zatwierdzić treść}} — priorytetem jest przewidywalność i niezawodność działania oprogramowania, nie tempo publikacji.',
  },
]

const cardGrid = 'grid grid-cols-3 gap-6 max-md:grid-cols-1'
const card = 'rounded-[10px] border border-border p-6 text-left'
const cardHeading = 'mb-2 text-[18px] text-heading'
const cardText = 'text-[15px] leading-[150%] text-foreground'

export function Home() {
  return (
    <>
      <Seo
        title="Strona główna"
        description="FlomeLabs tworzy solidne oprogramowanie: aplikacje mobilne i webowe, gry oraz rozwiązania automatyzujące procesy biznesowe."
      />
      <section className="px-6 py-20 text-center max-md:px-5 max-md:py-14">
        <div className="mx-auto max-w-[720px]">
          <h1>FlomeLabs</h1>
          <p className="mt-4 text-[19px] leading-[150%] text-foreground">
            Tworzymy solidne oprogramowanie: aplikacje mobilne i webowe, gry oraz
            rozwiązania automatyzujące procesy biznesowe.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button as="link" to="/produkty">
              Zobacz produkty
            </Button>
            <Button as="link" to="/wspolpraca" variant="secondary">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="areas-heading">
        <div className="mx-auto max-w-site">
          <h2 id="areas-heading" className="mb-8 text-center">
            Obszary działalności
          </h2>
          <div className={cardGrid}>
            {AREAS.map((area) => (
              <article key={area.title} className={card}>
                <h3 className={cardHeading}>{area.title}</h3>
                <p className={cardText}>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-16" aria-labelledby="why-heading">
        <div className="mx-auto max-w-site">
          <h2 id="why-heading" className="mb-8 text-center">
            Dlaczego FlomeLabs
          </h2>
          <div className={cardGrid}>
            {PRINCIPLES.map((principle) => (
              <article key={principle.title} className={card}>
                <h3 className={cardHeading}>{principle.title}</h3>
                <p className={cardText}>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-site">
          <h2 id="cta-heading" className="mb-8 text-center">
            Porozmawiajmy o współpracy
          </h2>
          <p className="mx-auto max-w-[560px] text-foreground">
            Zlecasz projekt, szukasz partnera technologicznego albo chcesz
            porozmawiać o wspólnym produkcie — napisz do nas.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button as="link" to="/wspolpraca">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
