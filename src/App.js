import React from 'react';
import './App.css';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import Login from './components/Login/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CustomerAddId from './components/CustomerAddId/CustomerAddId';
import Search from './components/Search/Search';









function App() {
  return (
    <div>
        <Router>

          <div className="header">
              <nav>
                <ul>
                  <li>
                    <Link to="/customerInfo">Home</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </nav>
           </div>

          <Switch>
            
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route exact path="/">
              <Search></Search>
              <CustomerInfo></CustomerInfo>
            </Route>
            <Route path="/customerAddId">
              <CustomerAddId></CustomerAddId>
            </Route>
            <Route path="/customerInfo">
               <CustomerInfo></CustomerInfo>
            </Route>
            
          </Switch>

        </Router>
        
    </div>
  );
}

export default App;
