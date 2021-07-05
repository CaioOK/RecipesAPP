import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../contexts/MyContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

function Drinks({ history }) {
  const { drinks, setUserPage, noResultsFound, setNoResultsFound,
  } = useContext(MyContext);
  const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  const { alert } = window;

  useEffect(() => {
    const setPage = () => {
      setUserPage('Drinks');
    };
    setPage();
  }, [setUserPage]);

  if (drinks.length === 1) history.push(`/bebidas/${drinks[0].idDrink}`);
  if (noResultsFound) {
    alert(message);
    setNoResultsFound(false);
  }

  return (
    <div>
      <Header pageTitle="Comidas" searchFeat />
      {
        (
          (!drinks.length) ? <h3>Nada encontrado!</h3>
            : drinks.map(({ strDrinkThumb = '', strDrink = '' }, index) => (
              <RecipeCard
                key={ index }
                imgUrl={ strDrinkThumb }
                name={ strDrink }
                index={ index }
              />))
        )
      }
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Drinks;
