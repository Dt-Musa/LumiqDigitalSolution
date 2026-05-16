import { useState } from 'react'
import { A, C } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SERVICES } from '../data/content.js'

export function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section id="services" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 56,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: A,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Services
              </p>
              <h2
                style={{
                  fontSize: 'clamp(28px,4vw,50px)',
                  fontWeight: 800,
                  letterSpacing: '-1.8px',
                  lineHeight: 1.05,
                }}
              >
                What We Build
              </h2>
            </div>
            <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.8, maxWidth: 320 }}>
              From your first website to blockchain integrations — built right, the first time.
            </p>
          </div>
        </Reveal>

        {SERVICES.map((s, i) => {
          const isOpen = open === i
          return (
            <Reveal key={s.n} delay={i * 0.04}>
              <div
                className="sr"
                onClick={() => setOpen(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setOpen(isOpen ? null : i)
                  }
                }}
                style={{ padding: '20px 0' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '56px 1fr auto', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 10, color: C.dim, fontWeight: 600, letterSpacing: '.1em' }}>{s.n}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                    <span
                      className="sn"
                      style={{
                        fontSize: 'clamp(17px,2.4vw,34px)',
                        fontWeight: 800,
                        letterSpacing: '-1px',
                        color: s.soon ? C.dim : C.sub,
                        transition: 'color .2s',
                      }}
                    >
                      {s.name}
                    </span>
                    {s.soon ? (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '.1em',
                          textTransform: 'uppercase',
                          color: C.dim,
                          border: `1px solid ${C.b1}`,
                          borderRadius: 4,
                          padding: '2px 10px',
                          background: 'transparent',
                        }}
                      >
                        Coming soon
                      </span>
                    ) : null}
                  </div>
                  <span
                    style={{
                      fontSize: 20,
                      color: isOpen ? A : C.dim,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'all .3s',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </div>
                <div className="sb" style={{ maxHeight: isOpen ? '180px' : '0', opacity: isOpen ? 1 : 0 }}>
                  <div
                    style={{
                      paddingTop: 14,
                      paddingLeft: 68,
                      paddingBottom: 4,
                      display: 'flex',
                      gap: 36,
                      flexWrap: 'wrap',
                    }}
                  >
                    <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.8, maxWidth: 420 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
