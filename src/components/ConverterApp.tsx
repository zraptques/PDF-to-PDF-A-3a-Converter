import React, { useState } from 'react';
import FileUploader from './FileUploader';
import ConversionProcess from './ConversionProcess';
import ConversionResult from './ConversionResult';
import InfoSection from './InfoSection';
import { FileType, Info, AlertCircle, Shield } from 'lucide-react';

type ConversionStatus = 'idle' | 'uploading' | 'processing' | 'completed' | 'error';

interface FileInfo {
  file: File;
  preview?: string;
}

const ConverterApp: React.FC = () => {
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [status, setStatus] = useState<ConversionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  
  const handleFileSelect = (file: File) => {
    setFileInfo({ file });
    setStatus('uploading');
    
    // Simulate upload progress
    let uploadProgress = 0;
    const uploadInterval = setInterval(() => {
      uploadProgress += 10;
      setProgress(uploadProgress);
      
      if (uploadProgress >= 100) {
        clearInterval(uploadInterval);
        startConversion(file);
      }
    }, 100);
  };
  
  const startConversion = async (file: File) => {
    setStatus('processing');
    setProgress(0);
    
    try {
      // Simulate processing (in a real app, this would use pdf-lib)
      await simulateConversion();
      
      // Create a mock converted file
      const convertedPdfBlob = new Blob([await file.arrayBuffer()], { type: 'application/pdf' });
      setConvertedFile(convertedPdfBlob);
      setStatus('completed');
    } catch (error) {
      console.error('Conversion error:', error);
      setErrorMessage('Failed to convert the PDF. Please try again with a different file.');
      setStatus('error');
    }
  };
  
  const simulateConversion = async (): Promise<void> => {
    return new Promise((resolve) => {
      let conversionProgress = 0;
      const conversionInterval = setInterval(() => {
        conversionProgress += 5;
        setProgress(conversionProgress);
        
        if (conversionProgress >= 100) {
          clearInterval(conversionInterval);
          resolve();
        }
      }, 150);
    });
  };
  
  const resetConverter = () => {
    setFileInfo(null);
    setConvertedFile(null);
    setStatus('idle');
    setErrorMessage('');
    setProgress(0);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">PDF to PDF/A-3a Converter</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Convert your PDF documents to the PDF/A-3a format for long-term archiving and regulatory compliance.
        </p>
      </div>
      
      <div className="card mb-8">
        {status === 'idle' && (
          <FileUploader onFileSelect={handleFileSelect} />
        )}
        
        {(status === 'uploading' || status === 'processing') && fileInfo && (
          <ConversionProcess 
            fileName={fileInfo.file.name}
            fileSize={fileInfo.file.size}
            status={status}
            progress={progress}
          />
        )}
        
        {status === 'completed' && fileInfo && convertedFile && (
          <ConversionResult 
            originalFile={fileInfo.file}
            convertedFile={convertedFile}
            onReset={resetConverter}
          />
        )}
        
        {status === 'error' && (
          <div className="flex flex-col items-center text-center">
            <AlertCircle className="h-12 w-12 text-error mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Failed</h3>
            <p className="text-gray-600 mb-4">{errorMessage}</p>
            <button onClick={resetConverter} className="btn-primary">
              Try Again
            </button>
          </div>
        )}
      </div>
      
      <div id="features" className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card flex flex-col items-center text-center p-5">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <FileType className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Fast Conversion</h3>
          <p className="text-gray-600 text-sm">
            Convert your PDFs quickly and efficiently, all processed locally in your browser.
          </p>
        </div>
        
        <div className="card flex flex-col items-center text-center p-5">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Info className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">PDF/A-3a Format</h3>
          <p className="text-gray-600 text-sm">
            PDF/A-3a is ideal for long-term archiving with embedded file attachments and accessibility.
          </p>
        </div>
        
        <div className="card flex flex-col items-center text-center p-5">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Secure Processing</h3>
          <p className="text-gray-600 text-sm">
            Your files never leave your computer - all processing happens securely in your browser.
          </p>
        </div>
      </div>
      
      <InfoSection />
    </div>
  );
};

export default ConverterApp;