import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import HowItWorks from './components/Sections/HowItWorks';
import UseCases from './components/Sections/UseCases';
import Comparison from './components/Sections/Comparison';
import DemoPreview from './components/Sections/DemoPreview';
import Waitlist from './components/Sections/Waitlist';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <UseCases />
        <Comparison />
        <DemoPreview />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;