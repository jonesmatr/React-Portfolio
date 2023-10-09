import React from 'react';
import NavTabs from '../NavTabs';  // Corrected the import path here
import '../../styles/Header.css'; 

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <header className="header">
            <div className="developer-name">
                Matthew R. Jones
            </div>
            <NavTabs 
                currentPage={currentPage} 
                handlePageChange={handlePageChange} 
            />
        </header>
    );
};

export default Header;

