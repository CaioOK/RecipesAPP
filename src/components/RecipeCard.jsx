import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ imgUrl, name, index, meal, drink }) {
  const recipe = drink || meal;
  let path;
  if (recipe === drink) path = `/bebidas/${recipe.idDrink}`;
  else { path = `/comidas/${recipe.idMeal}`; }
  console.log(recipe, path);
  return (
    <Link
      to={ path }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        src={ imgUrl }
        alt={ name }
        data-testid={ `${index}-card-img` }
        style={ { width: '150px', height: '160px' } }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </Link>
  );
}

RecipeCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({ idMeal: PropTypes.string }).isRequired,
  drink: PropTypes.shape({ idDrink: PropTypes.string }).isRequired,
};

export default RecipeCard;
