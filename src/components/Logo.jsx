import { A, C } from '../lib/tokens.js'

/**
 * Wordmark used in the navbar (size="sm") and footer (size="lg").
 */
export function Logo({ size = 'sm', href = '#main' }) {
  const big = size === 'lg'
  return (
    <a
      href={href}
      style={{
        color: C.text,
        textDecoration: 'none',
        alignSelf: 'flex-start',
        lineHeight: 1,
        marginTop: big ? 0 : 6,
        display: 'inline-flex',
        flexDirection: 'column',
        gap: big ? 6 : 4,
      }}
    >
      <span style={{ fontSize: big ? 26 : 20, fontWeight: 700, letterSpacing: big ? '-.6px' : '-.4px' }}>
        Lumi<span style={{ color: A }}>q</span> Digital
      </span>
      <span
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: C.sub,
        }}
      >
        Solutions
      </span>
    </a>
  )
}
