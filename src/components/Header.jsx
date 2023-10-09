import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css'; // Importing Header.css

const Header = () => {
    return (
        <header className="header">
            <div className="developer-name">
                Matthew R. Jones
            </div>
            <Navigation />
        </header>
    );
};

export default Header;

