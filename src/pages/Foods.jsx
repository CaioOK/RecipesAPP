import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import MyContext from '../contexts/MyContext';
import Footer from '../components/Footer';

function Foods({ history }) {
  const { meals, setUserPage } = useContext(MyContext);

  useEffect(() => {
    const setPage = () => {
      setUserPage('Foods');
    };
    setPage();
  }, [setUserPage]);

  if (meals.length === 0) return <h3>Nada encontrado!</h3>;
  if (meals.length === 1) history.push(`/comidas/${meals[0].idMeal}`);

  return (
    <div>
      <Header pageTitle="Comidas" searchFeat />
      {meals.map((meal, index) => (
        <RecipeCard
          key={ index }
          imgUrl={ meal.strMealThumb }
          name={ meal.strMeal }
          index={ index }
        />))}
      <Footer />
    </div>
  );
}

Foods.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Foods;
