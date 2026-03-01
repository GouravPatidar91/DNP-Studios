'use client'

import divyPhoto from '../assets/team-divy.png'
import mehakPhoto from '../assets/team-mehak.png'
import annirudhPhoto from '../assets/team-annirudh.png'
import dharikaPhoto from '../assets/team-dharika.png'
import gouravPhoto from '../assets/team-gourav.png'

export function Team() {
  const teamMembers = [
    {
      name: "Divy Nagar",
      role: "Founder",
      description: "The creative force behind DNP Studios. Divy leads the studio's vision, culture, and creative direction—shaping ideas into meaningful stories and scalable creative solutions.",
      image: divyPhoto,
      rotation: 'rotate-2'
    },
    {
      name: "Mehak Sani",
      role: "Co-Founder",
      description: "A strategic thinker and creative partner. Mehak drives collaboration, project alignment, and ensures that every concept balances creativity with purpose and execution.",
      image: mehakPhoto,
      rotation: '-rotate-1'
    },
    {
      name: "Annirudh Gupta",
      role: "CEO",
      description: "Oversees operations, growth, and business strategy. Annirudh ensures that creativity is supported by strong leadership, clear processes, and sustainable execution.",
      image: annirudhPhoto,
      rotation: 'rotate-1'
    },
    {
      name: "Dharika Joshi",
      role: "Script Writer",
      description: "Crafts compelling narratives and scripts that bring ideas to life. Dharika focuses on storytelling that connects emotionally and communicates clearly across formats.",
      image: dharikaPhoto,
      rotation: '-rotate-2'
    },
    {
      name: "Gourav Patidar",
      role: "Full Stack Developer",
      description: "Builds the digital backbone of DNP Studios' projects. Gourav translates creative ideas into robust, scalable, and high-performance digital experiences.",
      image: gouravPhoto,
      rotation: 'rotate-2'
    },
    
  ]

  return (
    <div className="relative py-12 sm:py-16 md:py-20 bg-background w-full" style={{ 
      overflow: 'visible', 
      height: 'auto', 
      minHeight: '0', 
      maxHeight: 'none' 
    }}>
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
             backgroundSize: '150px 150px'
           }} />
      <div className="absolute -top-16 right-12 h-40 w-40 rounded-full bg-accent-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-10 h-36 w-36 rounded-full bg-accent-emerald/20 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{ 
        overflow: 'visible', 
        height: 'auto', 
        minHeight: '0', 
        maxHeight: 'none' 
      }}>
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-orange)' }} />
            <span className="text-sm font-semibold text-muted-foreground tracking-widest uppercase">
              Meet the Crew
            </span>
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-purple)' }} />
          </div>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 sm:mb-8 text-foreground">
            <span className="block mb-2">The Creative</span>
            <span className="block" style={{ color: 'var(--accent-orange)' }}>MINDS</span>
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
            Passionate storytellers & digital craftsmen
          </p>
        </div>

        {/* Team Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className={`group transform ${member.rotation} hover:rotate-0 transition-all duration-500 hover:scale-105`}
                style={{
                  filter: 'drop-shadow(4px 4px 12px rgba(0,0,0,0.4))'
                }}
              >
                {/* Retro Card */}
                <div
                  className="relative rounded-lg overflow-hidden h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, var(--card) 0%, #1f1812 100%)',
                    border: '3px solid var(--border)'
                  }}
                >
                  {/* VHS-style corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: 'var(--accent-orange)' }} />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: 'var(--accent-orange)' }} />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: 'var(--accent-orange)' }} />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: 'var(--accent-orange)' }} />
                  
                  <div className="p-4 sm:p-6 text-center flex flex-col h-full">
                    {/* Anime Doodle Photo */}
                    <div
                      className="relative mb-4 sm:mb-5 mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden"
                      style={{
                        border: '4px solid var(--accent-orange)',
                        boxShadow: '0 0 20px rgba(212, 165, 116, 0.3)'
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{
                          filter: 'sepia(15%) contrast(110%) brightness(105%)'
                        }}
                      />
                      
                      {/* Scan lines overlay */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                        }}
                      />
                    </div>

                    {/* Name & Role */}
                    <h3 className="font-black text-lg sm:text-xl text-foreground mb-1" style={{ fontFamily: 'serif' }}>
                      {member.name}
                    </h3>
                    <div className="text-sm font-bold mb-4 tracking-widest uppercase" style={{ color: 'var(--accent-orange)' }}>
                      {member.role}
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    <div className="mt-auto pt-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
