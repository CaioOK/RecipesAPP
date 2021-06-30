import React from 'react';

function Header() {
  return (
    <div>
      <h1 data-testid="page-title">My Title</h1>
      <button data-testid="search-top-btn" type="button">Search</button>
      <button data-testid="profile-top-btn" type="button">Profile</button>
    </div>
  );
}

export default Header;
