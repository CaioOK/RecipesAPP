import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ pageTitle, searchFeat }) {
  const createSearchIcon = () => (
    <button type="button">
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />
    </button>
  );

  return (
    <div>
      <h1 data-testid="page-title">{ pageTitle }</h1>
      <Link
        to="/perfil"
      >
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile icon"
        />
      </Link>
      {
        searchFeat
          ? createSearchIcon()
          : <div />
      }
    </div>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  searchFeat: PropTypes.bool.isRequired,
};

export default Header;
