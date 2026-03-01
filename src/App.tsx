import { Hero } from './components/Hero'
import { FeaturedProject } from './components/FeaturedProject'
import { Clients } from './components/Clients'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { SkipLink } from './components/SkipLink'

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] bg-background text-foreground overflow-x-hidden">
      <SkipLink />
      <main id="main-content" className="relative w-full max-w-[100vw] overflow-x-hidden" role="main" tabIndex={-1}>
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="featured" aria-label="Featured project section">
          <FeaturedProject />
        </section>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="services" aria-label="Services section">
          <Services />
        </section>
        <section id="clients" aria-label="Clients section">
          <Clients />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}