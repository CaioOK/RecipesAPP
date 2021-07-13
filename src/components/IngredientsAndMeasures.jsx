import React from 'react';
import PropTypes from 'prop-types';

function IngredientsAndMeasures({ ingredientsAndMeasures }) {
  return (
    <ol>
      {ingredientsAndMeasures[0]
        .map((ingredient, i) => (
          <li
            key={ `${ingredient}${i}` }
            data-testid={ `${i}-ingredient-name-and-measure` }
          >
            { `${ingredient[`strIngredient${i + 1}`]} - ${// strIngredients and strMeasure starts in strIngredients1 and strMeasure1.
              ingredientsAndMeasures[1][i][`strMeasure${i + 1}`] !== null
                ? ingredientsAndMeasures[1][i][`strMeasure${i + 1}`]
                : 'to taste'}`}
          </li>))}
    </ol>
  );
}

IngredientsAndMeasures.propTypes = {
  history: PropTypes.shape([]),
}.isRequired;

export default IngredientsAndMeasures;
