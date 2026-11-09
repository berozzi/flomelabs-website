import { Seo } from '../components/Seo'
import { ContactForm } from '../components/ContactForm'
import { CONTACT_EMAIL, RESPONSE_TIME } from '../config/site'

const COOPERATION_MODELS = [
  {
    title: 'Zlecenie projektu',
    description:
      'Realizacja konkretnego projektu aplikacji mobilnej, webowej lub narzędzia automatyzującego na zamówienie klienta.',
  },
  {
    title: 'Partnerstwo technologiczne',
    description:
      'Długoterminowa współpraca techniczna z firmami, które potrzebują stałego wsparcia inżynieryjnego lub konsultacji.',
  },
  {
    title: 'Współpraca przy produkcie',
    description:
      'Wspólny rozwój produktu — od wczesnej koncepcji po wydanie — z podziałem odpowiedzialności uzgodnionym indywidualnie.',
  },
]

export function Collaboration() {
  return (
    <>
      <Seo
        title="Współpraca B2B"
        description="FlomeLabs współpracuje z firmami zlecającymi projekty, wydawcami, zespołami automatyzacji i partnerami technologicznymi."
      />
      <section className="px-6 pb-20 pt-14">
        <div className="mx-auto max-w-site text-left">
          <h1>Współpraca B2B</h1>
          <p className="mb-10 mt-3 max-w-[680px] leading-[155%] text-foreground">
            Ta strona jest przeznaczona dla firm zlecających projekty aplikacji,
            wydawców, zespołów automatyzacji oraz partnerów technologicznych
            rozważających wspólne przedsięwzięcia.
          </p>

          <div className="mb-16 grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {COOPERATION_MODELS.map((model) => (
              <article key={model.title} className="rounded-[10px] border border-border p-6">
                <h2 className="mb-2 text-[18px]">{model.title}</h2>
                <p className="leading-[150%] text-foreground">{model.description}</p>
              </article>
            ))}
          </div>

          <div>
            <h2 className="mb-6">Formularz zgłoszeniowy</h2>
            <ContactForm />
            <div className="mt-6 text-sm text-foreground">
              <p className="my-1">
                Adres e-mail: <span className="font-mono">{CONTACT_EMAIL}</span>
              </p>
              <p className="my-1">
                Czas odpowiedzi: <span className="font-mono">{RESPONSE_TIME}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
