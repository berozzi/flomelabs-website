import { Seo } from '../components/Seo'
import { products, upcomingCategories } from '../data/products'

export function Products() {
  return (
    <>
      <Seo
        title="Produkty"
        description="Zobacz produkty FlomeLabs — aplikacje w przygotowaniu oraz zapowiedzi obszarów gier i automatyzacji."
      />
      <section className="px-6 pb-20 pt-14">
        <div className="mx-auto max-w-site text-left">
          <h1>Produkty</h1>
          <p className="mb-10 mt-3 max-w-[640px] text-foreground">
            Prezentujemy produkty w aktualnej fazie rozwoju. Lista będzie
            rozbudowywana w miarę kolejnych wydań.
          </p>

          <div className="mb-14 flex flex-col gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="grid grid-cols-[240px_1fr] gap-6 rounded-[10px] border border-border p-6 max-md:grid-cols-1"
              >
                <div
                  className="flex min-h-40 items-center justify-center rounded-lg border border-dashed border-border bg-code p-3 text-center text-[13px] text-foreground"
                  aria-hidden="true"
                >
                  <span>{'{{TODO: zrzut ekranu}}'}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2>{product.name}</h2>
                    <span className="rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-[13px] font-medium text-accent">
                      {product.statusLabel}
                    </span>
                  </div>
                  <p className="leading-[150%] text-foreground">{product.description}</p>
                  <button
                    type="button"
                    className="cursor-not-allowed self-start rounded-md border border-border bg-transparent px-4 py-2.5 font-mono text-sm text-foreground"
                    disabled
                  >
                    {product.storeLinkLabel}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <h2 className="mb-6">Zapowiedzi</h2>
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {upcomingCategories.map((category) => (
              <article
                key={category.id}
                className="rounded-[10px] border border-border bg-surface p-6"
              >
                <h3 className="mb-2 text-[18px] text-heading">{category.name}</h3>
                <p className="leading-[150%] text-foreground">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
