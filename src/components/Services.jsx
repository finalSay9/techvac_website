import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Graphic Design',
      description: 'Creating stunning visual identities, logos, brand materials, and marketing collateral that captivate your audience and communicate your brand\'s unique story.',
      image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80',
      gradient: 'from-purple-500 to-pink-500',
      delay: '0'
    },
    {
      title: 'Software Development',
      description: 'Building robust, scalable applications and web solutions using cutting-edge technologies. From MVP to enterprise systems, we bring your vision to life.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      gradient: 'from-blue-600 to-cyan-500',
      delay: '200'
    },
    {
      title: 'Data Science & ML',
      description: 'Leveraging advanced analytics, machine learning, and AI to unlock insights from your data and drive intelligent decision-making for your business.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      gradient: 'from-emerald-500 to-teal-500',
      delay: '400'
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 
          className="text-5xl md:text-7xl font-black text-slate-900 text-center mb-20"
          data-aos="fade-down"
        >
          Our Services
        </h2>

        {/* Services Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex-1"
              data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"}
              data-aos-delay={service.delay}
            >
              <div className={`group h-full bg-gradient-to-br ${service.gradient} rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                    Learn More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}