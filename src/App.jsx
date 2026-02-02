import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TechVacWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Web Development",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
      description: "Modern responsive e-commerce solution with payment integration"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      category: "Data Science",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description: "Real-time data visualization with machine learning insights"
    },
    {
      title: "Brand Identity System",
      category: "Graphic Design",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80",
      description: "Complete brand guidelines and visual identity creation"
    },
    {
      title: "Mobile Banking App",
      category: "Software Development",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      description: "Secure and intuitive mobile banking experience"
    },
    {
      title: "Predictive Maintenance System",
      category: "Machine Learning",
      status: "In Progress",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      description: "IoT-based predictive analytics for industrial equipment"
    },
    {
      title: "Restaurant Management Platform",
      category: "Web Development",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      description: "All-in-one solution for restaurant operations and delivery"
    }
  ];

  const news = [
    {
      title: "Deploying FastAPI Projects on Linux Servers",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&q=80",
      date: "Jan 28, 2026",
      excerpt: "A comprehensive guide to deploying FastAPI applications on production Linux environments with Docker, Nginx, and systemd."
    },
    {
      title: "The Future of AI Image Generation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      date: "Jan 25, 2026",
      excerpt: "Exploring the latest advancements in AI image generation models and their practical applications in creative industries."
    },
    {
      title: "Machine Learning in Healthcare: 2026 Trends",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      date: "Jan 20, 2026",
      excerpt: "How machine learning and data science are revolutionizing patient care, diagnostics, and medical research this year."
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl md:text-4xl font-black tracking-tight cursor-pointer">
              <span className="text-teal-400">T</span>
              <span className="text-white">echVac</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-3">
              {['Home', 'Services', 'About', 'Contact', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-5 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 font-medium text-sm"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              {['Home', 'Services', 'About', 'Contact', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="w-full px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium text-left border-b border-white/5 last:border-0"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Decorative Triangle */}
        <div className="absolute top-20 right-8 md:right-20 w-32 h-32 md:w-48 md:h-48">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
            <defs>
              <linearGradient id="triangleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <polygon points="50,10 90,90 10,90" fill="url(#triangleGrad)" opacity="0.6" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center space-y-8 max-w-5xl">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
              data-aos="fade-up"
            >
              TechVac
            </h1>
            <div 
              className="relative inline-block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative z-10">
                <span className="inline-block transform -rotate-2">c</span>
                <span className="inline-block">o</span>
                <span className="inline-block transform rotate-3">m</span>
                <span className="inline-block">i</span>
                <span className="inline-block transform -rotate-1">c</span>
                <span className="inline-block mx-2">_</span>
                <span className="inline-block transform rotate-2">c</span>
                <span className="inline-block">0</span>
                <span className="inline-block transform -rotate-3">d</span>
                <span className="inline-block transform rotate-1">3</span>
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-blue-400/20 blur-3xl -z-10"></div>
            </div>
            <p 
              className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Transforming ideas into digital excellence through innovation, creativity, and cutting-edge technology
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
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
            {/* Graphic Design */}
            <div 
              className="flex-1"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <div className="group h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80"
                    alt="Graphic Design"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-white">Graphic Design</h3>
                  <p className="text-white/90 leading-relaxed">
                    Creating stunning visual identities, logos, brand materials, and marketing collateral that captivate your audience and communicate your brand's unique story.
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

            {/* Software Development */}
            <div 
              className="flex-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="group h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                    alt="Software Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-white">Software Development</h3>
                  <p className="text-white/90 leading-relaxed">
                    Building robust, scalable applications and web solutions using cutting-edge technologies. From MVP to enterprise systems, we bring your vision to life.
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

            {/* Data Science & ML */}
            <div 
              className="flex-1"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="group h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Data Science"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-3xl font-bold text-white">Data Science & ML</h3>
                  <p className="text-white/90 leading-relaxed">
                    Leveraging advanced analytics, machine learning, and AI to unlock insights from your data and drive intelligent decision-making for your business.
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
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-5xl md:text-7xl font-black text-white text-center mb-4"
            data-aos="fade-down"
          >
            Our Projects
          </h2>
          <p className="text-xl text-white/60 text-center mb-16" data-aos="fade-up">
            Showcasing our latest work and success stories
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                      project.status === 'Completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-slate-900'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-sm font-semibold text-teal-400">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="min-h-screen bg-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-5xl md:text-7xl font-black text-slate-900 text-center mb-16"
            data-aos="fade-down"
          >
            Latest News
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-sm font-semibold text-blue-600">{article.date}</span>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                    Read More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-7xl font-black text-white mb-8"
            data-aos="fade-down"
          >
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 mb-12" data-aos="fade-up">
            Ready to start your next project? Let's create something amazing together.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a 
              href="mailto:info@techvac.com"
              className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
            <a 
              href="#projects"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="text-3xl font-black">
                <span className="text-teal-400">T</span>
                <span className="text-white">echVac</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Transforming ideas into digital excellence through innovation and cutting-edge technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-teal-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-teal-400 transition-colors">Projects</button></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Graphic Design</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Software Development</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Data Science</li>
                <li className="hover:text-teal-400 transition-colors cursor-pointer">Machine Learning</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>info@techvac.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-4 flex gap-4">
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            <p>&copy; 2026 TechVac. All rights reserved. | Designed with 💙 by TechVac Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}