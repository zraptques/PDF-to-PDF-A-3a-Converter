import React from 'react';
import { FileType2, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <FileType2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-white">PDF to PDF/A-3a Converter</span>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-medium">PDF/A Resources</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a 
                  href="https://www.iso.org/standard/57229.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  ISO Standard
                </a>
              </li>
              <li>
                <a 
                  href="https://en.wikipedia.org/wiki/PDF/A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  PDF/A Wiki
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-medium">Links</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-sm text-gray-500">
          <p>&copy; {year} PDF to PDF/A-3a Converter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;