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
      <Route exact path="/bebidas" />
      <Route exact path="/comidas/:id" />
      <Route exact path="/bebidas/:id" />
      <Route exact path="/comidas/:id/in-progress" />
      <Route exact path="/bebidas/:id/in-progress" />
      <Route exact path="/explorar" />
      <Route exact path="/explorar/comidas" />
      <Route exact path="/explorar/bebidas" />
      <Route exact path="/explorar/comidas/ingredientes" />
      <Route exact path="/explorar/bebidas/ingredientes" />
      <Route exact path="/explorar/comidas/area" />
      <Route exact path="/perfil" />
      <Route exact path="/receitas-feitas" />
      <Route exact path="/receitas-favoritas" />
    </Router>
  );
}

export default App;
