
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './types';

const App: React.FC = () => {
  // Placeholder projects. These can be updated once the user provides specific URLs and photos.
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Visionary UI Framework",
      description: "A comprehensive design system for building accessible and high-performance web applications with React and Tailwind CSS.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      screenshotUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 124,
      language: "TypeScript",
      tags: ["React", "UI/UX", "Tailwind"]
    },
    {
      id: 2,
      title: "Nebula Engine",
      description: "A fast, lightweight distributed computing engine designed for real-time data processing and analytics at scale.",
      githubUrl: "https://github.com",
      liveUrl: null,
      screenshotUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 89,
      language: "Rust",
      tags: ["Performance", "Distributed", "Data"]
    },
    {
      id: 3,
      title: "Atlas Maps Proxy",
      description: "Secure and performant proxy layer for map tile services with built-in caching and rate-limiting capabilities.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      screenshotUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 45,
      language: "Go",
      tags: ["Infrastructure", "Proxy", "Maps"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                Selected <span className="gradient-text">Works</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                A curated selection of technical projects focusing on performance, 
                scalability, and user-centric design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto glass-morphism p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light">
              Looking for a partner to build something extraordinary? 
              Drop me a line and let's discuss your next big idea.
            </p>
            <a href="mailto:contact@developer.me" className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-200 transition-all inline-block shadow-2xl shadow-white/5">
              Send an Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} ARCHITECT. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
