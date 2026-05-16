import { A, C, ag } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { TIERS } from '../data/content.js'

export function Pricing() {
  return (
    <section id="pricing" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, Honest Pricing"
          kicker="No hidden fees. Fixed prices. Everything included."
        />
        <Reveal delay={0.1}>
          <div className="tier-grid">
            {TIERS.map((tier, i) => (
              <div
                key={tier.name}
                className="tier-wrap tier-col-inner"
                style={{
                  borderRight: i < TIERS.length - 1 ? `1px solid ${C.b1}` : 'none',
                  padding: `0 ${i < TIERS.length - 1 ? 36 : 0}px 0 ${i > 0 ? 36 : 0}px`,
                }}
              >
                <div
                  style={{
                    height: 3,
                    background: tier.hot ? A : 'transparent',
                    marginBottom: 32,
                    boxShadow: tier.hot ? `0 0 14px ${ag(0.5)}` : 'none',
                  }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>{tier.name}</span>
                  {tier.hot && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        color: A,
                        border: `1px solid ${ag(0.4)}`,
                        borderRadius: 4,
                        padding: '1px 8px',
                        background: ag(0.08),
                      }}
                    >
                      Popular
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: 'clamp(32px,4vw,50px)',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    color: C.white,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {tier.price}
                </div>
                <div style={{ fontSize: 12, color: C.dim, marginBottom: 6 }}>{tier.cur}</div>
                <div
                  style={{
                    fontSize: 13,
                    color: C.sub,
                    marginBottom: 24,
                    paddingBottom: 24,
                    borderBottom: `1px solid ${C.b1}`,
                  }}
                >
                  {tier.tag}
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    marginBottom: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 9,
                  }}
                >
                  {tier.features.map((f) => (
                    <li key={f} style={{ fontSize: 13, color: C.sub, display: 'flex', gap: 10 }}>
                      <span style={{ color: A, fontWeight: 700, flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  className={tier.hot ? 'pb' : 'gb'}
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    background: tier.hot ? A : 'transparent',
                    color: tier.hot ? '#fff' : C.sub,
                    border: tier.hot ? 'none' : `1px solid ${C.b1}`,
                    borderRadius: 7,
                    padding: '11px 20px',
                    fontSize: 13,
                    fontWeight: 700,
                    fontFamily: 'inherit',
                    width: '100%',
                    textDecoration: 'none',
                    boxShadow: tier.hot ? `0 0 20px ${ag(0.3)}` : 'none',
                  }}
                >
                  Get Started →
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
