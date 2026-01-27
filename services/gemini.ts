
import { GoogleGenAI } from "@google/genai";
import { ProjectData } from "../types";

export const getGeminiAssistant = (projects: ProjectData[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const projectContext = projects.map(p => 
    `- ${p.title}: ${p.description}. Tech: ${p.tags.join(', ')}. Link: ${p.githubUrl}`
  ).join('\n');

  const systemInstruction = `
    You are an AI Portfolio Assistant for a top-tier developer. 
    You have knowledge of the following projects:
    ${projectContext}
    
    Your goal is to help visitors (recruiters, clients, or fellow developers) understand the developer's skills.
    Be professional, concise, and enthusiastic. If someone asks about a specific project, highlight its features and technical stack.
    If you don't know the answer, politely direct them to the contact section or the GitHub links.
  `;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction,
    },
  });
};
