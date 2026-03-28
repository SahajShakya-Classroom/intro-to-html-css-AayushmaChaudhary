from pydantic import BaseModel

# -------- USER --------
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# -------- TODO --------
class TodoCreate(BaseModel):
    title: str
    description: str

class TodoOut(BaseModel):
    id: int
    title: str
    description: str

    class Config:
        from_attributes = True