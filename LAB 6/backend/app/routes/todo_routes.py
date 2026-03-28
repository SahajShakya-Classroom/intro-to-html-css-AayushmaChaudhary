from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app import schemas
from app.controllers import todo_controller
from app.deps import get_current_user

router = APIRouter()

@router.post("/")
def create(todo: schemas.TodoCreate,
           db: Session = Depends(get_db),
           user=Depends(get_current_user)):
    return todo_controller.create_todo(db, todo, user.id)


@router.get("/")
def get_my_todos(db: Session = Depends(get_db),
                 user=Depends(get_current_user)):
    return todo_controller.get_user_todos(db, user.id)