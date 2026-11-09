import { Seo } from '../components/Seo'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <>
      <Seo
        title="Strona nie znaleziona"
        description="Strona, której szukasz, nie istnieje lub została przeniesiona."
      />
      <section className="flex flex-col items-center gap-4 px-6 py-24 text-center">
        <h1 className="text-[72px]">404</h1>
        <p className="mb-2 text-foreground">
          Strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Button as="link" to="/">
          Wróć na stronę główną
        </Button>
      </section>
    </>
  )
}
