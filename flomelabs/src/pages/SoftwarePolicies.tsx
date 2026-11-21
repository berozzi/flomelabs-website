import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { POLICY_APPS } from '../config/apps'

export function SoftwarePolicies() {
  return (
    <>
      <Seo
        title="Software Policies — FlomeLabs"
        description="Policies and terms for FlomeLabs applications."
      />
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-site px-6 pb-28 pt-32 md:pb-40 md:pt-40">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Software Policies
          </h1>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POLICY_APPS.map((app) => (
              <li key={app.slug}>
                <Link
                  to={`/software-policies/${app.slug}`}
                  className="flex aspect-[4/3] items-end rounded-2xl border border-ink/10 p-6 font-display text-2xl font-semibold tracking-[-0.03em] transition-colors hover:border-accent hover:bg-ink/[0.03]"
                >
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
