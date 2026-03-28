from fastapi import FastAPI
from app.database import Base, engine
from app.routes import auth_routes, todo_routes

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(auth_routes.router, prefix="/auth")
app.include_router(todo_routes.router, prefix="/todos")