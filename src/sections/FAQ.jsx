import { useState } from 'react'
import { A, C, ag } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { FAQS } from '../data/content.js'

export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <div className="faq-grid">
          <Reveal>
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
              FAQ
            </p>
            <h2
              style={{
                fontSize: 'clamp(26px,3.5vw,46px)',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                marginBottom: 16,
              }}
            >
              Frequently Asked
            </h2>
            <p style={{ fontSize: 15, color: C.sub, lineHeight: 1.8, marginBottom: 32 }}>
              Still have questions? Reach out and we&apos;ll get back within 24 hours.
            </p>
            <a
              className="pb"
              href="#contact"
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                background: A,
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 24px',
                fontSize: 14,
                fontWeight: 700,
                fontFamily: 'inherit',
                textDecoration: 'none',
                boxShadow: `0 0 20px ${ag(0.35)}`,
              }}
            >
              Ask Us Anything →
            </a>
          </Reveal>

          <div>
            {FAQS.map((f, i) => {
              const isOpen = open === i
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div
                    className="fq"
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
                    style={{ padding: '18px 0' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, color: C.text, lineHeight: 1.5 }}>{f.q}</span>
                      <span
                        style={{
                          fontSize: 20,
                          color: isOpen ? A : C.dim,
                          transform: isOpen ? 'rotate(45deg)' : 'none',
                          transition: 'all .3s',
                          flexShrink: 0,
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div className="fq-b" style={{ maxHeight: isOpen ? '160px' : '0', opacity: isOpen ? 1 : 0 }}>
                      <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.8, paddingTop: 12 }}>{f.a}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
