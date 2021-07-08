import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './RecomendationCards.css';

function RecomendationCards({ dataForCards }) {
  useEffect(() => {
    console.log(dataForCards);
  }, []);
  return (
    <div className="scroll">
      {dataForCards && dataForCards.map((data, i) => (
        <section className="inScreen" key={ i } data-testid={ `${i}-recomendation-card` }>
          {' '}
          <img
            src={ data.strMealThumb || data.strDrinkThumb }
            alt="some food"
            data-testid="recipe-photo"
          />
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
    </div>
  );
}

RecomendationCards.propTypes = {
  dataForCards: PropTypes.shape(
    { map: PropTypes.func,
    },
  ).isRequired,
};

export default RecomendationCards;
