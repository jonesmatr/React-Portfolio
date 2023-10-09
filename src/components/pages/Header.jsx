import React from 'react';
import NavTabs from '../NavTabs';
import '../../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="developer-name">
                Matthew R. Jones
            </div>
            <NavTabs />
        </header>
    );
};

export default Header;

