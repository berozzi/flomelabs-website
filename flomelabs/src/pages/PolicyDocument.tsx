import { Link, Navigate, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { POLICY_APPS } from '../config/apps'
import { POLICIES } from '../config/policies'

export function PolicyDocument() {
  const { appSlug, docSlug } = useParams()
  const app = POLICY_APPS.find((item) => item.slug === appSlug)

  if (!app) return <Navigate to="/software-policies" replace />

  const doc = (POLICIES[app.slug] ?? []).find((item) => item.slug === docSlug)

  if (!doc) return <Navigate to={`/software-policies/${app.slug}`} replace />

  return (
    <>
      <Seo
        title={`${doc.title} — ${app.name} — FlomeLabs`}
        description={`${doc.title} aplikacji ${app.name}.`}
      />
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-3xl px-6 pb-28 pt-32 md:pb-40 md:pt-40">
          <Link
            to={`/software-policies/${app.slug}`}
            className="text-sm text-ink/60 transition-colors hover:text-accent"
          >
            ← {app.name}
          </Link>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
            {doc.title}
          </h1>
          <div className="mt-12 space-y-8 text-base leading-relaxed text-ink/80">
            {doc.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
                {section.paragraphs?.map((text) => (
                  <p key={text} className="mt-3">
                    {text}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-3 list-disc space-y-1.5 pl-6">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
