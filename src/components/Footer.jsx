import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <div className="footerIcon">
        <Link to="/bebidas">
          <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Drink Icon" />
        </Link>
      </div>
      <div className="footerIcon">
        <Link to="/explorar">
          <img data-testid="explore-bottom-btn" src={ exploreIcon } alt="Explore Icon" />
        </Link>
      </div>
      <div className="footerIcon">
        <Link to="/comidas">
          <img data-testid="food-bottom-btn" src={ mealIcon } alt="Meal Icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
