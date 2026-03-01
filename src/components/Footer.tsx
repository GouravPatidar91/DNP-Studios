'use client'

export function Footer() {
  const services = [
    'Video Editing',
    'Graphic Design', 
    'Web Development',
    'App Development',
    'Photography',
    'Videography'
  ]

  return (
    <footer className="relative py-12 sm:py-16 md:py-20 bg-foreground text-background" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-8 sm:gap-10 md:gap-12">
          {/* Logo + Social */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start justify-center md:justify-start gap-6">
            {/* DYNAMIC studio logo */}
            <a href="#" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded" aria-label="Dynamic Studio - Home">
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-baseline gap-0 flex-wrap">
                  <span className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-blue-500">DYN</span>
                  <span className="text-blue-500 inline-flex items-center shrink-0 w-[0.5em] h-[0.65em]" aria-hidden>
                    <svg viewBox="0 0 24 28" fill="currentColor" className="w-full h-full">
                      <path d="M12 0L24 28H0L12 0z" />
                    </svg>
                  </span>
                  <span className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-blue-500">MIC</span>
                  <span className="text-sm font-medium text-blue-400 ml-1 self-end -mb-0.5">studio</span>
                </div>
                <div className="rounded-md bg-blue-500 px-2.5 py-1">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white">New Production</span>
                </div>
                <p className="text-xs text-blue-400/90 font-normal normal-case">Design & Storymaking agency</p>
              </div>
            </a>
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Instagram - placeholder until profile URL is set */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-lg hover:scale-110 gentle-animation cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                aria-label="DNP Studios on Instagram"
              >
                <svg width="20" height="20" className="shrink-0" viewBox="0 0 24 24" fill="url(#instagram-gradient)">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4"/>
                      <stop offset="50%" stopColor="#E1306C"/>
                      <stop offset="100%" stopColor="#F56040"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/dnp-studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-lg hover:scale-110 gentle-animation cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                aria-label="DNP Studios on LinkedIn"
              >
                <svg width="20" height="20" className="shrink-0" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <nav className="col-span-12 md:col-span-7" aria-label="Our services">
            <h2 className="font-black text-xl sm:text-2xl text-background mb-4">OUR SERVICES</h2>
            <p className="text-background/70 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              We offer comprehensive creative solutions to help your brand stand out in the digital landscape. From initial concept to final delivery, we're with you every step of the way.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 list-none m-0 p-0">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-background/80 hover:text-background gentle-animation text-sm font-medium no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground rounded"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 sm:pt-8 mt-10 sm:mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <small className="text-sm text-background/70">
              © 2025 Dynamic Studio. All rights reserved.
            </small>
            <address className="text-sm text-background/70 not-italic">
              Indore, India
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}
