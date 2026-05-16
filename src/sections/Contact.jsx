import { useState } from 'react'
import { A, C } from '../lib/tokens.js'
import { Reveal } from '../components/Reveal.jsx'
import { IcoCheck } from '../components/icons.jsx'
import { SITE } from '../lib/config.js'
import { BUDGET_OPTIONS, SERVICE_OPTIONS } from '../data/content.js'

const initialForm = { fullName: '', email: '', service: '', budget: '', details: '' }

/**
 * Hands the enquiry off via `mailto:` — opens the user's email client with a
 * prefilled message. Swap this for a real API/Formspree endpoint when ready.
 */
function buildMailto({ fullName, email, service, budget, details }) {
  const subject = `New project enquiry — ${service || 'General'}`
  const body = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Service: ${service}`,
    budget ? `Budget: ${budget}` : null,
    '',
    'Details:',
    details,
  ]
    .filter(Boolean)
    .join('\n')
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.fullName || !form.email || !form.service || !form.details) {
      setError('Please fill in all required fields.')
      return
    }

    window.location.href = buildMailto(form)
    setSent(true)
  }

  return (
    <section id="contact" className="section" style={{ borderTop: `1px solid ${C.b1}` }}>
      <div className="container">
        <Reveal>
          <div className="contact-header">
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: A,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Contact
            </p>
            <h2
              style={{
                fontSize: 'clamp(26px,3.4vw,46px)',
                fontWeight: 800,
                letterSpacing: '-1.6px',
                lineHeight: 1.05,
                marginBottom: 12,
              }}
            >
              Start a Conversation
            </h2>
            <p style={{ fontSize: 14, color: C.sub, lineHeight: 1.7 }}>
              Tell us about your project and we&apos;ll get back within 24 hours. No commitment, no pressure.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          {sent ? (
            <div className="contact-success" role="status" aria-live="polite">
              <IcoCheck />
              <span>
                Thanks — your email client should be opening now. Hit send and we&apos;ll be in touch within
                24 hours.
              </span>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="contact-form">
              <div className="contact-grid">
                <div>
                  <label className="contact-label" htmlFor="fullName">
                    Full Name
                  </label>
                  <input
                    className="contact-input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    value={form.fullName}
                    onChange={onChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="contact-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="contact-input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="contact-label" htmlFor="service">
                    Service Needed
                  </label>
                  <select
                    className="contact-input contact-select"
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    required
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="contact-label" htmlFor="budget">
                    Budget Range
                  </label>
                  <select
                    className="contact-input contact-select"
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={onChange}
                  >
                    <option value="">Select a range (optional)</option>
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label className="contact-label" htmlFor="details">
                    Project Details
                  </label>
                  <textarea
                    className="contact-input contact-textarea"
                    id="details"
                    name="details"
                    placeholder="Tell us about your project, timeline, or any questions you have..."
                    rows={4}
                    value={form.details}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <button className="contact-submit" type="submit">
                  Send Message →
                </button>
                {error ? (
                  <div role="alert" style={{ marginTop: 12, fontSize: 13, color: '#b25cff' }}>
                    {error}
                  </div>
                ) : null}
                <p style={{ marginTop: 14, fontSize: 12, color: C.dim }}>
                  Prefer email? Write to{' '}
                  <a href={`mailto:${SITE.email}`} style={{ color: C.sub, textDecoration: 'underline' }}>
                    {SITE.email}
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
