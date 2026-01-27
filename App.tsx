
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AIChatAssistant from './components/AIChatAssistant';
import { fetchUserProjects } from './services/github';
import { ProjectData } from './types';

const App: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [githubUser, setGithubUser] = useState('gaearon'); // Default user for demo

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchUserProjects(githubUser);
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, [githubUser]);

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                  Selected <span className="gradient-text">Works</span>
                </h2>
                <p className="text-gray-400 max-w-lg">
                  A collection of open-source contributions and personal endeavors, 
                  automatically synced with GitHub.
                </p>
              </div>
              
              {/* Dynamic User Search for Demo */}
              <div className="flex gap-2 items-center">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Source:</span>
                <input 
                  type="text" 
                  value={githubUser}
                  onChange={(e) => setGithubUser(e.target.value)}
                  placeholder="GitHub Username"
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-blue-500/50"
                />
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="h-96 glass-morphism rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : projects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-morphism rounded-3xl">
                <p className="text-gray-400">No projects found for user "{githubUser}"</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto glass-morphism p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full" />
            
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
              Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light">
              Interested in working together or just want to say hi? 
              My inbox is always open for exciting projects and new ideas.
            </p>
            <a href="mailto:hello@example.com" className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-200 transition-all inline-block">
              Send an Email
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} DEV.PROTO. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIChatAssistant projects={projects} />
    </div>
  );
};

export default App;
