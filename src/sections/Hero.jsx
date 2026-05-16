import { useEffect, useState } from 'react'
import { A, C, ag } from '../lib/tokens.js'

const WORDS = ['Brilliant.', 'Scalable.', 'Yours.']

export function Hero() {
  const [wi, setWi] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWi((w) => (w + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle,#1e1e1e 1px,transparent 1px)',
          backgroundSize: '38px 38px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%,black 5%,transparent 75%)',
          opacity: 0.45,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 'min(800px,100vw)',
          height: 'min(800px,100vw)',
          borderRadius: '50%',
          top: '0%',
          right: '-15%',
          background: `radial-gradient(circle,${ag(0.12)} 0%,transparent 65%)`,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 'min(500px,80vw)',
          height: 'min(500px,80vw)',
          borderRadius: '50%',
          bottom: '0%',
          left: '-10%',
          background: `radial-gradient(circle,${ag(0.06)} 0%,transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 110, paddingBottom: 70 }}>
        <div className="hero-grid">
          <div>
            <h1
              style={{
                fontSize: 'clamp(42px,8vw,108px)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: 'clamp(-2px,-0.04em,-4px)',
                animation: 'fadeUp .75s cubic-bezier(.16,1,.3,1) .06s both',
                maxWidth: 900,
                marginBottom: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Newsreader',serif",
                  background: 'linear-gradient(135deg,#fff 30%,#c4b5fd 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We Build
                <br />
                Digital That's
                <br />
              </span>
              <span
                key={wi}
                style={{
                  color: A,
                  display: 'inline-block',
                  animation: 'wordIn .45s cubic-bezier(.16,1,.3,1) both',
                }}
              >
                {WORDS[wi]}
              </span>
            </h1>

            <div
              className="hero-actions"
              style={{
                marginTop: 32,
                animation: 'fadeUp .85s cubic-bezier(.16,1,.3,1) .16s both',
              }}
            >
              <p style={{ fontSize: 'clamp(15px,1.5vw,18px)', color: C.sub, lineHeight: 1.8, maxWidth: 440 }}>
                Lumiq crafts smart websites, landing pages, and digital products for businesses across East Africa and the world — from first idea to final launch.
              </p>
              <div className="hero-btns hero-btns--end">
                <a
                  className="pb"
                  href="#contact"
                  style={{
                    background: A,
                    color: '#fff',
                    border: 'none',
                    borderRadius: 10,
                    padding: '14px 30px',
                    fontSize: 15,
                    fontWeight: 700,
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                    boxShadow: `0 0 28px ${ag(0.35)}`,
                  }}
                >
                  Start a Project →
                </a>
                <a
                  className="gb"
                  href="#pricing"
                  style={{
                    background: 'transparent',
                    color: C.sub,
                    border: `1px solid ${C.b1}`,
                    borderRadius: 10,
                    padding: '14px 30px',
                    fontSize: 15,
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
