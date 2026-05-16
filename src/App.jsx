import { C } from './lib/tokens.js'
import { GlobalStyles } from './components/GlobalStyles.jsx'
import { SkipLink } from './components/SkipLink.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './sections/Hero.jsx'
import { Why } from './sections/Why.jsx'
import { Services } from './sections/Services.jsx'
import { Process } from './sections/Process.jsx'
import { Testimonials } from './sections/Testimonials.jsx'
import { Pricing } from './sections/Pricing.jsx'
import { FAQ } from './sections/FAQ.jsx'
import { CTA } from './sections/CTA.jsx'
import { Contact } from './sections/Contact.jsx'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          fontFamily: "'Space Grotesk',system-ui,sans-serif",
          background: C.bg,
          color: C.text,
          overflowX: 'hidden',
        }}
      >
        <SkipLink />
        <Navbar />
        <main id="main">
          <Hero />
          <Why />
          <Services />
          <Process />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
