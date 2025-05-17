import React from 'react';
import { FileText, RefreshCw } from 'lucide-react';

interface ConversionProcessProps {
  fileName: string;
  fileSize: number;
  status: 'uploading' | 'processing';
  progress: number;
}

const ConversionProcess: React.FC<ConversionProcessProps> = ({ 
  fileName, 
  fileSize, 
  status, 
  progress 
}) => {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        {status === 'uploading' ? (
          <FileText className="h-8 w-8 text-primary" />
        ) : (
          <RefreshCw className="h-8 w-8 text-primary animate-spin" />
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-1">
        {status === 'uploading' ? 'Uploading your file' : 'Converting to PDF/A-3a'}
      </h3>
      
      <p className="text-sm text-gray-500 mb-6">
        {fileName} ({formatFileSize(fileSize)})
      </p>
      
      <div className="w-full max-w-md mb-3">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <p className="text-sm text-gray-500">
        {status === 'uploading' 
          ? 'Preparing your file...' 
          : 'Converting... This may take a moment.'}
      </p>
      
      {status === 'processing' && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200 max-w-md">
          <h4 className="text-sm font-medium mb-2">What's happening?</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Analyzing document structure</li>
            <li>• Embedding fonts and resources</li>
            <li>• Adding PDF/A-3a metadata</li>
            <li>• Ensuring compatibility with ISO standards</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConversionProcess;