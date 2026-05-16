import { A, C, ag } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { PROCESS } from '../data/content.js'

export function Process() {
  return (
    <section id="process" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <SectionHeader eyebrow="Process" title="How We Work" />
        <div className="proc-grid">
          {PROCESS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div
                className="proc-card"
                style={{
                  background: `linear-gradient(${C.s1},${C.s1}) padding-box, linear-gradient(135deg,${ag(0.26)},${ag(0.04)} 60%,${ag(0.12)}) border-box`,
                  border: '1px solid transparent',
                  borderRadius: 14,
                  padding: '28px 24px',
                  height: '100%',
                }}
              >
                <div style={{ fontSize: 10, color: C.dim, fontWeight: 600, letterSpacing: '.1em', marginBottom: 18 }}>
                  {p.n}
                </div>
                <div style={{ fontSize: 24, color: A, marginBottom: 16, opacity: 0.75 }}>{p.sym}</div>
                <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-.3px', marginBottom: 10 }}>{p.t}</div>
                <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.8 }}>{p.b}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
