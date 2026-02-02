

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration',
      status: 'Completed',
      category: 'Web Development'
    },
    {
      title: 'AI Chatbot System',
      description: 'Intelligent customer support chatbot using NLP',
      status: 'In Progress',
      category: 'Machine Learning'
    },
    {
      title: 'Brand Identity Design',
      description: 'Complete rebranding package for tech startup',
      status: 'Completed',
      category: 'Graphics Design'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time business intelligence dashboard',
      status: 'Completed',
      category: 'Data Science'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking solution with biometric auth',
      status: 'In Progress',
      category: 'Mobile Development'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'ML-powered system for industrial equipment monitoring',
      status: 'Completed',
      category: 'Machine Learning'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 
          className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6" 
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Projects
        </h2>

        <p 
          className="text-center text-gray-600 mb-16 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Showcasing our latest work and innovative solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              {/* Project Image Placeholder */}
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="text-center text-white z-10">
                  <div className="text-6xl mb-2">
                    {project.category.includes('Machine Learning') || project.category.includes('Data Science') ? '🤖' :
                     project.category.includes('Graphics') ? '🎨' :
                     project.category.includes('Mobile') ? '📱' : '💻'}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider">{project.category}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;