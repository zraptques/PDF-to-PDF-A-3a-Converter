import React from 'react';
import { FileType2, Lock, CheckSquare } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="bg-gray-900 rounded-xl p-8 text-white mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">What is PDF/A-3a?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            PDF/A is an ISO-standardized version of the PDF designed for long-term archiving of electronic documents.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-800 rounded-lg p-5">
            <FileType2 className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">Long-term Preservation</h3>
            <p className="text-gray-400 text-sm">
              PDF/A documents are self-contained with all resources embedded, ensuring they can be reproduced exactly the same way in the future.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-5">
            <Lock className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">Compliance & Standards</h3>
            <p className="text-gray-400 text-sm">
              Many government agencies and organizations require PDF/A format for document submissions and archiving.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-5">
            <CheckSquare className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">PDF/A-3a Features</h3>
            <p className="text-gray-400 text-sm">
              PDF/A-3a specifically allows for the inclusion of attachments in any format, while ensuring the document remains accessible.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://www.iso.org/standard/57229.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-gray-900 rounded-lg px-5 py-2.5 font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            Learn More About PDF/A Standards
          </a>
        </div>
      </div>
      
      <div id="faq" className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Why convert to PDF/A-3a?</h3>
            <p className="text-gray-600">
              PDF/A-3a ensures your documents remain readable and accessible in the future, regardless of software changes. It's ideal for legal documents, financial records, and any files requiring long-term preservation.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Is my data secure?</h3>
            <p className="text-gray-600">
              Yes, all processing happens locally in your browser. Your files never leave your computer or get uploaded to any server, ensuring complete privacy and security.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">What's the difference between PDF/A-1, PDF/A-2, and PDF/A-3?</h3>
            <p className="text-gray-600">
              PDF/A-1 is the basic standard, while PDF/A-2 adds support for JPEG2000, transparency, and layers. PDF/A-3 extends this further by allowing the embedding of any file format as an attachment.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">What does the "a" in PDF/A-3a mean?</h3>
            <p className="text-gray-600">
              The "a" designation indicates the highest level of compliance, ensuring the document is both visually reproducible and fully accessible with tagged content, making it readable by screen readers for people with disabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;