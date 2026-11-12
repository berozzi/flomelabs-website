import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Seo } from '../components/Seo'
import { Hero } from '../sections/Hero'
import { Philosophy } from '../sections/Philosophy'
import { WhatWeCreate } from '../sections/WhatWeCreate'
import { SelectedWork } from '../sections/SelectedWork'
import { Standards } from '../sections/Standards'
import { Contact } from '../sections/Contact'

export function Home() {
  return (
    <>
      <Seo />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Philosophy />
        <WhatWeCreate />
        <SelectedWork />
        <Standards />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
