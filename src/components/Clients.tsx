export function Clients() {
  const counters = [
    { label: 'Projects Completed', value: '180+' },
    { label: 'Happy Clients', value: '65+' },
    { label: 'Industries Served', value: '4' },
    { label: 'Years of Experience', value: '2' }
  ]

  const clients = [
    'Ecell Scs&it',
    'Civil Defence Indore',
    'Shree Kedar Steels',
    'ACPL',
    'REVIVE',
    'REVOLGO',
    'VVD',
    'Curezy',
    'Geojuristoday',
    'Vision'
  ]

  return (
    <section id="clients" className="relative py-20 bg-background overflow-hidden">
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

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-muted-foreground">
              Our Clients
            </span>
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Trusted by Teams That Ship
          </h2>
          <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From startups to studios, we craft visuals and products that perform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {counters.map((counter) => (
            <div key={counter.label} className="bg-card clean-border glass-surface rounded-2xl p-6 text-center subtle-shadow">
              <div className="text-3xl sm:text-4xl font-black text-foreground mb-2">
                {counter.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">
                {counter.label}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-card/80 clean-border glass-surface rounded-2xl px-4 py-6 text-center text-sm font-semibold text-foreground/80"
              >
                {client}
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
