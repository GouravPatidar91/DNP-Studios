'use client'

import { Mail, Calendar, Check } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-10 h-44 w-44 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-44 w-44 rounded-full bg-accent-purple/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.6) 1px, transparent 0)',
            backgroundSize: '4px 4px'
          }}
        />
      </div>
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Book a Discovery Call
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">
            <span className="block mb-2">Ready to Light Up the Screen?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Book a discovery call to discuss your project and see how we can bring your vision to cinematic reality.
          </p>
        </div>

        {/* Booking Panel */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card clean-border glass-surface rounded-3xl overflow-hidden subtle-shadow">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/60">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-black text-foreground">DNP Discovery Call</h3>
                    <p className="text-sm text-muted-foreground">30 min meeting • Google Meet</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available
                  </span>
                </div>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Project discovery + goals
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Creative direction + timeline
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent-emerald" />
                    Budget + production plan
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://calendar.google.com/calendar/u/0/r/eventedit?text=DNP%20Studios%20Meeting&details=Tell%20us%20about%20your%20project%20and%20we%27ll%20prepare%20ideas%20for%20our%20call.&location=Google%20Meet"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-foreground text-background font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Meeting
                  </a>
                  <a
                    href="mailto:dnpstudio.arts@gmail.com"
                    className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-xl clean-border hover:bg-card transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Send Us a Message
                  </a>
                </div>
              </div>

              <div className="flex-1 p-8 lg:p-10">
                <div className="bg-background/90 clean-border glass-surface rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-foreground">February 2026</div>
                    <div className="text-xs text-muted-foreground">GMT +5:30</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-xs text-muted-foreground mb-3">
                    {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
                      <div key={day} className="text-center">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-xs">
                    {Array.from({ length: 35 }).map((_, idx) => {
                      const day = idx - 3
                      const isActive = day === 12
                      return (
                        <div
                          key={idx}
                          className={`h-8 rounded-md flex items-center justify-center ${
                            day > 0 && day <= 28
                              ? isActive
                                ? 'bg-foreground text-background font-semibold'
                                : 'bg-card text-foreground'
                              : 'text-muted-foreground/40'
                          }`}
                        >
                          {day > 0 && day <= 28 ? day : ''}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: 'Project Discovery',
                text: 'Share your goals, audience, and timeline to shape the direction.'
              },
              {
                title: 'Creative Strategy',
                text: 'We align style, story, and deliverables to maximize impact.'
              },
              {
                title: 'Next Steps',
                text: 'Receive a clear plan, scope, and production roadmap.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-card clean-border glass-surface rounded-2xl p-6 subtle-shadow">
                <h4 className="text-lg font-black text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
