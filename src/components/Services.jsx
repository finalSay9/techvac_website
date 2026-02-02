

const Services = () => {
  const services = [
    {
      title: 'Graphics Designing',
      description: 'Creative visual solutions that bring your brand to life with stunning designs and compelling visuals that captivate your audience.',
      icon: '🎨',
      position: 'left'
    },
    {
      title: 'Software Development',
      description: 'Full-stack web and mobile applications built with cutting-edge technologies, best practices, and scalable architecture.',
      icon: '💻',
      position: 'center'
    },
    {
      title: 'Data Science & ML',
      description: 'Advanced machine learning models and data-driven insights to power your business decisions and unlock new opportunities.',
      icon: '🤖',
      position: 'right'
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 
          className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-20" 
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
              data-aos={
                service.position === 'left' ? 'fade-right' : 
                service.position === 'right' ? 'fade-left' : 
                'fade-up'
              }
              data-aos-delay={service.position === 'center' ? '0' : '200'}
              data-aos-duration="800"
            >
              {/* Icon/Image Area */}
              <div className="relative w-full h-64 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-8xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors group"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;