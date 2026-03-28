from sqlalchemy.orm import Session
from app import models, schemas
from app.auth import hash_password, verify_password, create_access_token

def register_user(db: Session, user: schemas.UserCreate):
    existing = db.query(models.User).filter(models.User.email == user.email).first()
    if existing:
        return None

    new_user = models.User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


def login_user(db: Session, user: schemas.UserLogin):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()

    if not db_user or not verify_password(user.password, db_user.password):
        return None

    token = create_access_token({"sub": db_user.email})
    return token