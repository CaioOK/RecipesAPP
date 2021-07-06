import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import MyContext from '../contexts/MyContext';
import Footer from '../components/Footer';

function Foods({ history }) {
  const { meals, setUserPage, noResultsFound, setNoResultsFound } = useContext(MyContext);
  const message = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';
  const { alert } = window;

  useEffect(() => {
    const setPage = () => {
      setUserPage('Foods');
    };
    setPage();
  }, [setUserPage]);

  if (meals.length === 1) history.push(`/comidas/${meals[0].idMeal}`);

  if (noResultsFound) {
    alert(message);
    setNoResultsFound(false);
  }

  return (
    <div>
      <Header pageTitle="Comidas" searchFeat />
      {
        (
          (!meals.length) ? <h3>Carregando...</h3>
            : meals.map(({ strMealThumb = '', strMeal = '' }, index) => (
              <RecipeCard
                key={ index }
                imgUrl={ strMealThumb }
                name={ strMeal }
                index={ index }
              />))
        )
      }
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Foods;
