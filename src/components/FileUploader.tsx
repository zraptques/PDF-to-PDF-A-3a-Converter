import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText } from 'lucide-react';
import clsx from 'clsx';

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);
  
  const { 
    getRootProps, 
    getInputProps, 
    isDragActive, 
    isDragAccept, 
    isDragReject 
  } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    maxSize: 100 * 1024 * 1024, // 100MB max size
  });
  
  return (
    <div className="text-center">
      <div 
        {...getRootProps()} 
        className={clsx(
          "border-2 border-dashed rounded-lg p-8 cursor-pointer transition-colors",
          "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          {
            'border-primary bg-primary/5': isDragAccept,
            'border-error bg-error/5': isDragReject,
            'border-gray-300': !isDragActive,
            'border-primary/70 bg-primary/10': isDragActive && !isDragReject
          }
        )}
      >
        <input {...getInputProps()} />
        
        <div className="flex flex-col items-center">
          <div className={clsx(
            "p-4 rounded-full mb-4",
            {
              'bg-primary/10 text-primary': isDragAccept,
              'bg-error/10 text-error': isDragReject,
              'bg-gray-100 text-gray-500': !isDragActive
            }
          )}>
            {isDragReject ? (
              <FileText className="h-10 w-10" />
            ) : (
              <Upload className={clsx("h-10 w-10", {
                'animate-bounce-slow': isDragActive
              })} />
            )}
          </div>
          
          <h3 className="text-lg font-semibold mb-2">
            {isDragActive ? (
              isDragReject ? 'Only PDF files are accepted' : 'Drop your PDF file here'
            ) : (
              'Drag & drop your PDF file here'
            )}
          </h3>
          
          <p className="text-sm text-gray-500 mb-4">
            {!isDragActive && 'or click to browse your files'}
          </p>
          
          {!isDragActive && (
            <button className="btn-primary">
              Select PDF File
            </button>
          )}
          
          <p className="mt-4 text-xs text-gray-400">
            Max file size: 100MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;