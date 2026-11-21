import { Seo } from '../components/Seo'
import { Hero } from '../sections/Hero'
import { Philosophy } from '../sections/Philosophy'
import { WhatWeCreate } from '../sections/WhatWeCreate'
import { Standards } from '../sections/Standards'

export function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Philosophy />
      <WhatWeCreate />
      <Standards />
    </>
  )
}
