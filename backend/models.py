from pydantic import BaseModel
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


# Connect to the MySQL database
engine = create_engine("mysql+mysqlconnector://root:@127.0.0.1/recipe")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


class Recipe(Base):
	__tablename__ = "recipes"
	id = Column(Integer, primary_key=True, index=True)
	name = Column(String(255), index=True)
	ingredients = Column(String(255))
	instructions = Column(String(255))
	servings = Column(Integer)
	category = Column(String(255))
	prep_time = Column(Integer)
	cook_time = Column(Integer)


Base.metadata.create_all(bind=engine)


class RecipeCreate(BaseModel):
	name: str
	ingredients: str
	instructions: str
	servings: int
	category: str
	prep_time: int
	cook_time: int
