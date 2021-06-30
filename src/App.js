import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
    </Router>
  );
}

export default App;
