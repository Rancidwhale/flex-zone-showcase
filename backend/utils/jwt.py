from datetime import datetime, timedelta, timezone
from jose import jwt, JWTError
import hashlib
import os

SECRET_KEY = os.getenv("SECRET_KEY", "change_this_access_key")
REFRESH_SECRET_KEY = os.getenv("REFRESH_SECRET_KEY", "change_this_refresh_secret")
ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "15"))  # short lived
REFRESH_TOKEN_EXPIRE_DAYS = int(os.getenv("REFRESH_TOKEN_EXPIRE_DAYS", "7"))      # longer lived

def create_access_token(data: dict):
    """
    Why: create a longer-lived token that can be used to obtain new access tokens.
    We sign with a separate secret to separate concerns.
    """
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token

def create_refresh_token(data: dict):
    """
    Why: create a longer-lived token that can be used to obtain new access tokens.
    We sign with a separate secret to separate concerns.
    """
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS)
    to_encode.update({'exp': expire})
    token = jwt.encode(to_encode, REFRESH_SECRET_KEY, algorithm=ALGORITHM)
    return token

def verify_access_token(token: str ):
    """
    Decodes and validates access token. Raises JWTError if invalid/expired.
    """
    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    return payload

def verify_refesh_token(token: str):
    """
    Decodes refresh token using refresh secret.
    """
    payload = jwt.decode(token, REFRESH_SECRET_KEY, algorithms=[ALGORITHM])
    return payload

# Helper to hash refresh token before storing in DB (so DB doesn't store raw token)
def hash_token(token: str):
    return hashlib.sha256(token.encode()).hexdigest()