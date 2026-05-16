/**
 * Site copy and structured content. Edit this file to change what the site says —
 * no component code needs to be touched.
 *
 * Icons are referenced by string keys (resolved in `Why.jsx`) so this module stays
 * pure data and can later be swapped for a CMS without churn.
 */

export const SERVICES = [
  {
    n: '01',
    name: 'Business Websites',
    desc: "We design and build your complete online presence from scratch. Every site is mobile-first, fast-loading, and structured to help potential clients find you, trust you, and reach out. Whether you're a startup, an SME, or an established business — your website should work as hard as you do.",
  },
  {
    n: '02',
    name: 'Promo & Event Pages',
    desc: 'Launching a product, hosting an event, or running a campaign? We build focused single pages that drive registrations, ticket sales, or enquiries. Quick to build, easy to share, and designed around one clear goal.',
  },
  {
    n: '03',
    name: 'Portfolio & Personal Brand Sites',
    desc: 'Consultants, creatives, lawyers, coaches, and professionals — your work deserves a home online. We build personal sites that tell your story, showcase your work, and position you as the go-to person in your field.',
  },
  {
    n: '04',
    name: 'E-commerce Stores',
    desc: 'Ready to sell online? We build full online stores where your customers can browse products, pay securely, and place orders — without calling or messaging you first. Built for businesses ready to transact at scale.',
  },
  {
    n: '05',
    name: 'SEO Foundation',
    desc: 'A beautiful website means nothing if nobody finds it. We set up the technical SEO groundwork — metadata, sitemaps, site speed, and search indexing — so your site shows up when people search for exactly what you offer.',
  },
  {
    n: '06',
    name: 'Domain, Hosting & Email Setup',
    desc: 'Your domain name, hosting, and professional email are the foundation of your digital presence. We handle the full setup so you go from zero to a working online business address — fast, clean, and professional.',
  },
  {
    n: '07',
    name: 'Web3 Integrations',
    desc: "Wallet connections, on-chain payments, and decentralised app interfaces. When you're ready to go on-chain, we'll be ready to build it.",
    soon: true,
  },
  {
    n: '08',
    name: 'Mobile Applications',
    desc: 'Your business in every pocket. Cross-platform mobile apps built once and deployed natively on iOS and Android.',
    soon: true,
  },
]

export const WHY = [
  {
    icon: 'globe',
    title: 'East Africa first',
    body: 'We understand local market realities — mobile-first users, mobile money, and the pace of EA business — combined with global-standard engineering.',
  },
  {
    icon: 'zap',
    title: 'Fast delivery',
    body: 'Landing pages in 3–5 days. Full sites in 2–4 weeks. We set a clear timeline at the start and stick to it.',
  },
  {
    icon: 'users',
    title: 'Built around you',
    body: "Every project gets the same attention regardless of size. We don't close a project until you're genuinely satisfied with it.",
  },
  {
    icon: 'shield',
    title: 'Secure by default',
    body: 'Every site ships with SSL, security headers, and uptime monitoring configured from day one — not as an afterthought.',
  },
  {
    icon: 'code',
    title: 'Web3-ready',
    body: "When you're ready to go on-chain, we can integrate wallets, smart contracts, and dApps without starting over.",
  },
  {
    icon: 'clock',
    title: '< 48h response',
    body: 'We reply to every message within 48 hours. For retainer clients, response time drops to same-day.',
  },
]

export const PROCESS = [
  {
    n: '01',
    t: 'Discover',
    b: 'We start by understanding your business, your customers, and what you actually need. No assumptions, no rushed proposals — just a conversation and a clear plan. We only take on projects we know we can deliver with excellence.',
    sym: '◎',
  },
  {
    n: '02',
    t: 'Design',
    b: 'We create a design built specifically for you — not copied from a template. Everything from layout to colour reflects your brand and speaks to your audience.',
    sym: '◈',
  },
  {
    n: '03',
    t: 'Build',
    b: 'We write clean, fast code that works on every device and loads quickly. Your site is built to last and designed to grow as your business grows.',
    sym: '⬡',
  },
  {
    n: '04',
    t: 'Launch',
    b: 'We test everything, push it live, and walk you through how to manage your new site. We stay available for support after launch and offer maintenance packages if you want us to handle it for you.',
    sym: '◆',
  },
]

export const TIERS = [
  {
    name: 'Starter',
    price: '500k',
    cur: 'UGX',
    tag: 'Get online fast',
    features: ['3-page website', 'Mobile responsive', 'Contact form', 'Hosting setup', '1 revision round'],
  },
  {
    name: 'Business',
    price: '1.2M',
    cur: 'UGX',
    tag: 'Built to grow',
    features: [
      '6-page website',
      'CMS integration',
      'SEO foundation',
      'Analytics setup',
      '3 revision rounds',
      '30-day support',
    ],
    hot: true,
  },
  {
    name: 'Premium',
    price: '2.5M+',
    cur: 'UGX',
    tag: 'No limits',
    features: [
      'Unlimited pages',
      'E-commerce ready',
      'Web3 integrations',
      'Custom animations',
      'Priority support',
      'Monthly retainer',
    ],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Lumiq took our outdated site and turned it into something we are proud to share with clients. Faster than we expected.',
    author: 'Sarah M.',
    role: 'Founder, Nairobi Agri Ventures',
  },
  {
    quote:
      'Working with Lumiq felt like having a proper tech partner. They understood our business goals, not just the brief.',
    author: 'Daniel K.',
    role: 'CEO, Kampala Logistics Co.',
  },
  {
    quote:
      "Our site went from zero to ranking on Google's first page in under two months. The SEO work is paying off every day.",
    author: 'Aisha N.',
    role: 'Director, East Africa NGO Hub',
  },
]

export const FAQS = [
  {
    q: 'How long does a project take?',
    a: 'A landing page: 3–5 days. A full business website: 2–4 weeks depending on complexity and content readiness. We share a clear timeline upfront.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes — we work with clients across East Africa and globally. We collaborate over email, WhatsApp, or video call. Time-zone differences are no problem.',
  },
  {
    q: 'What happens after my site launches?',
    a: 'Business and Premium projects include a 30-day support window. After that, we offer monthly maintenance retainers.',
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Absolutely — redesigns are common. Share your current site and we will assess what needs to change and why.',
  },
  {
    q: 'How do payments work?',
    a: '50% deposit to start, 50% before launch. We accept mobile money (MTN/Airtel), bank transfer, and international payments via Wise or PayPal.',
  },
  {
    q: 'Do you offer Web3 development now?',
    a: 'Web3 integrations are coming soon. If you have an urgent need, contact us and we will discuss what is possible right now.',
  },
]

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICE_OPTIONS = [
  'Business Website',
  'Promo & Event Page',
  'Portfolio & Personal Brand Site',
  'E-commerce Store',
  'SEO Foundation',
  'Domain, Hosting & Email Setup',
  'Web3 Integration',
  'Mobile Application',
  'Not sure yet',
]

export const BUDGET_OPTIONS = [
  'Under 500k UGX',
  '500k – 1.2M UGX',
  '1.2M – 2.5M UGX',
  'Above 2.5M UGX',
  'International client (USD)',
]
