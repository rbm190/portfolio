
import React, { useState, useEffect, useRef } from 'react';
import { ProjectData, ChatMessage } from '../types';
import { getGeminiAssistant } from '../services/gemini';

interface AIChatAssistantProps {
  projects: ProjectData[];
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projects.length > 0 && !chatRef.current) {
      chatRef.current = getGeminiAssistant(projects);
      setMessages([{ role: 'model', content: "Hi! I'm the AI assistant for this portfolio. Want to know more about the developer's experience or projects?" }]);
    }
  }, [projects]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', content: response.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', content: "Sorry, I'm having trouble connecting to the brain right now. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass-morphism rounded-2xl w-80 md:w-96 shadow-2xl flex flex-col h-[500px] border border-white/10">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider">AI Portfolio Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none text-xs text-gray-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my projects..."
              className="flex-grow bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500/50"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg float transition-transform active:scale-95 flex items-center gap-2 group"
        >
          <span className="hidden group-hover:block text-sm font-bold uppercase pl-2">Chat with Me</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default AIChatAssistant;
