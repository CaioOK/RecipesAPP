import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MyContext from '../contexts/MyContext';
import '../App.css';

function DrinkIngredients() {
  const { drinksIngredient } = useContext(MyContext);

  return (
    <div>
      <Header pageTitle="Explorar Ingredientes" searchFeat={ false } />
      <div className="master">
        {
          drinksIngredient.map((ingredient, index) => (
            <div
              className="section"
              data-testid={ `${index}-ingredient-card` }
              key={ index }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ `${ingredient.strIngredient}` }
                data-testid={ `${index}-card-img` }
                className="sectionImg"
              />
              <h3 className="sectionText" data-testid={ `${index}-card-name` }>
                {ingredient.strIngredient1}
              </h3>
            </div>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default DrinkIngredients;
