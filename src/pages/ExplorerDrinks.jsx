import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorerDrinks() {
  return (
    <div>
      <Header pageTitle="Explorar Bebidas" searchFeat={ false } />
      <Link to="/explorar/bebidas/ingredientes">
        <button
          data-testid="explore-by-ingredient"
          type="button"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/comidas">
        <button
          data-testid="explore-surprise"
          type="button"
        >
          {/* Requisito 74, preciso da tela de Detalhes,
           já estou gerando o Random no Context */}
          Me Surpreenda!
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default ExplorerDrinks;
