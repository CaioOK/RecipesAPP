import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../styles/explorer.css';

function ExplorerDrinks() {
  const { randomDrinks } = useContext(MyContext);

  if (randomDrinks.length) {
    return (<h3>Carregando...</h3>);
  }
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
        <Link to={ `/bebidas/${randomDrinks.drinks[0].idDrink}` }>
          <button
            className="explorerBtn"
            data-testid="explore-surprise"
            type="button"
          >
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorerDrinks;
