from fastapi import APIRouter
from pydantic import BaseModel
from app.utils.jwt_handler import create_access_token

router = APIRouter()

class UserLogin(BaseModel):
    email: str
    password: str


@router.post("/login")
def login(user: UserLogin):

    # STATIC LOGIN
    if (
        user.email == "admin@gmail.com"
        and
        user.password == "123456"
    ):

        token = create_access_token({
            "sub": user.email
        })

        return {
            "token": token,
            "user": {
                "id": 1,
                "name": "Admin",
                "email": "admin@gmail.com",
                "role": "admin"
            }
        }

    return {
        "message": "Invalid credentials"
    }