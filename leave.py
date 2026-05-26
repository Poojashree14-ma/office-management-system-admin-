from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Leave
from app.schemas import LeaveCreate

router = APIRouter()


@router.post("/")
def apply_leave(data: LeaveCreate, db: Session = Depends(get_db)):

    leave = Leave(
        employee_name=data.employee_name,
        reason=data.reason
    )

    db.add(leave)
    db.commit()

    return {
        "message": "Leave applied"
    }


@router.get("/")
def get_leave_requests(db: Session = Depends(get_db)):

    return db.query(Leave).all()