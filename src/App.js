import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CustomerAddId from './components/CustomerAddId/CustomerAddId';
import Login from './components/Login/Login';







function App() {
  return (
    <div>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/customerAddId">
              <CustomerAddId></CustomerAddId>
            </Route>
            <Route path="/customerInfo">
               <CustomerInfo></CustomerInfo>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
          </Switch>
        </Router>
        
    
          
          
  
    </div>
  );
}

export default App;
