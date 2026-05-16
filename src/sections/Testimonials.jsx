import { C } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { IcoStar } from '../components/icons.jsx'
import { TESTIMONIALS } from '../data/content.js'

export function Testimonials() {
  return (
    <section className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="What Clients Say" />
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.07}>
              <div
                className="testi-card"
                style={{
                  border: `1px solid ${C.b1}`,
                  borderRadius: 14,
                  padding: '28px 24px',
                  background: C.s1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 18, color: '#facc15' }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <IcoStar key={j} />
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: C.text,
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                    marginBottom: 24,
                    flex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: `1px solid ${C.b1}`, paddingTop: 18 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{t.author}</div>
                  <div style={{ fontSize: 12, color: C.sub, marginTop: 3 }}>{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
