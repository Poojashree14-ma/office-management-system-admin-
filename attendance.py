from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Attendance
from app.schemas import AttendanceCreate

router = APIRouter()


@router.post("/")
def mark_attendance(data: AttendanceCreate, db: Session = Depends(get_db)):

    attendance = Attendance(
        employee_name=data.employee_name,
        status=data.status,
        date=data.date
    )

    db.add(attendance)
    db.commit()

    return {
        "message": "Attendance marked"
    }


@router.get("/")
def get_attendance(db: Session = Depends(get_db)):

    return db.query(Attendance).all()