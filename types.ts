
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  // Added fork property to fix type error in services/github.ts line 18
  fork: boolean;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string | null;
  screenshotUrl: string;
  stars: number;
  language: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
