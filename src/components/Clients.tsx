'use client'

import { useState, useEffect, useRef } from 'react'

export function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [countersInView, setCountersInView] = useState(false)
  const [displayValues, setDisplayValues] = useState([0, 0, 0, 0])

  const counters = [
    { label: 'Projects Completed', value: 180, suffix: '+' },
    { label: 'Happy Clients', value: 65, suffix: '+' },
    { label: 'Industries Served', value: 4, suffix: '' },
    { label: 'Years of Experience', value: 3, suffix: '' }
  ]

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCountersInView(true)
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!countersInView) return
    const targets = [180, 65, 4, 3]
    const durationMs = 1800
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValues(targets.map((end) => Math.round(easeOut * end)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [countersInView])

  // Logo files: place your 12 images in public/logos/ with these filenames
  const clientLogos = [
    { name: 'GO', logo: '/logos/go.png' },
    { name: 'Geojuris Today', logo: '/logos/geojuris-today.png' },
    { name: 'Vision', logo: '/logos/vision.png' },
    { name: 'Health Factor', logo: '/logos/health-factor.png' },
    { name: 'REVIV', logo: '/logos/reviv.png' },
    { name: 'Ecell SCS&IT', logo: '/logos/scsit.png' },
    { name: 'Curezy', logo: '/logos/curezy.png' },
    { name: 'Total Promo', logo: '/logos/total-promo.png' },
    { name: 'VVD', logo: '/logos/vvd.png' },
    { name: 'REVOLGO', logo: '/logos/revolgo.png' },
    { name: 'Civil Defence Indore', logo: '/logos/civil-defence.png' },
    { name: 'Abhimanch Theater', logo: '/logos/abhimanch.png' }
  ]

  return (
    <section id="clients" className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-accent-blue/15 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent-purple/15 blur-3xl" />
        <div className="absolute top-16 left-1/3 h-24 w-24 rounded-full bg-accent-emerald/20 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Clients
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2
            className="text-2xl min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent px-1"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.2)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            }}
          >
            Trusted by Teams That Ship
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            From startups to studios, we craft visuals and products that perform.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14"
        >
          {counters.map((counter, i) => (
            <div
              key={counter.label}
              className="mirror-card bg-card clean-border glass-surface rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center subtle-shadow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/10 hover:border-accent-blue/30 cursor-default"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-0.5 sm:mb-2 tabular-nums">
                {displayValues[i]}
                {counter.suffix}
              </div>
              <div className="text-[10px] min-[400px]:text-xs sm:text-sm text-muted-foreground uppercase tracking-widest">
                {counter.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden pb-6 sm:pb-8">
          <div className="flex animate-clients-scroll shrink-0 gap-3 sm:gap-4 pr-3 sm:pr-4">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-24 w-32 min-[400px]:h-28 min-[400px]:w-40 sm:h-28 sm:w-44 shrink-0 flex-col items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl border border-border/60 bg-card px-3 sm:px-4 py-2.5 sm:py-3 shadow-sm"
              >
                <div className="relative flex h-12 sm:h-14 w-full flex-1 min-h-0 items-center justify-center overflow-hidden rounded bg-background/80">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 w-full object-contain object-center"
                    onError={(e) => {
                      e.currentTarget.classList.add('opacity-0', 'absolute')
                      const next = e.currentTarget.nextElementSibling
                      if (next) (next as HTMLElement).classList.remove('hidden')
                    }}
                  />
                  <span className="hidden text-center text-xs font-semibold text-stone-500 sm:text-sm" aria-hidden>
                    {client.name}
                  </span>
                </div>
                <span className="text-center text-xs font-semibold text-stone-600 sm:text-sm">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 text-sm text-muted-foreground">
            Want to see your logo here? Let’s collaborate.
          </div>
        </div>
      </div>
    </section>
  )
}
