import React from 'react';
import RecomendationCards from '../components/RecomendationCards';

function MockRecipeDetails() {
  return (
    <section>
      <header>
        <img
          src="https://i.pinimg.com/564x/05/d5/97/05d5975b5e82201b786b5f164a968e2c.jpg"
          alt="some food"
          data-testid="recipe-photo"
        />
        <h1 data-testid="recipe-title">
          loading...
        </h1>
        <h4 data-testid="recipe-category">
          loading...
        </h4>
        <button type="button" data-testid="share-btn">
          Share
        </button>
        <button type="button" data-testid="favorite-btn">
          Favorite
        </button>
      </header>
      <main>
        <h2>Ingredients</h2>
        <ol>
          <li data-testid="0-ingredient-name-and-measure">
            Loading...
          </li>
        </ol>
        <h2>Instructions</h2>
        <p data-testid="instructions">
          Loading...
        </p>
        <iframe
          title="food-title"
          data-testid="video"
          width="420"
          height="345"
          src="https://www.youtube.com/embed/IEDEtZ4UVtI"
        />
      </main>
      <nav>
        <h2>Recommended</h2>
        <RecomendationCards />
      </nav>
      <button
        data-testid="start-recipe-btn"
        type="button"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default MockRecipeDetails;
