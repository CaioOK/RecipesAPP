import React from 'react';
import DoneRecipesBar from '../components/DoneRecipesBar';
import DoneRecipesCard from '../components/DoneRecipesCard';
import Header from '../components/Header';

function RecipesDone() {
  const storedDoneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  console.log(storedDoneRecipes);

  return (
    <section>
      <Header pageTitle="Receitas Feitas" searchFeat={ false } />
      <h1>Olá eu sou a pagina de Receitas Feitas</h1>
      <DoneRecipesBar />
      <div>
        {storedDoneRecipes.map((recipe, index) => (
          <DoneRecipesCard
            key={ `${recipe.id}-done-card${index}` }
            recipe={ recipe }
            index={ index }
          />))}
      </div>
    </section>
  );
}

export default RecipesDone;
