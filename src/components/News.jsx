import React from 'react';

export default function News() {
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

  return (
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
  );
}