# fastApi recipes

The recipe project is a web application that allows users 
to search, view, and add their favorite recipes. 

The application has a user-friendly interface and provides 
a variety of recipe categories to choose from. 

The recipes are stored in a database and can be easily 
retrieved by searching for specific ingredients 
or recipe names. 

Users can add their own recipes by filling out a form with 
details such as the recipe name, ingredients, instructions, 
and cooking time. 

The application also allows users to view random recipes, 
making it easy to find new and exciting dishes to try. 

The styling of the website is clean and modern, 
making it a visually appealing experience for users.

## Instructions

1. Fork/Clone

1. Run the server-side FastAPI app in one terminal window:

    ```sh
    cd backend
    python3 -m venv env
    source env/bin/activate
    (env)$ pip install -r requirements.txt
    (env)$ python3 run_recies.py
    ```

    Navigate to [http://localhost:8000](http://localhost:8000)

1. Run the client-side React app in a different terminal window:

    ```sh
    cd frontend
    npm install
    npm start
    ```

    Navigate to [http://localhost:3000](http://localhost:3000)
