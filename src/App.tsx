import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SubjectsMarquee from './components/SubjectsMarquee';
import StudyTools from './components/StudyTools';
import CollegesMarquee from './components/CollegesMarquee';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <SubjectsMarquee />
        <StudyTools />
        <CollegesMarquee />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
