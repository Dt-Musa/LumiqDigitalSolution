import { C, ag } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { SectionHeader } from '../components/SectionHeader.jsx'
import { WHY } from '../data/content.js'
import {
  IcoGlobe,
  IcoZap,
  IcoUsrs,
  IcoShld,
  IcoCode,
  IcoClock,
} from '../components/icons.jsx'

const ICONS = {
  globe: <IcoGlobe />,
  zap: <IcoZap />,
  users: <IcoUsrs />,
  shield: <IcoShld />,
  code: <IcoCode />,
  clock: <IcoClock />,
}

export function Why() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Why Lumiq"
          title="A studio that thinks like a business, builds like engineers."
          headingMaxWidth={520}
        />
        <div className="bento">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <div
                className="why-card"
                style={{
                  background: `linear-gradient(${C.s1},${C.s1}) padding-box, linear-gradient(135deg,${ag(0.26)},${ag(0.04)} 60%,${ag(0.12)}) border-box`,
                  border: '1px solid transparent',
                  borderRadius: 14,
                  padding: '28px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 9,
                    background: ag(0.12),
                    border: `1px solid ${ag(0.22)}`,
                    color: '#7c3aed',
                    marginBottom: 20,
                    flexShrink: 0,
                  }}
                >
                  {ICONS[w.icon]}
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-.3px', marginBottom: 10 }}>
                  {w.title}
                </div>
                <div style={{ fontSize: 13, color: C.sub, lineHeight: 1.8 }}>{w.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
