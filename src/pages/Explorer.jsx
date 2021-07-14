import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/explorer.css';

function Explorer() {
  return (
    <section>
      <Header pageTitle="Explorar" searchFeat={ false } />
      <nav className="explorer">
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
      </nav>
      <Footer />
    </section>
  );
}

export default Explorer;
