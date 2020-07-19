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
            <Route path="/customerInfo">
               <CustomerInfo></CustomerInfo>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route>
              <CustomerAddId></CustomerAddId>
            </Route>
          </Switch>

        </Router>
        
    </div>
  );
}

export default App;
