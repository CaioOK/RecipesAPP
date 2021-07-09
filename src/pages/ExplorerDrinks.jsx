import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';

function ExplorerDrinks() {
  const { randomDrinks } = useContext(MyContext);

  if (randomDrinks.length) {
    return (<h3>Carregando...</h3>);
  }
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
      <Link to={ `/bebidas/${randomDrinks.drinks[0].idDrink}` }>
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
