import { Helmet } from 'react-helmet-async'
import { SITE } from '../config/site'

interface SeoProps {
  title?: string
  description?: string
}

const DEFAULT_TITLE = `${SITE.name} — Independent Digital Studio`
const DEFAULT_DESCRIPTION =
  'FlomeLabs is an independent digital studio designing and building mobile applications, software products and video games.'

export function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#111318" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
