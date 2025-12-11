import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import SwedishValues from './components/SwedishValues/SwedishValues';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Testimonials />
        <SwedishValues />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
