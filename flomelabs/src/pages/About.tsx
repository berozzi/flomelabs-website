import { Seo } from '../components/Seo'
import { CONTACT_EMAIL } from '../config/site'

const TEAM_PLACEHOLDERS = [1, 2, 3]

const block = 'mt-12 scroll-mt-[88px]'

export function About() {
  return (
    <>
      <Seo
        title="Informacje"
        description="Informacje o firmie FlomeLabs: misja, zespół, dane rejestrowe oraz dokumenty prawne."
      />
      <section className="px-6 pb-20 pt-14">
        <div className="mx-auto max-w-[800px] text-left">
          <h1>Informacje</h1>

          <section className={block} aria-labelledby="o-firmie-heading">
            <h2 id="o-firmie-heading">O firmie</h2>
            <p className="leading-[155%] text-foreground">
              FlomeLabs tworzy solidne oprogramowanie w trzech obszarach:
              aplikacje mobilne i webowe, gry oraz automatyzacja procesów.
              Naszym celem jest dostarczanie produktów, które działają
              przewidywalnie i są rozwijane w sposób odpowiedzialny.
            </p>
          </section>

          <section className={block} aria-labelledby="zespol-heading">
            <h2 id="zespol-heading">Zespół</h2>
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {TEAM_PLACEHOLDERS.map((index) => (
                <article
                  key={index}
                  className="rounded-[10px] border border-border p-5 text-center"
                >
                  <div
                    className="mx-auto mb-3 flex size-[72px] items-center justify-center rounded-full border border-dashed border-border bg-code p-1 text-[10px] text-foreground"
                    aria-hidden="true"
                  >
                    {'{{TODO: zdjęcie}}'}
                  </div>
                  <p className="m-0 font-medium text-heading">{'{{TODO: imię}}'}</p>
                  <p className="mt-1 text-sm">{'{{TODO: rola}}'}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="dane-firmy" className={block} aria-labelledby="dane-firmy-heading">
            <h2 id="dane-firmy-heading">Dane firmy</h2>
            <dl className="grid gap-4">
              <div className="flex flex-col gap-0.5 border-b border-border pb-3">
                <dt className="text-[13px] text-foreground">Pełna nazwa</dt>
                <dd className="m-0 font-mono text-[15px] text-heading">
                  {'{{TODO: nazwa spółki/działalności}}'}
                </dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-border pb-3">
                <dt className="text-[13px] text-foreground">NIP</dt>
                <dd className="m-0 font-mono text-[15px] text-heading">{'{{TODO: NIP}}'}</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-border pb-3">
                <dt className="text-[13px] text-foreground">Adres</dt>
                <dd className="m-0 font-mono text-[15px] text-heading">{'{{TODO: adres}}'}</dd>
              </div>
              <div className="flex flex-col gap-0.5 border-b border-border pb-3">
                <dt className="text-[13px] text-foreground">E-mail</dt>
                <dd className="m-0 font-mono text-[15px] text-heading">{CONTACT_EMAIL}</dd>
              </div>
            </dl>
          </section>

          <section
            id="polityka-prywatnosci"
            className={block}
            aria-labelledby="polityka-prywatnosci-heading"
          >
            <h2 id="polityka-prywatnosci-heading">Polityka prywatności</h2>
            <p className="leading-[155%] text-foreground">
              Treść w przygotowaniu — {'{{TODO: tekst zatwierdzony przez prawnika}}'}
            </p>
          </section>

          <section id="regulamin" className={block} aria-labelledby="regulamin-heading">
            <h2 id="regulamin-heading">Regulamin</h2>
            <p className="leading-[155%] text-foreground">
              Treść w przygotowaniu — {'{{TODO: tekst zatwierdzony przez prawnika}}'}
            </p>
          </section>

          <section
            id="polityka-cookies"
            className={block}
            aria-labelledby="polityka-cookies-heading"
          >
            <h2 id="polityka-cookies-heading">Polityka cookies</h2>
            <p className="leading-[155%] text-foreground">
              Treść w przygotowaniu — {'{{TODO: tekst zatwierdzony przez prawnika}}'}
            </p>
          </section>

          <section id="dostepnosc" className={block} aria-labelledby="dostepnosc-heading">
            <h2 id="dostepnosc-heading">Dostępność i zgłaszanie błędów</h2>
            <p className="leading-[155%] text-foreground">
              Dbamy o dostępność naszej strony. Jeśli zauważysz błąd lub
              napotkasz problem z dostępnością, napisz do nas na adres{' '}
              <span className="font-mono">{CONTACT_EMAIL}</span>.
            </p>
          </section>
        </div>
      </section>
    </>
  )
}
