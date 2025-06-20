import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ValueProposition from './components/ValueProposition/ValueProposition';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ValueProposition />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;