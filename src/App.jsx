import React from 'react';

// Importing components
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import SpeakerSection from './components/SpeakerSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* Header with logo and navbar */}
      <Header />

      {/* Hero Section with props */}
      <Hero 
        title="Welcome to TEDxIIMT"
        subtitle="Ideas Worth Spreading. Voices That Inspire."
      />

      {/* Events Section */}
      <Events />

      {/* Speakers Section */}
      <SpeakerSection />

      {/* Footer with About and Contact */}
      <Footer />
    </div>
  );
};

export default App;
