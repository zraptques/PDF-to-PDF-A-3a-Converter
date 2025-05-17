import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ConverterApp from './components/ConverterApp';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <ConverterApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;