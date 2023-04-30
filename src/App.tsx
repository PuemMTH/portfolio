import React from 'react';
import Header from './components/Header';
import Github from './components/Github';
import CertificateListProps from './components/CertificateListProps';
import MyProfile from './components/MyProfile';
import './assets/Scrollbar.css'

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen bg-slate-400">
      <Header />
      <main className="flex-grow">
        <MyProfile />
        <CertificateListProps />
        <Github />
      </main>
    </div>
  );
};

export default App;
