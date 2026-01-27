
import { GitHubRepo, ProjectData } from '../types';

/**
 * Fetches public repositories for a given GitHub username.
 * For this demo, we'll fetch from a well-known dev if none is provided.
 */
export const fetchUserProjects = async (username: string): Promise<ProjectData[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error('Failed to fetch repos');
    
    const repos: GitHubRepo[] = await response.json();
    
    // Process repos into our ProjectData format
    // Filter out forks if desired
    return repos
      .filter(repo => !repo.fork)
      .map(repo => {
        // Construct a screenshot URL using a free service like Microlink
        // If homepage exists, we use it. Otherwise, we can use a placeholder.
        const screenshotUrl = repo.homepage 
          ? `https://api.microlink.io?url=${encodeURIComponent(repo.homepage)}&screenshot=true&meta=false&embed=screenshot.url`
          : `https://picsum.photos/seed/${repo.id}/800/450`;

        return {
          id: repo.id,
          title: repo.name.replace(/[-_]/g, ' '),
          description: repo.description || 'A brilliant technical project showcasing modern development practices.',
          githubUrl: repo.html_url,
          liveUrl: repo.homepage,
          screenshotUrl,
          stars: repo.stargazers_count,
          language: repo.language || 'Code',
          tags: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Project']
        };
      });
  } catch (error) {
    console.error('Error fetching from GitHub:', error);
    return [];
  }
};
