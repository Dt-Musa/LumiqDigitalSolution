/**
 * Icon set used across the site.
 *
 * - UI icons   : `lucide-react`             (https://lucide.dev/icons)
 * - Brand icons: `react-icons/fa6`          (Font Awesome 6 brands)
 *
 * Each icon is a small named function component so React Fast Refresh and
 * tree-shaking play nicely. Pass `s` for square sizing, plus any prop the
 * underlying icon supports (`color`, `strokeWidth`, etc.).
 */
import {
  Check,
  Clock,
  Code2,
  Globe,
  Shield,
  Star,
  Users,
  X as XGlyph,
  Zap,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

// ── Brand / social ──
export function IcoX({ s = 22, ...rest }) {
  return <FaXTwitter size={s} {...rest} />
}
export function IcoGH({ s = 22, ...rest }) {
  return <FaGithub size={s} {...rest} />
}
export function IcoLI({ s = 22, ...rest }) {
  return <FaLinkedin size={s} {...rest} />
}

// ── UI ──
export function IcoGlobe({ s = 20, ...rest }) {
  return <Globe size={s} strokeWidth={1.6} {...rest} />
}
export function IcoZap({ s = 20, ...rest }) {
  return <Zap size={s} strokeWidth={1.6} {...rest} />
}
export function IcoShld({ s = 20, ...rest }) {
  return <Shield size={s} strokeWidth={1.6} {...rest} />
}
export function IcoUsrs({ s = 20, ...rest }) {
  return <Users size={s} strokeWidth={1.6} {...rest} />
}
export function IcoCode({ s = 20, ...rest }) {
  return <Code2 size={s} strokeWidth={1.6} {...rest} />
}
export function IcoClock({ s = 20, ...rest }) {
  return <Clock size={s} strokeWidth={1.6} {...rest} />
}

/**
 * Classic three-bar hamburger — equal length, even spacing. Optimised for
 * recognition and conversion. The universal "menu" glyph any visitor can
 * spot instantly. Small, deliberate hover lift adds polish without
 * sacrificing clarity.
 */
export function IcoMenu({ s = 18, ...rest }) {
  return (
    <svg
      className="ico-burger"
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <line className="ico-burger__top" x1="4" y1="8" x2="18" y2="8" />
      <line className="ico-burger__mid" x1="4" y1="12" x2="18" y2="12" />
      <line className="ico-burger__bot" x1="4" y1="16" x2="18" y2="16" />
    </svg>
  )
}

export function IcoClose({ s = 22, ...rest }) {
  return <XGlyph size={s} strokeWidth={2} {...rest} />
}
export function IcoCheck({ s = 22, ...rest }) {
  return <Check size={s} strokeWidth={2} {...rest} />
}
export function IcoStar({ s = 14, ...rest }) {
  return <Star size={s} fill="currentColor" strokeWidth={0} {...rest} />
}
