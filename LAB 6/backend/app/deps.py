from fastapi import Depends, HTTPException
from jose import jwt
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import User

SECRET_KEY = "secret"
ALGORITHM = "HS256"

def get_current_user(token: str, db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email = payload.get("sub")
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.email == email).first()
    return user