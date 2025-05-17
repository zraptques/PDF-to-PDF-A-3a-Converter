import React from 'react';
import { CheckCircle, Download, RefreshCw } from 'lucide-react';

interface ConversionResultProps {
  originalFile: File;
  convertedFile: Blob;
  onReset: () => void;
}

const ConversionResult: React.FC<ConversionResultProps> = ({ 
  originalFile, 
  convertedFile, 
  onReset 
}) => {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const handleDownload = () => {
    const downloadUrl = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = originalFile.name.replace(/\.pdf$/, '-pdfa3a.pdf');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
  };
  
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <CheckCircle className="h-12 w-12 text-success" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">Conversion Complete!</h3>
      <p className="text-gray-600 mb-6">Your PDF has been successfully converted to PDF/A-3a format.</p>
      
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6 max-w-md mx-auto">
        <div className="flex justify-between items-start mb-4">
          <div className="text-left">
            <h4 className="text-sm font-medium">Original File</h4>
            <p className="text-xs text-gray-500">PDF Document</p>
          </div>
          <div className="text-right">
            <p className="text-sm">{formatFileSize(originalFile.size)}</p>
          </div>
        </div>
        
        <div className="h-px bg-gray-200 my-3"></div>
        
        <div className="flex justify-between items-start">
          <div className="text-left">
            <h4 className="text-sm font-medium">Converted File</h4>
            <p className="text-xs text-gray-500">PDF/A-3a Format</p>
          </div>
          <div className="text-right">
            <p className="text-sm">{formatFileSize(convertedFile.size)}</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={handleDownload}
          className="btn-primary"
        >
          <Download className="h-5 w-5 mr-2" />
          Download PDF/A-3a
        </button>
        
        <button 
          onClick={onReset}
          className="btn-secondary"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Convert Another File
        </button>
      </div>
    </div>
  );
};

export default ConversionResult;