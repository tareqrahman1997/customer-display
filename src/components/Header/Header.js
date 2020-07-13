import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/customerInfo">Information</a>
                <a href="/customerAddId">CustomerEnter</a>
                <a href="/login">Login</a>
                
            </nav>
        </div>
    );
};

export default Header;