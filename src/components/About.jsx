import React from 'react';

export default function About() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Card */}
          <div 
            className="order-2 md:order-1"
            data-aos="fade-right"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI Technology"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className="order-1 md:order-2 space-y-6"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4">About Us</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </div>
            
            <p className="text-lg text-white/70 leading-relaxed">
              TechVac is a forward-thinking technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. We specialize in software development, data science, machine learning, and graphic design, providing comprehensive tech solutions tailored to our valued customers' unique needs.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Our team of expert developers, designers, and data scientists work collaboratively to transform complex challenges into elegant, scalable solutions. We're committed to excellence, innovation, and delivering measurable results that drive your business forward.
            </p>

            <button 
              onClick={() => scrollToSection('services')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Learn More</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}