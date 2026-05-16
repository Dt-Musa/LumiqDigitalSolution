import { useInView } from '../hooks/useInView.js'

/**
 * Fades + lifts children once they enter the viewport. `delay` is in seconds.
 */
export function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
