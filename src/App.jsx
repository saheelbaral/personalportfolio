import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Testimonials />
      </div>
    </ThemeProvider>
  );
}

export default App;
