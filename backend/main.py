
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.sql import func

from .models import RecipeCreate, SessionLocal, Recipe


app = FastAPI()

origins = [
	"http://localhost:3000",
	"localhost:3000"
]

app.add_middleware(
		CORSMiddleware,
		allow_origins=origins,
		allow_credentials=True,
		allow_methods=["*"],
		allow_headers=["*"]
)


@app.get("/")
async def root():
	return {"message": "Welcome to recipe api"}


@app.get("/ten_recipes/")
def get_first_ten_recipes():
	db = SessionLocal()
	recipe = db.query(Recipe).limit(10).all()
	if recipe:
		return {"recipe": recipe}
	else:
		raise HTTPException(status_code=404, detail="Recipe not found")


@app.post("/recipe/")
async def create_recipe(recipe: RecipeCreate):
	db = SessionLocal()
	new_recipe = Recipe(name=recipe.name, ingredients=recipe.ingredients, instructions=recipe.instructions, servings=recipe.servings, category=recipe.category, prep_time=recipe.prep_time, cook_time=recipe.cook_time)
	print(new_recipe)
	db.add(new_recipe)
	db.commit()
	db.refresh(new_recipe)
	return {"message": "Recipe created successfully"}


@app.get("/recipe/{id}")
async def recipe_details(id: int):
	db = SessionLocal()
	recipe = db.query(Recipe).filter(Recipe.id == id).first()
	if recipe:
		return {"recipe": recipe}
	else:
		raise HTTPException(status_code=404, detail="Recipe not found")


@app.put("/recipe/{id}")
async def update_recipe(id: int, recipe: RecipeCreate):
	db = SessionLocal()
	recipe_to_update = db.query(Recipe).filter(Recipe.id == id).first()
	if recipe_to_update:
		recipe_to_update.name = recipe.name
		recipe_to_update.ingredients = recipe.ingredients
		recipe_to_update.instructions = recipe.instructions
		recipe_to_update.servings = recipe.servings
		recipe_to_update.category = recipe.category
		recipe_to_update.prep_time = recipe.prep_time
		recipe_to_update.cook_time = recipe.cook_time
		db.add(recipe_to_update)
		db.commit()
		return {"message": "Recipe updated successfully"}
	else:
		raise HTTPException(status_code=404, detail="Recipe not found")


@app.delete("/recipe/{id}")
async def delete_recipe(id: int):
	db = SessionLocal()
	recipe_to_delete = db.query(Recipe).filter(Recipe.id == id).first()
	if recipe_to_delete:
		db.delete(recipe_to_delete)
		db.commit()
		return {"message": "Recipe deleted successfully"}
	else:
		raise HTTPException(status_code=404, detail="Recipe not found")


@app.get("/random_recipe/")
def get_random_recipe():
	db = SessionLocal()
	recipe = db.query(Recipe).order_by(func.random()).first()
	if recipe:
		return {"recipe": recipe}
	else:
		raise HTTPException(status_code=404, detail="Recipe not found")


@app.get("/search_recipe/{query}")
async def search_recipe(query: str = Query(None)):
	if query:
		db = SessionLocal()
		recipes = db.query(Recipe).filter(Recipe.name == query)
		recipe = [recipe for recipe in recipes]
		print(recipe)
		if recipe:
			return {"recipe": recipe}
		else:
			raise HTTPException(status_code=404, detail="Recipe not found")
	else:
		raise HTTPException(status_code=404, detail="Search name is empty")
