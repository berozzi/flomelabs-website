import { FLAGSHIP_APP_NAME } from '../config/site'

export type ProductStatus = 'w-przygotowaniu' | 'zapowiedz'

export interface Product {
  id: string
  category: 'aplikacje' | 'gry' | 'automatyzacja'
  name: string
  status: ProductStatus
  statusLabel: string
  description: string
  storeLinkDisabled: boolean
  storeLinkLabel: string
}

export const products: Product[] = [
  {
    id: 'flagship-app',
    category: 'aplikacje',
    name: FLAGSHIP_APP_NAME,
    status: 'w-przygotowaniu',
    statusLabel: 'W przygotowaniu',
    description:
      'Aplikacja do organizacji życia codziennego. Projekt w aktywnym rozwoju — szczegóły funkcjonalne zostaną opublikowane bliżej wydania.',
    storeLinkDisabled: true,
    storeLinkLabel: '{{TODO: link do sklepu}}',
  },
]

export interface ProductCategoryPreview {
  id: 'gry' | 'automatyzacja'
  name: string
  description: string
}

export const upcomingCategories: ProductCategoryPreview[] = [
  {
    id: 'gry',
    name: 'Gry',
    description:
      'Obszar tworzenia gier znajduje się w fazie planowania. Konkretne tytuły zostaną ogłoszone, gdy będą gotowe do zaprezentowania.',
  },
  {
    id: 'automatyzacja',
    name: 'Automatyzacja',
    description:
      'Rozwiązania automatyzujące procesy biznesowe są obecnie rozwijane w ramach projektów realizowanych z partnerami. Publiczna oferta pojawi się w tej sekcji w przyszłości.',
  },
]
