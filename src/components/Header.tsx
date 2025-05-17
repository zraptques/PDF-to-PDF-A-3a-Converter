import React from 'react';
import { FileType2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileType2 className="h-7 w-7 text-primary" />
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">PDF to PDF/A-3a Converter</h1>
        </div>
        
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6">
            <li>
              <a 
                href="https://www.iso.org/standard/57229.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                About PDF/A
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                className="text-gray-600 hover:text-primary font-medium transition-colors"
              >
                Features
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;