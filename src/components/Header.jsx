import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import '../styles/header.css';

function Header({ pageTitle, searchFeat }) {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function handleClick() {
    setShowSearchBar(!showSearchBar);
  }

  const createSearchIcon = () => (
    <button className="headerButton" type="button" onClick={ handleClick }>
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />
    </button>
  );

  return (
    <header className="header">
      <div className="headerIcon">
        <Link
          to="/perfil"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile icon"
          />
        </Link>
      </div>
      <h1 className="headerTitle" data-testid="page-title">{ pageTitle }</h1>
      {
        searchFeat
          ? createSearchIcon()
          : null
      }
      {
        showSearchBar
          ? <SearchBar />
          : null
      }
    </header>
  );
}

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  searchFeat: PropTypes.bool.isRequired,
};

export default Header;
