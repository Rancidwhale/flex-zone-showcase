from fastapi import HTTPException
from sqlalchemy.orm import Session
from datetime import datetime, timedelta, timezone

from models.user import User
from models.token import RefreshToken

from schemas.user import UserCreate, UserLogin

from utils.hashing import hash_password, verify_password
from utils.jwt import create_access_token, create_refresh_token, hash_token


def register_user(user_data: UserCreate, db: Session):
    """
    Handles user signup logic:
    - check existing user
    - hash password
    - save user to DB
    """

    existing = db.query(User).filter(User.email == user_data.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")

    new_user = User(
        full_name=user_data.full_name,
        nick_name=user_data.nick_name,
        email=user_data.email,
        password=hash_password(user_data.password),
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


def authenticate_user(credentials: UserLogin, db: Session):
    """
    Handles login logic:
    - verify email exists
    - verify password
    - return JWT token
    """

    user = db.query(User).filter(User.email == credentials.email).first()
    if not user or not verify_password(credentials.password, user.password):
        raise HTTPException(status_code=400, detail="Invalid email or password")

    # Create tokens
    access_token = create_access_token({"sub": user.email})
    refresh_token = create_refresh_token({"sub": user.email})

    token_record = RefreshToken(
        user_id= user.id,
        token_hash= hash_token(refresh_token),
        expiry_at=datetime.now(timezone.utc) + timedelta(days=7)
    )

    db.add(token_record)
    db.commit()

    return  {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

