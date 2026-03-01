'use client'

import { useState, useEffect } from 'react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  const services = [
    {
      id: 'video-editing',
      title: "Video Editing",
      subhead: "Post-production & storytelling",
      description: "Commercial-grade edits designed for retention and brand recall. We craft narratives that resonate.",
      bullets: ["Story-first pacing", "Sound design + SFX", "Reels, ads, launches"],
      color: 'accent-emerald'
    },
    {
      id: 'graphic-design',
      title: "Graphic Design",
      subhead: "Brand identity & visual systems",
      description: "Brand systems that feel premium, modern, and distinct. From concept to final assets.",
      bullets: ["Identity + collateral", "Campaign key visuals", "Guidelines + assets"],
      color: 'accent-blue'
    },
    {
      id: 'web-development',
      title: "Web Development",
      subhead: "Fast, responsive, conversion-focused",
      description: "High-performance websites with cinematic motion. Built to engage and convert.",
      bullets: ["Responsive + fast", "Motion-led UI", "Conversion focused"],
      color: 'accent-purple'
    },
    {
      id: 'app-development',
      title: "App Development",
      subhead: "Intuitive flows & scalable builds",
      description: "Polished apps with intuitive flows and sleek UI. Strategy, design, and execution.",
      bullets: ["UX strategy", "Design systems", "Scalable builds"],
      color: 'accent-emerald'
    },
    {
      id: 'photography',
      title: "Photography",
      subhead: "Editorial-grade imagery",
      description: "Editorial-grade imagery that feels crafted, not generic. Brand storytelling through the lens.",
      bullets: ["Brand storytelling", "Product + lifestyle", "Art direction"],
      color: 'accent-blue'
    },
    {
      id: 'videography',
      title: "Videography",
      subhead: "Cinematic production & events",
      description: "Cinematic production for launches, brands, and events. Pre to post, full storytelling.",
      bullets: ["Pre + post production", "Cinematic lighting", "Narrative cut"],
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
    <section id="services" className="relative py-10 sm:py-14 md:py-16 lg:py-20 services-section overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        
        {/* Header - responsive typography */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className={`text-xs sm:text-sm font-semibold text-red-400 mb-2 sm:mb-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            Fresh from the Darkness
          </p>
          <h2 className={`text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-2 sm:mb-3 md:mb-4 text-amber-200 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Our Services
          </h2>
          <p className={`text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto px-1 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Developed with precision, delivered with passion.
          </p>
        </div>

        {/* Rows with rope + polaroid cards - rope hidden on mobile for cleaner stack */}
        <div className={`space-y-6 sm:space-y-10 md:space-y-12 max-w-6xl mx-auto transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {[topRow, bottomRow].map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative">
              {/* Rope line - visible from sm breakpoint */}
              <div className="absolute left-0 right-0 top-6 h-2 rounded-full services-rope hidden sm:block" />
              <div className="absolute left-0 top-5 w-3 h-3 rounded-full services-rope-pin hidden sm:block" />
              <div className="absolute right-0 top-5 w-3 h-3 rounded-full services-rope-pin hidden sm:block" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative pt-0 sm:pt-2 items-stretch">
                {row.map((service, index) => {
                  const delayClass = `services-reveal-delay-${(rowIndex * 3 + index) * 80}` as 'services-reveal-delay-0' | 'services-reveal-delay-80' | 'services-reveal-delay-160' | 'services-reveal-delay-240' | 'services-reveal-delay-320' | 'services-reveal-delay-400'
                  return (
                  <div
                    key={service.id}
                    className={`relative flex flex-col items-center h-full min-h-0 max-w-md sm:max-w-none mx-auto sm:mx-0 w-full ${delayClass}`}
                  >
                    {/* Golden clip - visible from sm */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-6 h-7 rounded-md services-clip z-10 hidden sm:block" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-4 services-rope rounded-full hidden sm:block" />
                    
                    {/* Card - glassmorphism, text only */}
                    <article className="group relative services-polaroid rounded-xl overflow-hidden flex flex-col w-full h-full min-h-[140px] sm:min-h-[160px] hover:scale-[1.02] active:scale-[0.99] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 touch-manipulation">
                      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-black text-amber-50 mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </article>
                  </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer tagline - responsive */}
        <p className={`text-center text-xs sm:text-sm text-amber-200/90 max-w-2xl mx-auto mt-8 sm:mt-10 md:mt-12 px-3 sm:px-4 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Each service is carefully developed for a smoother delivery, ensuring every detail captures the essence of your vision with precision and artistic flair.
        </p>
      </div>
    </section>
  )
}
