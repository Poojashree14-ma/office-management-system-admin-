from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.auth import router as auth_router
from app.employee import router as employee_router
from app.attendance import router as attendance_router
from app.leave import router as leave_router
from app.dashboard import router as dashboard_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")
app.include_router(employee_router, prefix="/employees")
app.include_router(attendance_router, prefix="/attendance")
app.include_router(leave_router, prefix="/leave")
app.include_router(dashboard_router, prefix="/dashboard")


@app.get("/")
def home():
    return {
        "message": "Office Management Backend Running"
    }