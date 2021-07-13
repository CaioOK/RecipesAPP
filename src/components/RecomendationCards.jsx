import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/RecomendationCards.css';
import './RecomendationCards.css';
import { Link } from 'react-router-dom';

function RecomendationCards({ dataForCards, linkToRedirect }) {
  useEffect(() => {
    console.log(dataForCards);
  }, [dataForCards]);
  return (
    <nav className="scroll">
      {dataForCards && dataForCards.map((data, i) => (
        <section className="inScreen" key={ i } data-testid={ `${i}-recomendation-card` }>
          {' '}
          {console.log(linkToRedirect)}
          <Link to={ `${linkToRedirect}/${data.idMeal || data.idDrink}` }>
            <img
              src={ data.strMealThumb || data.strDrinkThumb }
              alt="some food"
              data-testid="recipe-photo"
            />
          </Link>
          <h4>
            { data.strAlcoholic }
            <br />
            { data.strCategory }
          </h4>
          <h3 data-testid={ `${i}-recomendation-title` }>
            { data.strMeal || data.strDrink }
          </h3>
        </section>
      ))}
    </nav>
  );
}

RecomendationCards.propTypes = {
  linkToRedirect: PropTypes.string,
  dataForCards: PropTypes.shape(
    { map: PropTypes.func,
    },
  ),
}.isRequired;

export default RecomendationCards;
