import React, {useState} from 'react';
import axios from "axios";

function SearchRecipe() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');


  async function handleSearch(event) {
    event.preventDefault();
    console.log(searchQuery)
    try {
      const response = axios.get(`http://localhost:8000/search_recipe?query=${searchQuery}`);
      setSearchResults((await response).data.recipes);
      console.log((await response).data)
    } catch (error) {
      console.error(error.response.data.detail);
      setError(error.response.data.detail);
    }
  }

  return (
      <div className="container-full">
        <form onSubmit={handleSearch}>
          <label>
            Search for a recipe:
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
          </label>
          <button className="btn success" type="submit">Search</button>
        </form>
        {error ? <p className="error">{error}</p> :
			<p>
              {searchResults}
			</p>

		}
        {searchResults ? searchResults.map(recipe => (
            <li key={recipe.id}>
              <div className="recipe-card">
                <div className="card-body">
                  <h3 className="recipe-name">{recipe.name}</h3>
                  <div className="category-name">{recipe.category}</div>
                  <div>Ingredients: <p>{recipe.ingredients}</p></div>
                  <div>Instructions: <p>{recipe.instructions}</p></div>
                  <div className="time-servings">
                    <span>Preparation time: {recipe.prep_time} minutes</span>
                    <span>Cook time: {recipe.cook_time} minutes</span>
                    <span>Servings for: {recipe.servings} person</span>
                  </div>
                </div>
              </div>
            </li>
        )) : <p>nothing</p>}


      </div>

  )
}

export default SearchRecipe;
