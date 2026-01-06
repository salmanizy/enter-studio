import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;