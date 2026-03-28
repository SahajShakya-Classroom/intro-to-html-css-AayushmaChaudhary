from sqlalchemy.orm import Session
from app import models, schemas

def create_todo(db: Session, todo: schemas.TodoCreate, user_id: int):
    new_todo = models.Todo(
        title=todo.title,
        description=todo.description,
        user_id=user_id
    )
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo


def get_user_todos(db: Session, user_id: int):
    return db.query(models.Todo).filter(models.Todo.user_id == user_id).all()