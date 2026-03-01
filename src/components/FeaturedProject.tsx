export function FeaturedProject() {
  return (
    <section id="featured" className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent-purple/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-emerald/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Featured Production
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
            Creative Productions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            Our latest commercial for Hampton — exploring the lonely journey of startup
            founders and the power of community.
          </p>
        </div>

        <div className="max-w-5xl w-full min-w-0 mx-auto">
          <div className="bg-card clean-border glass-surface rounded-2xl sm:rounded-3xl overflow-hidden subtle-shadow w-full">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LrtxwcuIUB0"
                title="Featured production video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="p-5 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple font-semibold">
                  Commercial
                </span>
                <span>Client: Hampton</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-3">
                The Lonely Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A cinematic story about ambition, isolation, and the moment a community
                turns pressure into progress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm">
                <div className="bg-background/80 clean-border glass-surface rounded-2xl p-3 sm:p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Industry
                  </div>
                  <div className="font-semibold text-foreground">Community Platform</div>
                </div>
                <div className="bg-background/80 clean-border glass-surface rounded-2xl p-3 sm:p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Style
                  </div>
                  <div className="font-semibold text-foreground">Narrative Drama</div>
                </div>
                <div className="bg-background/80 clean-border glass-surface rounded-2xl p-3 sm:p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Tone
                  </div>
                  <div className="font-semibold text-foreground">Emotional Journey</div>
                </div>
                <div className="bg-background/80 clean-border glass-surface rounded-2xl p-3 sm:p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Format
                  </div>
                  <div className="font-semibold text-foreground">Digital Commercial</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
