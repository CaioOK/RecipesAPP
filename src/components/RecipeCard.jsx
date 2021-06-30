import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard({ imgUrl, name, index }) {
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <img
        src={ imgUrl }
        alt={ name }
        data-testid={ `${index}-card-img` }
        style={ { width: '150px', height: '160px' } }
      />
      <p data-testid={ `${index}-card-name` }>{name}</p>
    </section>
  );
}

RecipeCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
