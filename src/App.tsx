import React from 'react';
import { MainPageContent } from './components/MainPageContent';
import { Navbar } from './components/Navbar'

const App: React.FC= () => {
  return (
    <>
      <Navbar/>
      <MainPageContent/>
    </>
  );
}

export default App;
