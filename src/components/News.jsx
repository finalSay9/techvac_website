
const News = () => {
  const newsArticles = [
    {
      title: 'Deploying FastAPI on Linux Servers',
      description: 'Complete guide to deploying production-ready FastAPI applications on Linux with Nginx and Gunicorn for optimal performance.',
      category: 'Backend Development',
      date: 'January 28, 2026',
      readTime: '8 min read'
    },
    {
      title: 'The Future of AI: Imagine the Possibilities',
      description: 'Exploring breakthrough AI technologies and their transformative impact on modern businesses and everyday life.',
      category: 'Artificial Intelligence',
      date: 'January 25, 2026',
      readTime: '6 min read'
    },
    {
      title: 'Machine Learning Trends in 2026',
      description: 'Latest developments in data science and machine learning that are shaping the industry and driving innovation.',
      category: 'Data Science',
      date: 'January 22, 2026',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="news" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 
          className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6" 
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Our News
        </h2>

        <p 
          className="text-center text-gray-600 mb-16 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Latest insights, tutorials, and technology trends
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="flip-left"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Article Image Placeholder */}
              <div className="relative w-full h-56 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="text-center text-white z-10">
                  <div className="text-6xl mb-2">
                    {article.category.includes('Backend') ? '🚀' :
                     article.category.includes('AI') ? '🤖' : '📊'}
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.description}
                </p>

                <a 
                  href="#" 
                  className="inline-flex items-center text-teal-500 hover:text-teal-600 font-semibold transition-colors group"
                >
                  Read More 
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

export default News;