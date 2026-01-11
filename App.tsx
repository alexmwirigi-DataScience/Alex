import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Journey from './components/Journey';
import Services from './components/Services';
import Mission from './components/Mission';
import Pillars from './components/Pillars';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased text-charcoal bg-ivory selection:bg-stone-200">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Journey />
        <Services />
        <Mission />
        <Pillars />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;