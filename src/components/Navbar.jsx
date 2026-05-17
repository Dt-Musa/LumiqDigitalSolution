import { useEffect, useState } from 'react'
import { A, C, ag } from '../lib/tokens.js'
import { NAV_LINKS } from '../data/content.js'
import { IcoClose, IcoMenu, IcoX, IcoGH, IcoLI } from './icons.jsx'
import { Logo } from './Logo.jsx'
import { SITE } from '../lib/config.js'

const SOCIALS = [
  { icon: <IcoX s={30} />, label: 'X', href: SITE.socials.x },
  { icon: <IcoGH s={30} />, label: 'GitHub', href: SITE.socials.github },
  { icon: <IcoLI s={30} />, label: 'LinkedIn', href: SITE.socials.linkedin },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileNav ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileNav])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 60,
          borderBottom: `1px solid ${scrolled || mobileNav ? C.b1 : 'transparent'}`,
          background: 'rgba(0,0,0,.92)',
          backdropFilter: 'blur(16px)',
          transition: 'border-color .3s',
        }}
      >
        <div
          className="container"
          style={{
            height: '100%',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
          }}
        >
          <Logo size="sm" />

          <div className="nav-links-desktop">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                className="na"
                href={l.href}
                style={{ fontSize: 13, fontWeight: 500, color: C.sub, textDecoration: 'none' }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <div className="nav-cta-desktop">
              <a
                className="pb"
                href="#contact"
                style={{
                  background: A,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 7,
                  padding: '8px 18px',
                  fontSize: 13,
                  fontWeight: 700,
                  fontFamily: 'inherit',
                  textDecoration: 'none',
                  boxShadow: `0 0 18px ${ag(0.3)}`,
                }}
              >
                Get a Quote
              </a>
            </div>
            <button
              className="pb hamburger"
              onClick={() => setMobileNav((v) => !v)}
              style={{ background: 'transparent', border: 'none', color: C.text, padding: 6 }}
              aria-label={mobileNav ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileNav}
            >
              {mobileNav ? <IcoClose /> : <IcoMenu />}
            </button>
          </div>
        </div>
      </nav>

      {mobileNav && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 36 }}>
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileNav(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: C.sub,
                  fontFamily: 'inherit',
                  fontSize: 18,
                  fontWeight: 600,
                  padding: '14px 0',
                  textAlign: 'left',
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            className="pb"
            href="#contact"
            onClick={() => setMobileNav(false)}
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              background: A,
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '14px 28px',
              fontSize: 15,
              fontWeight: 700,
              fontFamily: 'inherit',
              width: '100%',
              textDecoration: 'none',
              boxShadow: `0 0 24px ${ag(0.35)}`,
            }}
          >
            Get a Quote
          </a>
          <div style={{ display: 'flex', gap: 16, marginTop: 36, justifyContent: 'center' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
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
      )}
    </>
  )
}
