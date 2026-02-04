import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl sm:text-3xl font-bold flex items-center">
          <span className="text-5xl sm:text-6xl text-teal-400">T</span>
          <span className="text-white">echVac</span>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
          <a href="#home" className="text-white hover:text-teal-400 transition-colors px-4">Home</a>
          <a href="#services" className="text-white hover:text-teal-400 transition-colors px-4">Services</a>
          <a href="#about" className="text-white hover:text-teal-400 transition-colors px-4">About</a>
          <a href="#contact" className="text-white hover:text-teal-400 transition-colors px-4">Contact</a>
          <a href="#projects" className="text-white hover:text-teal-400 transition-colors px-4">Projects</a>
        </div>

        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl hover:text-teal-400 transition-colors">Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl hover:text-teal-400 transition-colors">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl hover:text-teal-400 transition-colors">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl hover:text-teal-400 transition-colors">Contact</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-white text-2xl hover:text-teal-400 transition-colors">Projects</a>
        </div>
      )}
    </nav>
  );
}