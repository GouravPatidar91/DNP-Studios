'use client'

import { useState, useEffect } from 'react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const doodleArt = (stroke: string, fill: string, variant: 'video' | 'design' | 'web' | 'app' | 'photo' | 'film') => {
    const base = `
      <rect x='0.5' y='0.5' width='239' height='159' rx='18' fill='${fill}' stroke='${stroke}' stroke-width='2'/>
      <path d='M20 130c20-6 40-6 60 0' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
      <path d='M170 26c10 6 16 16 10 26' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
      <circle cx='204' cy='120' r='9' stroke='${stroke}' stroke-width='3'/>
    `

    const variants: Record<typeof variant, string> = {
      video: `
        <rect x='34' y='36' width='70' height='44' rx='6' stroke='${stroke}' stroke-width='3'/>
        <path d='M110 44l28-12v48l-28-12z' stroke='${stroke}' stroke-width='3' fill='none'/>
        <path d='M52 98c12-10 30-10 42 0' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
        <path d='M154 110l22 10 14-22' stroke='${stroke}' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/>
      `,
      design: `
        <path d='M40 46l26-18 18 26-26 18-18-26z' stroke='${stroke}' stroke-width='3'/>
        <path d='M86 100l28-10 10 28-28 10-10-28z' stroke='${stroke}' stroke-width='3'/>
        <circle cx='160' cy='78' r='14' stroke='${stroke}' stroke-width='3'/>
        <path d='M150 110c10 6 22 6 32 0' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
      `,
      web: `
        <rect x='30' y='34' width='90' height='58' rx='8' stroke='${stroke}' stroke-width='3'/>
        <path d='M30 50h90' stroke='${stroke}' stroke-width='3'/>
        <path d='M44 74h26M78 74h26' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
        <path d='M150 48l22-12 22 12-22 12-22-12z' stroke='${stroke}' stroke-width='3'/>
        <path d='M154 100c12-6 24-6 36 0' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
      `,
      app: `
        <rect x='42' y='30' width='54' height='86' rx='10' stroke='${stroke}' stroke-width='3'/>
        <circle cx='69' cy='102' r='6' stroke='${stroke}' stroke-width='3'/>
        <path d='M56 48h26M56 62h26M56 76h26' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
        <path d='M132 44l24 16-24 16-24-16 24-16z' stroke='${stroke}' stroke-width='3'/>
      `,
      photo: `
        <rect x='34' y='40' width='86' height='58' rx='8' stroke='${stroke}' stroke-width='3'/>
        <circle cx='76' cy='68' r='16' stroke='${stroke}' stroke-width='3'/>
        <path d='M44 52h18' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
        <path d='M138 94l18-12 18 12-18 12-18-12z' stroke='${stroke}' stroke-width='3'/>
        <path d='M150 44c10 2 16 10 14 20' stroke='${stroke}' stroke-width='3' stroke-linecap='round'/>
      `,
      film: `
        <rect x='28' y='36' width='78' height='60' rx='8' stroke='${stroke}' stroke-width='3'/>
        <path d='M40 36v60M62 36v60M84 36v60' stroke='${stroke}' stroke-width='3'/>
        <circle cx='160' cy='66' r='12' stroke='${stroke}' stroke-width='3'/>
        <circle cx='196' cy='66' r='12' stroke='${stroke}' stroke-width='3'/>
        <path d='M150 112l24-16 24 16-24 16-24-16z' stroke='${stroke}' stroke-width='3'/>
      `
    }

    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 160' fill='none'>
        ${base}
        ${variants[variant]}
      </svg>
    `.replace(/\s+/g, ' ').trim()

    return `data:image/svg+xml;utf8,${svg.replace(/#/g, '%23')}`
  }

  const services = [
    {
      id: 'video-editing',
      title: "Video Editing",
      description: "Commercial-grade edits designed for retention and brand recall.",
      bullets: ["Story-first pacing", "Sound design + SFX", "Reels, ads, launches"],
      art: doodleArt('#0f766e', '#ecfdf5', 'video'),
      color: 'accent-emerald'
    },
    {
      id: 'graphic-design',
      title: "Graphic Design",
      description: "Brand systems that feel premium, modern, and distinct.",
      bullets: ["Identity + collateral", "Campaign key visuals", "Guidelines + assets"],
      art: doodleArt('#1d4ed8', '#eff6ff', 'design'),
      color: 'accent-blue'
    },
    {
      id: 'web-development',
      title: "Web Development",
      description: "High-performance websites with cinematic motion.",
      bullets: ["Responsive + fast", "Motion-led UI", "Conversion focused"],
      art: doodleArt('#6d28d9', '#f5f3ff', 'web'),
      color: 'accent-purple'
    },
    {
      id: 'app-development',
      title: "App Development",
      description: "Polished apps with intuitive flows and sleek UI.",
      bullets: ["UX strategy", "Design systems", "Scalable builds"],
      art: doodleArt('#0f766e', '#ecfdf5', 'app'),
      color: 'accent-emerald'
    },
    {
      id: 'photography',
      title: "Photography",
      description: "Editorial-grade imagery that feels crafted, not generic.",
      bullets: ["Brand storytelling", "Product + lifestyle", "Art direction"],
      art: doodleArt('#1d4ed8', '#eff6ff', 'photo'),
      color: 'accent-blue'
    },
    {
      id: 'videography',
      title: "Videography",
      description: "Cinematic production for launches, brands, and events.",
      bullets: ["Pre + post production", "Cinematic lighting", "Narrative cut"],
      art: doodleArt('#6d28d9', '#f5f3ff', 'film'),
      color: 'accent-purple'
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const topRow = services.slice(0, 3)
  const bottomRow = services.slice(3, 6)

  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.7) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
      </div>
      <div className="absolute -top-20 left-10 h-48 w-48 rounded-full bg-accent-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 h-48 w-48 rounded-full bg-accent-emerald/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center gap-3 mb-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              What We Offer
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-foreground transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Our Services
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            A full-service design agency delivering strategy, craft, and production with a premium finish.
          </p>
        </div>

        {/* Timeline Rows */}
        <div className={`space-y-10 max-w-6xl mx-auto transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {[topRow, bottomRow].map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative">
              {/* Rope */}
              <div className="absolute left-0 right-0 top-6 h-[4px] rounded-full bg-[#b57a3a] shadow-[0_2px_6px_rgba(0,0,0,0.25)]" />
              <div className="absolute left-0 top-5 h-2 w-2 rounded-full bg-[#d8a35a] border border-black/20" />
              <div className="absolute right-0 top-5 h-2 w-2 rounded-full bg-[#d8a35a] border border-black/20" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {row.map((service, index) => {
                  return (
                    <div
                      key={service.id}
                      className="relative"
                      style={{ transitionDelay: `${(rowIndex * 3 + index) * 100}ms` }}
                    >
                      {/* Rope pin + clip */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f5d08b] border border-black/30 shadow-[0_0_0_4px_rgba(181,122,58,0.25)]" />
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-5 h-6 rounded-md bg-[#c88a40] border border-black/30 shadow-[0_4px_8px_rgba(0,0,0,0.25)]" />
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[#b57a3a]" />

                      <div className="group relative bg-card clean-border glass-surface rounded-2xl p-6 elevated-shadow hover:scale-[1.02] transition-all duration-500">
                        <div
                          className="h-28 rounded-xl border border-border/60 bg-background/80 mb-4 overflow-hidden"
                          style={{
                            backgroundImage: `url("${service.art}")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />

                        <h3 className="text-xl font-black text-foreground mb-2">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {service.description}
                        </p>

                        <div className="space-y-2 text-xs text-foreground/80">
                          {service.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-center gap-2">
                              <span className={`h-1.5 w-1.5 rounded-full bg-${service.color}`} />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-card/80 backdrop-blur-sm clean-border glass-surface rounded-2xl px-6 sm:px-8 py-4 subtle-shadow">
            <span className="text-xs sm:text-sm font-semibold text-foreground">Strategy</span>
            <span className="text-xs sm:text-sm text-muted-foreground">•</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Design</span>
            <span className="text-xs sm:text-sm text-muted-foreground">•</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Production</span>
            <span className="text-xs sm:text-sm text-muted-foreground">•</span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">Launch</span>
          </div>
        </div>
      </div>
    </section>
  )
}
