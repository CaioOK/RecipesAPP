import React from 'react';

// limpar css, flex row, img
function Footer() {
  return (
    <footer data-testid="footer">
      <button data-testid="drinks-bottom-btn" type="button">
        <img src="" alt="img" />
        Drinks
      </button>
      <button data-testid="explore-bottom-btn" type="button">
        Discovery
      </button>
      <button data-testid="food-bottom-btn" type="button">
        Foods
      </button>
    </footer>
  );
}

export default Footer;
