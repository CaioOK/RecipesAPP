import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RecipeCard({ imgUrl, name, index, meal }) {
  return (
    <Link
      to={ {
        pathname: `/comidas/${meal.idMeal}`,
        state: { meal } } }
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
};

export default RecipeCard;
