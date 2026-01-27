
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { ProjectData } from './types';

const App: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "Cbt records-enhanced",
      description: "A professional dashboard for tracking and managing CBT records with enhanced visualization and reporting features.",
      githubUrl: "https://github.com/rbm190/procbt-dashboard",
      liveUrl: "https://procbt-dashboard.vercel.app/",
      screenshotUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 0,
      language: "TypeScript",
      tags: ["Dashboard", "React", "Analytics"]
    },
    {
      id: 2,
      title: "Cbt records",
      description: "A streamlined application designed for efficient recording and organization of CBT sessions and clinical notes.",
      githubUrl: "https://github.com/rbm190/CBT-recorder",
      liveUrl: "https://cbt-recorder.vercel.app/",
      screenshotUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 0,
      language: "JavaScript",
      tags: ["Recorder", "Web App", "Utilities"]
    },
    {
      id: 3,
      title: "Upcoming Project",
      description: "A new sophisticated project is currently in development. Stay tuned for updates on GitHub.",
      githubUrl: "https://github.com/rbm190",
      liveUrl: null,
      screenshotUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450",
      stars: 0,
      language: "Future",
      tags: ["Development", "Innovation"]
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
                Technical solutions focusing on data management, clinical efficiency, and clean architecture.
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
              Available for collaborations on healthcare tech, dashboards, and scalable web applications.
            </p>
            <a href="mailto:contact@rbm190.dev" className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-200 transition-all inline-block shadow-2xl shadow-white/5">
              Send an Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} RBM190. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="https://github.com/rbm190" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
