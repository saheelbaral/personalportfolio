import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
