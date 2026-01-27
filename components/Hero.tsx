
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block glass-morphism px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-white/10 text-blue-400">
          Full Stack Developer
        </div>
        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
          Digital <span className="gradient-text">Systems</span><br />By RBM190
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-12">
          Specializing in performant dashboards, record management systems, and clinical utility tools. 
          Bridging the gap between complex data and intuitive user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 uppercase text-sm tracking-wider">
            Explore My Work
          </a>
          <a href="https://github.com/rbm190" target="_blank" rel="noopener noreferrer" className="glass-morphism border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all uppercase text-sm tracking-wider">
            GitHub Profile
          </a>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 w-full max-w-5xl h-[500px] opacity-10 blur-[120px] pointer-events-none">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-blue-500 rounded-full" />
          <div className="absolute top-20 right-0 w-1/3 h-full bg-purple-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
