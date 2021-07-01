import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import MyContext from '../contexts/MyContext';
import Footer from '../components/Footer';

function Foods({ history }) {
  const { meals, setMealsUrl } = useContext(MyContext);

  const handleApiRequest = (type, value) => {
    switch (type) {
    case 'letter': {
      setMealsUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
      break;
    }
    case 'ingredient': {
      setMealsUrl(`www.themealdb.com/api/json/v1/1/filter.php?i=${value}`);
      break;
    }
    case 'name': {
      setMealsUrl(`www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      break;
    }
    default:
      break;
    }
  };

  if (meals.length === 0) return <h3>Nada encontrado!</h3>;
  if (meals.length === 1) history.push(`/comidas/${meals[0].idMeal}`);

  console.log(meals);
  return (
    <div>
      <Header pageTitle="Comidas" searchFeat />
      <h1>Olá eu sou a pagina de Comida</h1>
      <button
        type="button"
        onClick={ () => handleApiRequest('letter', 'c') }
      >
        Click
      </button>
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
