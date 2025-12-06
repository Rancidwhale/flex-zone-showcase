from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from schemas.user import UserCreate, UserResponse, UserLogin
from services.user_service import register_user, authenticate_user
from database import get_db

from models.user import User
from utils.deps import get_current_user

router = APIRouter()

# Dependency: create a new DB session for each request

# -------------------------------
# SIGNUP
# -------------------------------
@router.post("/signup", response_model=UserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    return register_user(user, db)

# -------------------------------
# LOGIN
# -------------------------------
@router.post("/login")
def login(credentials: UserLogin, db: Session = Depends(get_db)):
    return authenticate_user(credentials,db)

@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user