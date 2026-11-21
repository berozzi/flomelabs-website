import { Seo } from '../components/Seo'
import { Hero } from '../sections/Hero'
import { Philosophy } from '../sections/Philosophy'
import { WhatWeCreate } from '../sections/WhatWeCreate'
import { Standards } from '../sections/Standards'
import { ContactCta } from '../sections/ContactCta'

export function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Philosophy />
      <WhatWeCreate />
      <Standards />
      <ContactCta />
    </>
  )
}
