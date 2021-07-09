import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

function ExplorerDrinks() {
  return (
    <div>
      <Header pageTitle="Explorar Bebidas" searchFeat={ false } />
      <div className="explorer">
        <Link to="/explorar/bebidas/ingredientes">
          <button
            className="explorerBtn"
            data-testid="explore-by-ingredient"
            type="button"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas">
          <button
            className="explorerBtn"
            data-testid="explore-surprise"
            type="button"
          >
            {/* Requisito 74, preciso da tela de Detalhes,
            já estou gerando o Random no Context */}
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerDrinks;
