import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeleteRecipe = ({ id }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deleteRecipe = async () => {
      await axios.delete(`http://localhost:8000/recipe/${id}`);
      console.log(id)
      setLoading(false);
    };
    deleteRecipe();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Deleting...</h1>
      ) : (
        <h1>Recipe Deleted</h1>
      )}
    </div>
  );
};

export default DeleteRecipe;
