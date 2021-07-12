import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/explorer.css';

function Explorer() {
  return (
    <div>
      <Header pageTitle="Explorar" searchFeat={ false } />
      <div className="explorer">
        <Link to="/explorar/comidas">
          <button
            className="explorerBtn"
            data-testid="explore-food"
            type="button"
          >
            Explorar Comidas
          </button>
        </Link>
        <Link to="/explorar/bebidas">
          <button
            className="explorerBtn"
            data-testid="explore-drinks"
            type="button"
          >
            Explorar Bebidas
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explorer;
