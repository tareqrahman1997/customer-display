import React from 'react';
//import './Header.css';
import { BrowserRouter as Link
  } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link  to="/customerInfo">Information</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                
                    
                    
                
                
            </nav> 
        </div>
    );
};

export default Header;