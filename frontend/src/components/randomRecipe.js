import React, {useEffect, useState} from "react";
import axios from "axios";


function RandomRecipe() {
    const [recipe, setRecipe] = useState({});


    useEffect(() => {
        // fetch data from API
        axios.get('http://127.0.0.1:8000/random_recipe/')
            .then(res => setRecipe(res.data.recipe))
    }, []);

if (recipe) {
    console.log('0')
}
else {
    console.log('1')
}
    return (
        <div className="container">
            <h1>Random Recipe</h1>
            {recipe ? <div className="recipe-card">
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
            </div> : <div>uytr</div>}

        </div>
    );
}

export default RandomRecipe;