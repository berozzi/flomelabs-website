import { Seo } from '../components/Seo'
import { SelectedWork } from '../sections/SelectedWork'

export function Work() {
  return (
    <>
      <Seo
        title="Work — FlomeLabs"
        description="Selected work by FlomeLabs: CitizenWallet, a mobile wallet for everyday life, and AntSpire, a strategy game about building an underground ant colony."
      />
      <SelectedWork />
    </>
  )
}
