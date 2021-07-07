import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function RecipeCard({ imgUrl, name, index }) {
  return (
    <section className="section" data-testid={ `${index}-recipe-card` }>
      <img
        className="sectionImg"
        src={ imgUrl }
        alt={ name }
        data-testid={ `${index}-card-img` }
      />
      <p className="sectionText" data-testid={ `${index}-card-name` }>{name}</p>
    </section>
  );
}

RecipeCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
