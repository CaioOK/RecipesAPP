import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  return (
    <div>
      <Header pageTitle="Explorar" searchFeat={ false } />
      <h1>Olá eu sou a pagina de Explorar</h1>
      <Link to="/explorar/comidas">
        <button data-testid="explore-food" type="button">Explorar Comidas</button>
      </Link>
      <Link to="/explorar/bebidas">
        <button data-testid="explore-drinks" type="button">Explorar Bebidas</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Explorer;
