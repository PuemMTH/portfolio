import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Skills from './Skills';

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Portfolio />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
