import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to="/customers">Customers</Link>
      <br/>
      <Link to="/customers/3000">Customers 3000</Link>
    </div>
    </Router>

  );
}

export default App;
