import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';

function Header({ pageTitle, searchFeat }) {
  const createSearchIcon = () => (
    <i src="../images/searchIcon.svg" data-testid="search-top-btn">
      <img src={ searchIcon } alt="search icon" />
    </i>
  );

  return (
    <div>
      <h1 data-testid="page-title">{ pageTitle }</h1>
      <i src="../images/profileIcon.svg" data-testid="profile-top-btn">
        <img src={ profileIcon } alt="profile icon" />
      </i>
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
