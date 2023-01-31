import * as React from "react";
import './App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Home";
import RecipeList from "./components/listRecipes";
import RandomRecipe from "./components/randomRecipe";
import AddRecipe from "./components/AddRecipe";
import SearchRecipe from "./components/searchRecipe";

function App() {

  return (
    <div className="container-full">
    <BrowserRouter>
        <h1 className="heading logo">
            <Link  to="/">Recipes</Link>
        </h1>
        <div className="navbar">
            <ul className="no-bullets">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link  to="/list_recipes">List recipes</Link>
                </li>
                <li>
                    <Link to="/random">Random</Link>
                </li>
                <li>
                    <Link to="/add_recipe">Add Recipe</Link>
                </li>
                <li>
                    <Link to="/search_recipe">Search Recipe</Link>
                </li>

            </ul>
   </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list_recipes' element={<RecipeList/>}/>
            <Route path='/random' element={<RandomRecipe/>}/>
            <Route path='/add_recipe' element={<AddRecipe/>}/>
            <Route path='/search_recipe' element={<SearchRecipe/>}/>
        </Routes>

    </BrowserRouter>
    </div>
  );
}


export default App;