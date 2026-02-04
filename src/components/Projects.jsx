import React from 'react';

export default function Projects() {
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

  return (
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
  );
}