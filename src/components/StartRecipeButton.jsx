import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

function StartRecipeButton({ match: { url, params: { id } } }) {
  const localS = localStorage.inProgressRecipes;
  const { doneRecipes } = localStorage;
  return (
    <Link
      style={ { position: 'fixed', //  source : https://www.w3schools.com/css/css_positioning.asp
        bottom: '5px',
        right: '5px',
        textDecoration: 'none', // source : https://www.w3schools.com/css/css_link.asp
        color: '#eae2b7',
        backgroundColor: '#590010',
        padding: '10px',
        borderRadius: '10px',
        pointerEvents: doneRecipes.includes(id) ? 'none' : '' } }
      data-testid="start-recipe-btn"
      to={ `${url}/in-progress` }
    >
      {localS.includes(id) ? 'Continuar Receita' : 'Iniciar Receita'}
    </Link>
  );
}

StartRecipeButton.propTypes = {
  match: PropTypes.shape(
    { path: PropTypes.string,
      url: PropTypes.string,
    },
  ),
}.isRequired;

export default StartRecipeButton;
