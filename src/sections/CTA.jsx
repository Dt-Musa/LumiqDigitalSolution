import { A, C, ag } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SITE } from '../lib/config.js'

export function CTA() {
  return (
    <section id="cta" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <Reveal>
          <div className="cta-block" style={{ maxWidth: 600, textAlign: 'left' }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: A,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                marginBottom: 18,
              }}
            >
              Start Building
            </p>
            <h2
              style={{
                fontSize: 'clamp(36px,5.5vw,70px)',
                fontWeight: 900,
                letterSpacing: '-3px',
                lineHeight: 0.97,
                marginBottom: 20,
                background: 'linear-gradient(135deg,#fff 30%,#c4b5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Newsreader',serif",
              }}
            >
              Let&apos;s Build
              <br />
              Something
              <br />
              Brilliant.
            </h2>
            <p style={{ fontSize: 16, color: C.sub, lineHeight: 1.8, marginBottom: 36 }}>
              Tell us about your project — we&apos;ll respond within 24 hours.
            </p>
            <div className="hero-btns cta-btns" style={{ alignSelf: 'flex-start', justifyContent: 'flex-start' }}>
              <a
                className="pb"
                href="#contact"
                style={{
                  background: A,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '13px 28px',
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: 'inherit',
                  textDecoration: 'none',
                  boxShadow: `0 0 28px ${ag(0.35)}`,
                }}
              >
                Start Your Project →
              </a>
              <a
                className="gb"
                href={`mailto:${SITE.email}`}
                style={{
                  background: 'transparent',
                  color: C.sub,
                  border: `1px solid ${C.b1}`,
                  borderRadius: 8,
                  padding: '13px 28px',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  textDecoration: 'none',
                }}
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
