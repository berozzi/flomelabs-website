export const SITE = {
  name: 'FlomeLabs',
  tagline: 'Independent digital studio',
  email: 'hello@flomelabs.example',
  location: 'Poland',
  nav: [
    { label: 'Work', to: '/work' },
    { label: 'Studio', to: '/#studio' },
    { label: 'Contact', to: '/contact' },
  ],
  footerNav: [
    { label: 'Work', to: '/work' },
    { label: 'Studio', to: '/#studio' },
    { label: 'Standards', to: '/#standards' },
    { label: 'Contact', to: '/contact' },
    { label: 'Software Policies', to: '/software-policies' },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/flomelabs-placeholder',
    instagram: 'https://www.instagram.com/flomelabs.placeholder',
  },
} as const
