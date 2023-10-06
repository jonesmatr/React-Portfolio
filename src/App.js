import React from 'react';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
