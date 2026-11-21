import { Seo } from '../components/Seo'
import { Contact } from '../sections/Contact'

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact — FlomeLabs"
        description="Start a conversation with FlomeLabs about applications, software products, games and long-term collaborations."
      />
      <Contact />
    </>
  )
}
