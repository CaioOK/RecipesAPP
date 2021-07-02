import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import MyContext from '../contexts/MyContext';
import RecipeCard from '../components/RecipeCard';
import Footer from '../components/Footer';

function Drinks({ history }) {
  const { drinks, setUserPage } = useContext(MyContext);

  useEffect(() => {
    const setPage = () => {
      setUserPage('Drinks');
    };
    setPage();
  }, [setUserPage]);

  if (drinks.length === 0) return <h3>Nada encontrado!</h3>;
  if (drinks.length === 1) history.push(`/comidas/${drinks[0].idDrink}`);

  return (
    <div>
      <Header pageTitle="Bebidas" searchFeat />
      {drinks.map((drink, index) => (
        <RecipeCard
          key={ index }
          imgUrl={ drink.strDrinkThumb }
          name={ drink.strDrink }
          index={ index }
        />))}
      <Footer />
    </div>
  );
}

Drinks.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Drinks;
