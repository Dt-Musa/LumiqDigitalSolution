/**
 * Design tokens — single source of truth for brand colors and helpers.
 * Keep this small; do not let it sprawl. Add component-level styles in their own files.
 */

export const A = '#7c3aed'   // brand accent
export const AH = '#9333ea'  // accent hover

/** rgba helper for the accent color at given opacity */
export const ag = (opacity) => `rgba(124,58,237,${opacity})`

export const C = {
  bg: '#000',
  s1: '#0a0a0a',
  s2: '#0d0d0d',
  b1: '#1e1e1e',
  text: '#ebebeb',
  sub: '#686868',
  dim: '#3a3a3a',
  white: '#fff',
}
