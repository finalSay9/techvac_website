

const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-sky-800 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Content - Left on Desktop */}
          <div 
            className="order-2 md:order-1" 
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
              About Us
            </h2>
            <div className="w-24 h-1 bg-teal-400 mb-6"></div>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
              We are a cutting-edge technology company dedicated to delivering innovative solutions 
              to our valued customers. From AI-powered applications to comprehensive software development, 
              TechVac transforms your digital vision into reality with excellence and precision.
            </p>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
              Our team of expert developers, designers, and data scientists work collaboratively 
              to create solutions that drive business growth and exceed expectations. We specialize 
              in modern web technologies, machine learning, and stunning graphic design.
            </p>
            <a 
              href="#services" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              Learn More
            </a>
          </div>

          {/* Image Card - Right on Desktop */}
          <div 
            className="order-1 md:order-2" 
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-96 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-600 flex items-center justify-center">
                {/* Placeholder for AI Image */}
                <div className="text-center text-white p-8">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z"/>
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xl font-bold">AI-Powered Innovation</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;