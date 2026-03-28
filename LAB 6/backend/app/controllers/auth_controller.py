from sqlalchemy.orm import Session
from app import models, schemas
from app.auth import hash_password, verify_password, create_token

def register(db: Session, user: schemas.UserCreate):
    new_user = models.User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )
    db.add(new_user)
    db.commit()
    return new_user

def login(db: Session, user: schemas.UserLogin):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.password):
        return None

    return create_token({"sub": db_user.email})