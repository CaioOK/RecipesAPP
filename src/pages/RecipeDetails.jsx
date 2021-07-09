import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecomendationCards from '../components/RecomendationCards';
import organizeIngredientsAndMeasure from '../services/organizeIngredientsAndMeasure';
import setVideoURL from '../services/setVideoURL';
import MockRecipeDetails from '../services/MockRecipeDetails';
import genericFetch from '../services/genericFetch';
import StartRecipeButton from '../components/StartRecipeButton';
import ShareBtn from '../components/ShareBtn';
import kindOf from '../services/kindOF';
import FavouriteBtn from '../components/FavouriteBtn';

function RecipeDetails({ match, history }) {
  const [recipe, setRecipe] = useState('');
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState('');
  const [thumb, setThumb] = useState('loadin...');
  const [alcoholic, setAlcoholic] = useState('');
  const [foodOrDrink, setFoodDrink] = useState('loadin...');
  const [category, setCategory] = useState('loadin...');
  const [url, setUrl] = useState('https://www.youtube.com/embed/IEDEtZ4UVtI');
  const [recomendationCardsData, setRecomendationCardsData] = useState('');
  useEffect(() => {
    console.log(match, !!recipe);
    if (recipe) {
      setThumb(recipe.strMealThumb || recipe.strDrinkThumb);
      setFoodDrink(recipe.strMeal || recipe.strDrink);
      setCategory(recipe.strCategory);
      organizeIngredientsAndMeasure(recipe, setIngredientsAndMeasures);
      if (recipe.strYoutube) setVideoURL(recipe.strYoutube, setUrl);
      return console.log('foi?');
    }
    const fetchOfRecipe = async () => {
      let keyURL;
      const quantity = 6;
      if (match.path.includes('bebidas')) {
        keyURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
        const data = await genericFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const sixCards = data.meals.slice(0, quantity);
        const { drinks } = await genericFetch(keyURL);
        setAlcoholic(drinks[0].strAlcoholic);
        setRecipe(drinks[0]);
        setRecomendationCardsData(sixCards);
      } else {
        keyURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${match.params.id}`;
        const data = await genericFetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const sixCards = data.drinks.slice(0, quantity);
        const { meals } = await genericFetch(keyURL);
        setRecipe(meals[0]);
        setRecomendationCardsData(sixCards);
      }
    };
    fetchOfRecipe();
  }, [match, recipe]);

  return (
    <section>
      {/* {console.log(match, !!recipe)} */}
      { !ingredientsAndMeasures
        ? <MockRecipeDetails /> : (
          <section style={ { overflowX: 'hidden' } }>
            <img
              style={ { width: '100vh' } }
              src={ thumb }
              alt="some food"
              data-testid="recipe-photo"
            />
            <h1 data-testid="recipe-title">
              { foodOrDrink }
            </h1>
            <h4 data-testid="recipe-category">
              { alcoholic }
              <br />
              { category }
            </h4>
            {/* <button type="button" data-testid="share-btn">
              Share
            </button> */}
            <ShareBtn id={ match.params.id } kind={ kindOf(history) } />
            {/* <button type="button" data-testid="favorite-btn">
              Favorite
            </button> */}
            <FavouriteBtn
              recipe={ recipe }
              id={ match.params.id }
              kind={ kindOf(history) }
            />
            <h2>Ingredients</h2>
            <ol>
              {ingredientsAndMeasures.length ? ingredientsAndMeasures[0]
                .map((ingredient, i) => (
                  <li
                    key={ `${ingredient}${i}` }
                    data-testid={ `${i}-ingredient-name-and-measure` }
                  >
                    { `${ingredient[`strIngredient${i + 1}`]} - ${// strIngredients and strMeasure starts in strIngredients1 and strMeasure1.
                      ingredientsAndMeasures[1][i][`strMeasure${i + 1}`]}`}
                  </li>)) : 'loading' }
            </ol>
            <h2>Instructions</h2>
            <p data-testid="instructions">
              { recipe.strInstructions }
            </p>
            <iframe
              title="food-title"
              data-testid="video"
              width="420"
              height="345"
              src={ url }
            />
            <h2>Recommended</h2>
            <RecomendationCards
              dataForCards={ recomendationCardsData }
            />
            <StartRecipeButton match={ match } />
          </section>)}
    </section>
  );
}

RecipeDetails.propTypes = {
  history: PropTypes.shape({}),
  match: PropTypes.shape(
    { path: PropTypes.string,
      url: PropTypes.string,
      params: PropTypes.shape({
        id: PropTypes.string,
      }) },
  ),
}.isRequired;

export default RecipeDetails;