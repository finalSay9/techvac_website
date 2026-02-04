export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-20 left-8 sm:left-20">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32" data-aos="fade-down">
          <div 
            className="absolute inset-0 border-l-[60px] sm:border-l-[80px] border-l-teal-400 border-b-[60px] sm:border-b-[80px] border-b-purple-500 border-r-[60px] sm:border-r-[80px] border-r-transparent border-t-[60px] sm:border-t-[80px] border-t-pink-500 transform rotate-0"
            style={{ 
              borderLeftColor: '#2dd4bf', 
              borderBottomColor: '#a855f7', 
              borderRightColor: 'transparent', 
              borderTopColor: '#ec4899' 
            }}
          ></div>
        </div>
      </div>

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 sm:mb-6" data-aos="zoom-in">
          <span className="text-teal-400">Tech</span>Vac
        </h1>
        <div className="relative inline-block" data-aos="fade-up" data-aos-delay="200">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-teal-400 bg-clip-text text-transparent">
            <span className="inline-block transform -rotate-2 text-teal-400">c</span>
            <span className="inline-block transform rotate-3 text-purple-500">o</span>
            <span className="inline-block transform -rotate-3 text-white">s</span>
            <span className="inline-block transform -rotate-1 text-white">m</span>
            <span className="inline-block transform rotate-2 text-purple-500">i</span>
            <span className="inline-block transform -rotate-3 text-white">c</span>
            <span className="mx-2 inline-block transform rotate-1 text-white">c</span>
            <span className="inline-block transform -rotate-2 text-purple-500">0</span>
            <span className="inline-block transform rotate-3 text-white">d</span>
            <span className="inline-block transform -rotate-1 text-teal-400">3</span>
          </p>
        </div>
      </div>
    </section>
  );
}