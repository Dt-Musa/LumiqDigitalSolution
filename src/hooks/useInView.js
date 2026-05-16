import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether the attached element has scrolled into view at least once.
 * Detaches the observer after the first reveal to keep things cheap.
 */
export function useInView(threshold = 0.08) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return
    const node = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}
