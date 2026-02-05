'use client'

import { ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      category: "Video Editing",
      title: "Visual Storytelling",
      description: "Professional video edits for ads, social media, and corporate content with engaging storytelling.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&auto=format",
      rotation: "-rotate-1"
    },
    {
      id: 2,
      category: "Graphic Design",
      title: "Brand Identity Collection",
      description: "A showcase of stunning logos, marketing materials, and visual designs that capture brand essence.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&auto=format",
      rotation: "rotate-1"
    },
    {
      id: 3,
      category: "Web Development",
      title: "Modern Web Experiences",
      description: "High-performance, responsive websites that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format",
      rotation: "rotate-0"
    },
    {
      id: 4,
      category: "App Development",
      title: "Custom Applications",
      description: "Mobile and web applications tailored to business needs with seamless functionality.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&auto=format",
      rotation: "rotate-1"
    },
    {
      id: 5,
      category: "Photography",
      title: "Stunning Imagery",
      description: "Professional photography for products, events, portraits, and brand storytelling.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop&auto=format",
      rotation: "-rotate-2"
    },
    {
      id: 6,
      category: "Videography",
      title: "Cinematic Productions",
      description: "Compelling video content for commercials, documentaries, events, and brand stories.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&auto=format",
      rotation: "rotate-0"
    }
  ]

  return (
    <section id="portfolio" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.55) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-accent-purple/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent-emerald/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Work
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Creative Portfolio</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A curated reel of visuals, motion, and digital experiences with a retro-anime finish.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`group relative ${item.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-500 h-full`}
            >
              <div className="relative bg-card text-foreground rounded-2xl clean-border glass-surface border border-white/60 elevated-shadow overflow-hidden h-full flex flex-col">
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-24 bg-accent-purple/20 border border-accent-purple/40 rotate-2 shadow-sm" />

                {/* Image */}
                <div className="p-4">
                  <div className="relative h-52 rounded-lg overflow-hidden border border-white/50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 pb-6 flex-1 flex flex-col">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-4 h-px w-full bg-border/60" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-accent-purple hover:bg-accent-purple/90 text-white px-8 py-6 text-lg font-semibold rounded-xl"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
