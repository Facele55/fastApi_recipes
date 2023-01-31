
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col, Row } from "react-bootstrap";


function AddRecipe() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    servings: '',
    category: '',
    prep_time: '',
    cook_time: '',
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/recipe', formData);
      setMessage(res.data.message);
      setFormData({
        name: '',
        ingredients: '',
        instructions: '',
        servings: '',
        category: '',
        prep_time: '',
        cook_time: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
        <br/>
        <label htmlFor="ingredients">Ingredients</label>
      <input
        type="textarea"
        placeholder="Ingredients"
        name="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      />
        <br/>
        <label htmlFor="instructions">Instructions</label>
      <input
        type="textarea"
        placeholder="Instructions"
        name="instructions"
        value={formData.instructions}
        onChange={handleChange}
      />
        <br/>
        <label htmlFor="servings">Servings</label>
      <input
        type="number"
        placeholder="Servings"
        name="servings"
        value={formData.servings}
        onChange={handleChange}
      />
        <br/>
        <label htmlFor="category">Category</label>
        <select value={formData.category} onChange={handleChange} name="category" id="category">
            <option value="">Select a category</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="dessert">Dessert</option>
      <option value="snack">Snack</option>
</select>

        <br/>
        <label htmlFor="prep_time">Prep Time</label>
      <input
        type="text"
        placeholder="Prep Time"
        name="prep_time"
        value={formData.prep_time}
        onChange={handleChange}
      />
        <br/>
        <label htmlFor="cook_time">Cook Time</label>
      <input
        type="text"
        placeholder="Cook Time"
        name="cook_time"
        value={formData.cook_time}
        onChange={handleChange}
      />
        <br/>
      <button className="btn success" type="submit">Add Recipe</button>
      {message && <p>{message}</p>}
    </form>
  );
}


export default AddRecipe;