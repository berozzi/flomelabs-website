import { useEffect } from 'react'
import { SITE } from '../config/site'

const DEFAULT_TITLE = `${SITE.name} — Independent Digital Studio`
const DEFAULT_DESCRIPTION =
  'FlomeLabs is an independent digital studio designing and building mobile applications, software products and video games.'

interface SeoProps {
  title?: string
  description?: string
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function Seo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION }: SeoProps) {
  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
  }, [title, description])

  return null
}
