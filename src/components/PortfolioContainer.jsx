import { useState } from 'react';
import Header from './pages/Header';  // Import Header
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header 
      currentPage={currentPage} 
      handlePageChange={handlePageChange}/> 
      <main className="mx-3">{renderPage()}</main>
      <Footer />
    </div>
  );
}
