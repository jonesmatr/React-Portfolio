import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* Navigation is included within the Header component */}

      <main>
        <section id="about" className="bg-light p-5 rounded">
          <AboutMe />
        </section>

        <section id="portfolio" className="bg-secondary p-5 rounded my-5">
          <Portfolio />
        </section>

        <section id="contact" className="bg-light p-5 rounded">
          <Contact />
        </section>

        <section id="resume" className="bg-secondary p-5 rounded my-5">
          <Resume />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
