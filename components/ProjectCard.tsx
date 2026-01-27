
import React from 'react';
import { ProjectData } from '../types';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass-morphism rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-white/5 flex flex-col h-full">
      {/* Screenshot Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.screenshotUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
              #{tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 items-center mt-auto pt-4 border-t border-white/5">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
          >
            GITHUB <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
            >
              LIVE DEMO <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
