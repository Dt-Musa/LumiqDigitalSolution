/**
 * Runtime configuration sourced from Vite environment variables.
 * Define overrides in `.env.local` (see `.env.example`). All keys must be prefixed `VITE_`.
 */

const env = import.meta.env

export const SITE = {
  name: 'Lumiq Digital Solutions',
  url: env.VITE_SITE_URL || 'https://lumiq.tech',
  email: env.VITE_CONTACT_EMAIL || 'hello@lumiq.tech',
  phone: env.VITE_CONTACT_PHONE || '',
  phoneDisplay: env.VITE_CONTACT_PHONE_DISPLAY || '',
  location: 'Kampala, Uganda',
  socials: {
    x: env.VITE_SOCIAL_X || 'https://x.com',
    github: env.VITE_SOCIAL_GITHUB || 'https://github.com',
    linkedin: env.VITE_SOCIAL_LINKEDIN || 'https://www.linkedin.com',
  },
}
