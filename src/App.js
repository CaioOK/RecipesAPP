import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explorer from './pages/Explorer';
import Perfil from './pages/Perfil';
import RecipesDone from './pages/RecipesDone';
import RecipesFav from './pages/RecipesFav';
import ExplorerFoods from './pages/ExplorerFoods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import FoodIngredients from './pages/FoodIngredients';
import DrinkIngredients from './pages/DrinkIngredients';
import FoodOrigin from './pages/FoodOrigin';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route exact path="/comidas/:id" component={ RecipeDetails } />
      <Route exact path="/bebidas/:id" component={ RecipeDetails } />
      <Route
        exact
        path="/comidas/:id/in-progress"
        render={ (props) => <RecipeInProgress { ...props } /> }
      />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        render={ (props) => <RecipeInProgress { ...props } /> }
      />
      <Route exact path="/explorar" component={ Explorer } />
      <Route exact path="/explorar/comidas" component={ ExplorerFoods } />
      <Route exact path="/explorar/bebidas" component={ ExplorerDrinks } />
      <Route exact path="/explorar/comidas/ingredientes" component={ FoodIngredients } />
      <Route exact path="/explorar/bebidas/ingredientes" component={ DrinkIngredients } />
      <Route exact path="/explorar/comidas/area" component={ FoodOrigin } />
      <Route exact path="/perfil" component={ Perfil } />
      <Route exact path="/receitas-feitas" component={ RecipesDone } />
      <Route exact path="/receitas-favoritas" component={ RecipesFav } />
    </Router>
  );
}

export default App;
