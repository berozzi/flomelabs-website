import { Helmet } from 'react-helmet-async'
import { SITE_NAME } from '../config/site'

interface SeoProps {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  return (
    <Helmet>
      <title>
        {title} — {SITE_NAME}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
