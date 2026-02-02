

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-900 relative flex items-center justify-center pt-16 overflow-hidden">
      {/* Decorative Triangle - Top Left */}
      <div className="absolute top-24 left-4 md:top-28 md:left-10 w-20 h-20 md:w-32 md:h-32 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <polygon points="50,10 10,90 90,90" fill="url(#triangleGradient)" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-4">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          TechVac
        </h1>
        <div 
          className="relative inline-block"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
            style={{ 
              fontFamily: 'Courier New, monospace', 
              letterSpacing: '0.15em',
              fontWeight: '900'
            }}
          >
            c<span className="text-teal-300">o</span>mic c
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cyan-400">0</span>d
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-blue-400">3</span>
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 blur-sm"></div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <svg className="w-6 h-6 text-teal-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;