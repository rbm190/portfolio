
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold gradient-text tracking-tighter uppercase">
          rbm190
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
