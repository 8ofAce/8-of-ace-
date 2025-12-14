import React, { useState } from 'react';
import { ExternalLink, Github, Twitter, Youtube, Globe, Mail, ArrowRight, Search } from 'lucide-react';

/**
 * CONFIGURATION ZONE
 * ==================
 * Add, remove, or edit your websites here.
 * * Available icons from lucide-react used below:
 * Globe, Github, Twitter, Youtube, Mail
 */
const WEBSITE_LINKS = [
  {
    id: 1,
    title: "Portfolio",
    url: "https://example.com/portfolio",
    category: "Personal",
    description: "My design and development work.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 2,
    title: "GitHub Profile",
    url: "https://github.com",
    category: "Code",
    description: "Check out my open source repositories.",
    icon: <Github className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Twitter / X",
    url: "https://twitter.com",
    category: "Social",
    description: "Daily thoughts and tech updates.",
    icon: <Twitter className="w-6 h-6" />
  },
  {
    id: 4,
    title: "YouTube Channel",
    url: "https://youtube.com",
    category: "Content",
    description: "Tutorials on web development and design.",
    icon: <Youtube className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Contact Me",
    url: "mailto:hello@8oface.com",
    category: "Contact",
    description: "Get in touch for collaborations.",
    icon: <Mail className="w-6 h-6" />
  },
  // COPY AND PASTE THE BLOCK ABOVE TO ADD A NEW LINK
];

// Custom 8 of Ace Logo Component
const Logo = () => (
  <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
    <defs>
      <linearGradient id="spade-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#9CA3AF" />
      </linearGradient>
    </defs>
    
    {/* Sharp, Modern Spade Base */}
    <path 
      d="M50 5 C 50 5, 90 50, 90 70 C 90 85, 78 95, 65 95 C 56 95, 50 88, 50 88 C 50 88, 44 95, 35 95 C 22 95, 10 85, 10 70 C 10 50, 50 5, 50 5 Z" 
      fill="url(#spade-gradient)" 
    />
    
    {/* Stem */}
    <path d="M46 90 L54 90 L60 100 L40 100 Z" fill="#D1D5DB" />
    
    {/* Stylized '8' Negative Space */}
    <path 
      d="M50 45 C 45 45, 41 49, 41 54 C 41 59, 45 63, 50 63 C 55 63, 59 59, 59 54 C 59 49, 55 45, 50 45 Z M50 66 C 43 66, 38 71, 38 78 C 38 85, 43 90, 50 90 C 57 90, 62 85, 62 78 C 62 71, 57 66, 50 66 Z" 
      fill="#000000" 
    />
  </svg>
);

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter links based on search
  const filteredLinks = WEBSITE_LINKS.filter(link => 
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-gray-700 selection:text-white flex flex-col">
      
      {/* Background ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gray-900 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gray-800 rounded-full blur-[120px] opacity-30"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full max-w-4xl mx-auto p-6 md:p-12 flex flex-col items-center justify-center text-center space-y-6">
        <div className="group relative cursor-default">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full opacity-25 group-hover:opacity-50 blur transition duration-500"></div>
          <div className="relative bg-black p-4 rounded-full border border-gray-800 shadow-2xl">
            <Logo />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            8 OF ACE
          </h1>
          <p className="text-gray-500 text-sm md:text-base tracking-widest uppercase font-semibold">
            The Curated Nexus
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md mt-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-800 rounded-xl leading-5 bg-gray-900/50 text-gray-300 placeholder-gray-600 focus:outline-none focus:bg-gray-900 focus:ring-1 focus:ring-gray-600 focus:border-gray-600 sm:text-sm transition-all duration-300 backdrop-blur-sm"
            placeholder="Search destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Main Grid */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-20 flex-grow">
        {filteredLinks.length === 0 ? (
          <div className="text-center py-20 text-gray-600">
            <p>No destinations found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                onMouseEnter={() => setHoveredCard(link.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background with Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 ${hoveredCard === link.id ? 'opacity-75' : ''}`}></div>
                
                <div className="relative h-full bg-black border border-gray-800 rounded-2xl p-6 flex items-start space-x-4 transition-transform duration-300 transform group-hover:-translate-y-1">
                  
                  {/* Icon Box */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center text-white border border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                      {link.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                        {link.category}
                      </p>
                      <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h2 className="text-lg font-bold text-white group-hover:text-gray-200 truncate">
                      {link.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400 group-hover:text-gray-300 line-clamp-2">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-gray-900 mt-auto bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto py-8 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="font-bold text-gray-400">8 OF ACE</span>
            <span className="text-gray-700">|</span>
            <span>Est. 2024</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <div className="flex items-center text-gray-700 text-xs">
              Deployed on Vercel
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
