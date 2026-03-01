'use client';

import { motion } from 'framer-motion';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuFirstLinkRef = useRef<HTMLAnchorElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure video is muted immediately on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;

      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted;
          videoRef.current.volume = isMuted ? 0 : 0.7;
        }
      });

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Video autoplay failed:', error));
      }
    }
  }, []);

  // Update video mute state when isMuted changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = isMuted ? 0 : 0.7;
    }
  }, [isMuted]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Focus management: move focus into menu when open, restore to menu button when close
  useEffect(() => {
    if (isMobileMenuOpen) {
      requestAnimationFrame(() => {
        mobileMenuFirstLinkRef.current?.focus();
      });
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="relative min-h-[100dvh] h-screen w-full min-w-0 max-w-full overflow-hidden bg-black" style={{ height: '100dvh' }}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Background video showcasing creative work"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
        aria-label="Main navigation"
      >
        <div className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-300 ease-out ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}
          style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span className="font-bagel text-white text-base sm:text-lg md:text-xl tracking-wider">DNP STUDIOS</span>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#clients" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Clients
              </a>
              <a href="#about" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Process
              </a>
              <a href="#services" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105">
                Contact
              </a>
            </div>

            {/* Right Side - Video Controls + CTA + Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3 relative">
              {/* Video Controls */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsMuted((prev) => {
                      const nextMuted = !prev;
                      if (videoRef.current) {
                        videoRef.current.muted = nextMuted;
                        videoRef.current.volume = nextMuted ? 0 : 0.7;
                        if (!nextMuted) {
                          const playPromise = videoRef.current.play();
                          if (playPromise !== undefined) {
                            playPromise.catch(() => {});
                          }
                        }
                      }
                      return nextMuted;
                    });
                  }}
                  className="glass-effect p-2.5 sm:p-3 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" aria-hidden /> : <Volume2 className="w-4 h-4" aria-hidden />}
                </button>
                
                {isMuted && (
                  <div className="absolute -bottom-10 right-0 hidden sm:flex items-center text-white/80">
                    <span className="whitespace-nowrap font-medium text-sm mr-2">Sound On</span>
                    <span className="text-lg">↗</span>
                  </div>
                )}
              </div>
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden sm:block bg-red-600 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-red-700 gentle-animation ml-4 cursor-pointer"
              >
                Get in Touch
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden /> : <Menu className="w-5 h-5" aria-hidden />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        id="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-black/90 backdrop-blur-xl border-l border-white/10 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-white hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" aria-hidden />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            <div className="flex flex-col space-y-4 text-white">
              <a ref={mobileMenuFirstLinkRef} href="#clients" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset" onClick={() => setIsMobileMenuOpen(false)}>
                Clients
              </a>
              <a href="#about" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                Process
              </a>
              <a href="#services" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#contact" className="mobile-menu-link px-4 py-3 hover:text-white/80 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 active:bg-red-800 gentle-animation mt-8 cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-12 left-3 sm:left-6 md:left-8 lg:left-12 right-3 sm:right-auto z-40 w-[calc(100%-1.5rem)] sm:w-auto sm:max-w-3xl"
      >
        <h1 className="text-xl min-[380px]:text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-3 sm:mb-6">
          Creative Solutions for Modern Brands
        </h1>
        <p className="text-xs min-[380px]:text-sm sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-8 max-w-2xl">
          DNP Studios delivers video editing, graphic design, web development, app development, photography, and videography to help brands grow, engage, and stand out.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const clientsSection = document.getElementById('clients');
              clientsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-black font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-md hover:bg-white/90 gentle-animation cursor-pointer touch-manipulation w-full sm:w-auto"
          >
            View Our Clients
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-md hover:bg-white/10 gentle-animation cursor-pointer touch-manipulation w-full sm:w-auto"
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
