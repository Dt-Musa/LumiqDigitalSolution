import { A, C } from '../lib/tokens.js'
import { Reveal } from './Reveal.jsx'

/**
 * Standard eyebrow + heading combo used at the top of most sections.
 */
export function SectionHeader({ eyebrow, title, kicker, headingMaxWidth, marginBottom = 52 }) {
  return (
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
        {eyebrow}
      </p>
      <h2
        style={{
          fontSize: 'clamp(28px,4vw,50px)',
          fontWeight: 800,
          letterSpacing: '-1.8px',
          lineHeight: 1.05,
          marginBottom: kicker ? 10 : marginBottom,
          maxWidth: headingMaxWidth,
        }}
      >
        {title}
      </h2>
      {kicker ? (
        <p style={{ fontSize: 15, color: C.sub, marginBottom: marginBottom }}>{kicker}</p>
      ) : null}
    </Reveal>
  )
}
