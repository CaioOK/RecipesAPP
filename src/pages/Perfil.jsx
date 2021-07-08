import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil({ history }) {
  const { email } = JSON.parse(localStorage.getItem('user'));

  function handleClick() {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    localStorage.removeItem('doneRecipes');
    history.push('/');
  }

  return (
    <div>
      <Header pageTitle="Perfil" searchFeat={ false } />
      <h3 data-testid="profile-email">{ email }</h3>
      <button data-testid="profile-done-btn" type="button">
        <Link to="/receitas-feitas">Receitas Feitas</Link>
      </button>
      <br />
      <button data-testid="profile-favorite-btn" type="button">
        <Link to="/receitas-favoritas">Receitas Favoritas</Link>
      </button>
      <br />
      <button
        data-testid="profile-logout-btn"
        type="button"
        onClick={ handleClick }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

Perfil.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Perfil;
