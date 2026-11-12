import { Helmet } from 'react-helmet-async'
import { SITE } from '../config/site'

const TITLE = `${SITE.name} — Independent Digital Studio`
const DESCRIPTION =
  'FlomeLabs is an independent digital studio designing and building mobile applications, software products and video games.'

export function Seo() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta name="theme-color" content="#111318" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
