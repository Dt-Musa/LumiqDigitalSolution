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
  Menu,
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
export function IcoMenu({ s = 22, ...rest }) {
  return <Menu size={s} strokeWidth={2.4} {...rest} />
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
