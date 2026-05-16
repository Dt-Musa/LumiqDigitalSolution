import { A } from '../lib/tokens.js'

/**
 * Keyboard-only "Skip to content" link. Hidden until focused.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      style={{
        position: 'absolute',
        top: 12,
        left: 12,
        padding: '8px 12px',
        background: A,
        color: '#fff',
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 700,
        zIndex: 200,
        transform: 'translateY(-200%)',
        textDecoration: 'none',
      }}
      onFocus={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onBlur={(e) => {
        e.currentTarget.style.transform = 'translateY(-200%)'
      }}
    >
      Skip to content
    </a>
  )
}
