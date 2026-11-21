import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { POLICY_APPS } from '../config/apps'
import { POLICIES } from '../config/policies'

export function AppPolicy() {
  const { appSlug } = useParams()
  const app = POLICY_APPS.find((item) => item.slug === appSlug)

  if (!app) return <Navigate to="/software-policies" replace />

  const docs = POLICIES[app.slug] ?? []

  return (
    <>
      <Seo
        title={`${app.name} — Software Policies — FlomeLabs`}
        description={`Policies and terms for ${app.name}.`}
      />
      <section className="bg-paper text-ink">
        <div className="mx-auto min-h-[60svh] max-w-site px-6 pb-28 pt-32 md:pb-40 md:pt-40">
          <h1 className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            {app.name}
          </h1>
          {docs.length > 0 && (
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link
                    to={`/software-policies/${app.slug}/${doc.slug}`}
                    className="flex aspect-[4/3] items-end rounded-2xl border border-ink/10 p-6 font-display text-2xl font-semibold tracking-[-0.03em] transition-colors hover:border-accent hover:bg-ink/[0.03]"
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
