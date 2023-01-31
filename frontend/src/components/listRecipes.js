import React, {useEffect, useState} from 'react';
import axios from 'axios';

import UpdateRecipe from "./UpdateRecipe";
import DeleteRecipe from "./DeleteRecipe";

// component to list all recipes
function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // fetch data from API
        axios.get('http://127.0.0.1:8000/ten_recipes/')
            .then(res => setRecipes(res.data.recipe))
    }, []);

    return (
        <div className="container">
            <h1>10 Random Recipes List</h1>
            <ul>

                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <div className="recipe-card">
                            <div className="card-body">
                                {/*<i style={{float: 'right'}} className="fas fa-pen"><UpdateRecipe id={recipe.id} /></i>*/}
                                {/*<i style={{float: 'right'}} className="fas fa-trash"><DeleteRecipe id={recipe.id} /></i>*/}
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
                ))}
            </ul>

        </div>
    );

}

export default RecipeList;