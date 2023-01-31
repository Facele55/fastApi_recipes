import React, { useState, useEffect } from 'react';
import axios from "axios";

const UpdateRecipe = ({ id }) => {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [servings, setServings] = useState('');

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(`http://localhost:8000/recipe/${id}`);
      console.log(response)
      // setRecipe(response.data);
      // setName(response.data.name);
      // setCategory(response.data.category);
      // setPrepTime(response.data.prep_time);
      // setCookTime(response.data.cook_time);
      // setServings(response.data.servings);
      // setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedRecipe = {
      name,
      category,
      prep_time: prepTime,
      cook_time: cookTime,
      servings
    };
    await axios.put(`http://localhost:8000/recipe/${id}`, updatedRecipe);
    window.location.href = '/';
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="prepTime">Prep Time:</label>
            <input
              type="number"
              id="prepTime"
              value={prepTime}
              onChange={(event) => setPrepTime(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cookTime">Cook Time:</label>
            <input
              type="number"
              id="cookTime"
              value={cookTime}
              onChange={(event) => setCookTime(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="servings">Servings:</label>
            <input
              type="number"
              id="servings"
              value={servings}
              onChange={(event) => setServings(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
          <button type="submit">Update Recipe</button>
        </form>
      )}
    </div>
  );
};

export default UpdateRecipe;
