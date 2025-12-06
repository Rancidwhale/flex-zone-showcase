from pydantic import BaseModel, EmailStr
from datetime import datetime

# Schema for user signup request
class UserCreate(BaseModel):
    full_name: str
    nick_name: str | None = None
    email: EmailStr
    password: str
# Schema for user response (after signup / fetch)
class UserResponse(BaseModel):
    id: int
    full_name: str
    nick_name: str | None = None
    email: EmailStr
    created_at: datetime | None

    class Config:
        orm_mode = True  # Allows SQLAlchemy -> Pydantic conversion

class UserLogin(BaseModel):
    email: EmailStr
    password: str