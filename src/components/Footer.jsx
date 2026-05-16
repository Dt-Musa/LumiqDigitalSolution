import { C } from '../lib/tokens.js'
import { IcoX, IcoGH, IcoLI } from './icons.jsx'
import { Logo } from './Logo.jsx'
import { SITE } from '../lib/config.js'

const SOCIALS = [
  { icon: <IcoX s={30} />, label: 'X', href: SITE.socials.x },
  { icon: <IcoGH s={30} />, label: 'GitHub', href: SITE.socials.github },
  { icon: <IcoLI s={30} />, label: 'LinkedIn', href: SITE.socials.linkedin },
]

const COLUMNS = [
  {
    h: 'Services',
    ls: [
      { label: 'Business Websites', href: '#services' },
      { label: 'Landing Pages', href: '#services' },
      { label: 'SEO Setup', href: '#services' },
      { label: 'Web3 Integrations', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
    ],
  },
  {
    h: 'Company',
    ls: [
      { label: 'About Lumiq', href: '#main' },
      { label: 'Our Process', href: '#process' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  const connect = [
    { label: SITE.email, href: `mailto:${SITE.email}` },
    SITE.phone
      ? { label: SITE.phoneDisplay || SITE.phone, href: `tel:${SITE.phone.replace(/\s+/g, '')}` }
      : null,
    { label: SITE.location, href: `https://maps.google.com/?q=${encodeURIComponent(SITE.location)}` },
  ].filter(Boolean)

  const cols = [...COLUMNS, { h: 'Connect', ls: connect }]
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container" style={{ padding: '52px 36px 40px' }}>
        <div className="footer-top" style={{ marginBottom: 48 }}>
          <div style={{ textAlign: 'left', alignSelf: 'flex-start' }}>
            <div style={{ marginBottom: 10 }}>
              <Logo size="lg" />
            </div>
            <p style={{ fontSize: 13, color: C.dim, lineHeight: 1.8, maxWidth: 260 }}>
              Smart web solutions for businesses across East Africa and the world. Built different. Built to last.
            </p>
          </div>
          <div className="footer-links">
            {cols.map((col) => (
              <div key={col.h}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    color: C.dim,
                    letterSpacing: '.1em',
                    textTransform: 'uppercase',
                    marginBottom: 14,
                  }}
                >
                  {col.h}
                </div>
                {col.ls.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="na"
                    style={{
                      fontSize: 13,
                      color: C.sub,
                      marginBottom: 10,
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'block',
                    }}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${C.b1}`,
            paddingTop: 28,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <span style={{ fontSize: 12, color: C.dim }}>
            © {year} Lumiq — {SITE.location} — East Africa — Global
          </span>
          <div style={{ display: 'flex', gap: 16 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                className="soc"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: C.sub,
                  textDecoration: 'none',
                }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
